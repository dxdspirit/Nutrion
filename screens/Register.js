import React, { useState, useEffect, Alert } from 'react'
import { StyleSheet, Image, Text, View, TextInput, TouchableOpacity } from 'react-native'
import firebase from 'firebase'
import db from '../db/config'
const Register = ({ navigation }) => {
    var users = [];
    const [username, setUsername] = useState('');
    const [firstName, setFirstName] = useState('');
    const [LastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    // const [photoURL, setPhotoURL] = useState('');
    const [password, setPassword] = useState('');
    const [re_password, setRe_Password] = useState('');
    const [isLogin, setIsLogin] = useState(false);
    var currentUser
    const pressHandler = () => {
        //loop kiếm phần tử trùng
        var available = 0;
        for (var i = 0; i < users.length; i++) {
            if (email === users[i].email) {
                available = 1;
            }
            else available = 0;
        }
        // console.log(available);
        //check empty 
        console.log(re_password);

        if (email === '' || password === "" || re_password === "") {
            alert("You forget somethings")
        }
        else if (password !== re_password) {
            alert('re-password wrong')
        }
        else if (available === 1) {
            alert("User already registed")
        }
        else {
            firebase.auth().createUserWithEmailAndPassword(email, password)
                .then(currentuser = firebase.auth().currentUser,
                    writeUserData(username, firstName, LastName, email),
                    navigation.navigate("Loading"))
                .catch(function (error) {
                    // Handle Errors here.
                    var errorCode = error.code;
                    var errorMessage = error.message;
                    // [START_EXCLUDE]
                    if (errorCode == 'auth/weak-password') {
                        alert('The password is too weak.');
                    } else {
                        alert(errorMessage);
                    }
                    console.log(error);
                    // [END_EXCLUDE]
                });

        }

    }
    console.log(currentUser);

    const writeUserData = (username, firstName, LastName, email) => {
        firebase.database().ref('users/').set({
            username: username,
            firstName: firstName,
            lastName: LastName,
            email: email,
        });
        

    }
    useEffect(() => {
        const rootRef = firebase.database().ref();
        const usersRef = rootRef.child("users");
        usersRef.on('value', (snapshot) => {
            snapshot.forEach((doc) => {
                users.push({
                    email: doc.toJSON().email,
                    password: doc.toJSON().password,
                    username: doc.toJSON().username,
                });
            });
            // console.log(users);
        });
    });

    return (
        <View style={styles.container}>
            <View style={styles.top}>
                <View style={styles.logoContainer}>
                    <Image style={styles.logo} source={{ uri: "https://pbs.twimg.com/profile_images/580575039986274304/nwOdIasJ.jpg" }}>
                    </Image>
                </View>
            </View>

            <View style={styles.RegisForm}>
                <View style={styles.textInputContainer}>
                    <TextInput
                        style={styles.textInput}
                        textContentType='emailAddress'
                        keyboardType='email-address'
                        placeholder='Enter your email'
                        onChangeText={text => setEmail(text)}></TextInput>
                </View>
                <View style={styles.textInputContainer}>
                    <TextInput
                        style={styles.textInput}

                        placeholder='Enter your UserName'
                        onChangeText={text => setUsername(text)}></TextInput>
                </View>
                <View style={styles.textInputContainer}>
                    <TextInput
                        style={styles.textInput}
                        placeholder='Enter your First Name'
                        onChangeText={text => setFirstName(text)}></TextInput>
                </View>
                <View style={styles.textInputContainer}>
                    <TextInput
                        style={styles.textInput}
                        placeholder='Enter your Last Name'
                        onChangeText={text => setLastName(text)}></TextInput>
                </View>



                <View style={styles.textInputContainer}>

                    <TextInput
                        style={styles.textInput}
                        secureTextEntry={true}
                        placeholder='Enter your password'
                        onChangeText={text => setPassword(text)}></TextInput>
                </View>
                <View style={styles.textInputContainer}>

                    <TextInput
                        style={styles.textInput}
                        placeholder='Repeat password'
                        secureTextEntry={true}
                        onChangeText={text => setRe_Password(text)}></TextInput>
                </View>
                <TouchableOpacity
                    style={styles.loginBtn}
                    onPress={pressHandler}
                >
                    <Text>SIGN UP</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Register

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column",
        justifyContent: "center",
        backgroundColor: 'rgba(250, 249, 249,1)',

    },
    top: {
        flex: 5,
        justifyContent: "center",
        alignItems: "center",

    },
    RegisForm: {
        flex: 5,
        justifyContent: "center",
        alignItems: "center"
    },
    logoContainer: {
        backgroundColor: '#FFF',
        width: 310,
        height: 230,
        borderRadius: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
    },
    logo: {
        paddingTop: 100,
        width: 300,
        height: 220,
        borderRadius: 10,

    },
    textInputContainer: {
        justifyContent: "flex-start",
        marginTop: 20,
        backgroundColor: '#fff',
        paddingHorizontal: 10,
        borderRadius: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
    },
    textInput: {
        width: 280,
        height: 40,
    },
    loginBtn: {
        width: 300,
        height: 40,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 20,
        backgroundColor: 'rgba(233, 193, 133,1)',
        paddingHorizontal: 10,
        borderRadius: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,

    },
})
