import React, { useState, useEffect } from 'react'
import { StyleSheet, Image, Text, View } from 'react-native'
import firebase from 'firebase'
import { TouchableOpacity } from 'react-native-gesture-handler';
const UserInfomation = ({navigation}) => {
    const [displayName, setDisplayName] = useState('');
    const [photoURL, setPhotoURL] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    var user = firebase.auth().currentUser;
    const Devider = (props) => {
        return <View {...props}>
            <View style={styles.line}></View>
        </View>
    }

    useEffect(() => {
        if (user !== null) {
            user.providerData.forEach(function (profile) {
                setDisplayName(profile.displayName);
                setEmail(profile.email);
                setPhotoURL(profile.photoURL)
                setPhoneNumber(profile.phoneNumber);
            });
        }
    }, [user])
    if (photoURL === null) {
        setPhotoURL("http://upload.wikimedia.org/wikipedia/commons/e/e1/Anne_Hathaway_Face.jpg");
    }
    return (
        <View style={styles.container} >

            <View style={styles.top}>
                <View style={styles.profile}>
                    <Image
                        style={styles.profileImage}
                        source={{ uri: photoURL }}>
                    </Image>
                </View>
            </View>
            <View style={styles.InfoHeader}>
                <Text style={styles.headerTitle}>Thông tin cá nhân</Text>
                <TouchableOpacity style={styles.changeInfoButton}
                onPress={()=>navigation.navigate("UpdateUser")}>
                    <Text style={{
                        fontWeight: "bold",
                        fontSize:15
                    }} >Đổi</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.middle}>
                <View style={styles.infoComponent}>
                    <Text>Tên</Text>
                    <Text style={styles.TextInfo}>{displayName}</Text>
                </View>
                <Devider style={styles.devider}></Devider>
                <View style={styles.infoComponent}>
                    <Text>Email</Text>
                    <Text style={styles.TextInfo}>{email}</Text>
                </View>
                <Devider style={styles.devider}></Devider>
                <View style={styles.infoComponent}>
                    <Text >Số điện thoại</Text>
                    <Text style={styles.TextInfo}>{phoneNumber}</Text>
                </View>

            </View>

        </View>
    )
}

export default UserInfomation

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column"
    },
    top: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    middle: {
        flex: 5,
        width: '100%'
    },
    profile: {
        backgroundColor: "#FFF",
        height: 120,
        width: 120,
        borderRadius: 60,
        alignItems: "center",
        justifyContent: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 12,
        },
        shadowOpacity: 0.58,
        shadowRadius: 16.00,
        elevation: 24,
    },
    profileImage: {
        width: 110,
        height: 110,
        borderRadius: 65,
        justifyContent: "center"
    },
    InfoHeader: {
        alignItems: "center",
        width: "100%",
        height: 35,
        flexDirection: "row",
        backgroundColor: 'rgba(233, 193, 133,1)',
    },
    headerTitle: {
        flex: 8,
        fontWeight: "bold",
        fontSize: 15,
        padding: 10
    },
    changeInfoButton: {
        padding: 10,
        paddingRight:20,
        flex: 1
    },
    TextInfo: {
        textAlignVertical: "center",

        fontSize: 18,
        fontWeight: "bold",
        color: 'rgba(233, 193, 133,1)',
        backgroundColor: '#fff',
        width: '100%',
        height: 30,
    },
    infoComponent: {
        backgroundColor: '#fff',
        elevation: 5,
        paddingLeft: 10
    },
    line: {
        flex: 2,
        height: 1,
        backgroundColor: 'rgba(233, 193, 133,1)',
    },
    textOR: {
        flex: 1,
        textAlign: "center"
    },
    devider: {
        flexDirection: "row",
        height: 1,
        width: "100%",
        justifyContent: "center",
        alignItems: "center",

    },
})  