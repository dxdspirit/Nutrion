import React, { useEffect, useState } from 'react'
import { StyleSheet, TouchableOpacity, Image, Button, View, Text, Keyboard } from 'react-native'
import { TextInput, TouchableWithoutFeedback } from 'react-native-gesture-handler'

import firebase from 'firebase'

import db from '../db/config'
import iconFacebook from '../assets/036-facebook.png';
import iconInstagram from '../assets/029-instagram.png';
import iconGoogle from '../assets/033-google-plus.png';




const Loading = ({ navigation }) => {
    var users = [];
    const Devider = (props) => {
        return <View {...props}>
            <View style={styles.line}></View>
            <Text style={styles.textOR}>OR</Text>
            <View style={styles.line}></View>
        </View>
    }
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const [isLogin, setIsLogin] = useState(false);
    console.log(isLogin)
    var user = firebase.auth().currentUser;
    const loginHandler = () => {
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(() => {
                setIsLogin(true);
                navigation.navigate('Home');
            }).catch(function (error) {
                // Handle Errors here.
                var errorCode = error.code;
                var errorMessage = error.message;
                // [START_EXCLUDE]
                if (errorCode === 'auth/wrong-password') {
                    alert('Wrong password.');
                } else {
                    alert(errorMessage);
                }
                console.log(error);
            });
        
    }
    return (
        <View style={styles.container}>

            <View style={styles.top}>
                <View style={styles.logoContainer}>
                    <Image style={styles.logo} source={{ uri: "https://pbs.twimg.com/profile_images/580575039986274304/nwOdIasJ.jpg" }}>
                    </Image>
                </View>
            </View>

            <View style={styles.middle}>
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
                        placeholder='Enter your password'
                        onChangeText={text => setPassword(text)}></TextInput>
                </View>
                <TouchableOpacity
                    style={styles.loginBtn}
                    onPress={loginHandler}>
                    <Text>LOGIN</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.loginBtn}
                    onPress={() => navigation.navigate('Register')}>
                    <Text>SIGN UP</Text>
                </TouchableOpacity>
                <Devider style={styles.devider}></Devider>
                <View style={styles.media}>
                    <TouchableOpacity onPress={() => navigation.navigate('Home')} style={{ padding: 20 }}>
                        <Image style={styles.icon} source={iconFacebook}></Image>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => navigation.navigate('Home')} style={{ padding: 20 }}>
                        <Image style={styles.icon} source={iconInstagram}></Image>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => navigation.navigate('Home')} style={{ padding: 20 }}>
                        <Image style={styles.icon} source={iconGoogle}></Image>
                    </TouchableOpacity>
                </View>


            </View>
        </View>
    )
}

export default Loading

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
    middle: {
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
    icon: {
        width: 30,
        paddingBottom: 20,
        height: 30
    },
    line: {
        flex: 2,
        height: 1,
        backgroundColor: 'rgba(144, 139, 130,1)',
    },
    textOR: {
        flex: 1,
        textAlign: "center"
    },
    devider: {
        flexDirection: "row",
        height: 40,
        width: 280,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 20
    },
    media: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-around",

        justifyContent: "center",

    }
})
