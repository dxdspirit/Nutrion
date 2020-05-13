import React from 'react'
import { StyleSheet, Text, Button, Image, View, ImageBackground } from 'react-native'
import { TouchableOpacity, TextInput, FlatList } from 'react-native-gesture-handler'

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import iconAdd from '../assets/add.png';
import iconEnergy from '../assets/icon-energy.png';
import iconProtein from '../assets/icon-protein.png';
import iconCarbohydrate from '../assets/icon-carbohydrate.png';
import iconFat from '../assets/icon-fat.png';

import firebase from 'firebase'
import OpenSans from '../assets/fonts/OpenSans-Regular.ttf';
import Loading from './Loading';

const Tab = createBottomTabNavigator();

const Home = ({ navigation }) => {
   
    

    return (


        <View style={styles.container} >

            <View style={styles.top}>
                <TouchableOpacity style={styles.profile}
                    onPress={() => navigation.navigate('UserInfomation')}>
                    <Image
                        style={styles.profileImage}
                        source={{ uri: "http://upload.wikimedia.org/wikipedia/commons/e/e1/Anne_Hathaway_Face.jpg" }}>
                    </Image>

                </TouchableOpacity>
                <Text style={{ fontSize: 25, fontWeight: "bold" }}>Anne Hathaway</Text>
                <View style={{ flexDirection: "row", }}>
                    <Text style={{ marginLeft: 10 }}>59kg</Text>
                    <Text style={{ marginLeft: 10 }}>167cm</Text>
                </View>
            </View>
            <View style={styles.middle_status}>
                <View style={styles.middle_left}>
                    <View style={styles.status}>
                        <View style={styles.iconContainer}>
                            <Image source={iconEnergy}
                                style={styles.iconStatus}></Image>
                        </View>
                        <Text>100</Text>
                    </View>
                    <View style={styles.status}>
                        <View style={styles.iconContainer}>
                            <Image source={iconProtein}
                                style={styles.iconStatus}></Image>
                        </View>
                        <Text>100</Text>
                    </View>
                </View>
                <View style={styles.middle_right}>
                    <View style={styles.status}>
                        <View style={styles.iconContainer}>
                            <Image source={iconCarbohydrate}
                                style={styles.iconStatus}></Image>
                        </View>
                        <Text>100</Text>
                    </View>
                    <View style={styles.status}>
                        <View style={styles.iconContainer}>
                            <Image source={iconFat}
                                style={styles.iconStatus}></Image>
                        </View>
                        <Text>100</Text>
                    </View>
                </View>
            </View >
            <View style={styles.suggestion}>
                <View style={styles.suggestion_left}>
                    <TouchableOpacity style={styles.suggest}>
                        <Text style={styles.suggest_title}>Món ngon cho bạn</Text>
                        <Text style={styles.suggest_detail}>Đàn ông nấu ăn có gì sai</Text>
                    </TouchableOpacity >
                    <TouchableOpacity style={styles.suggest}>
                        <Text style={styles.suggest_title}>Giá trị dinh dưỡng</Text>
                        <Text style={styles.suggest_detail}>Tìm hiểu giá trị dinh dưỡng của thực phẩm nào</Text>
                    </TouchableOpacity >
                </View>
                <View style={styles.suggestion_right}>
                    <TouchableOpacity style={styles.suggest}>
                        <Text style={styles.suggest_title}>Thống kê dinh dưỡng</Text>
                        <Text style={styles.suggest_detail}>Xem lại thông số dinh dưỡng của bạn</Text>
                    </TouchableOpacity >
                    <TouchableOpacity style={styles.suggest}>
                        <Text style={styles.suggest_title}>Mẹo | Lời khuyên</Text>
                        <Text style={styles.suggest_detail}>Tìm hiểu các lời khuyên và mẹo để có một thân hình và sức khỏe tốt</Text>

                    </TouchableOpacity >
                </View>
            </View>
            <View style={styles.bottom}>
                <TouchableOpacity style={styles.btnAdd}
                    onPress={() => navigation.navigate('FoodIngredients')} >
                    <Image source={iconAdd} style={styles.icon}></Image>
                </TouchableOpacity>
            </View>
        </View>
    )
}
export default Home

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column",
        justifyContent: "center",
        alignItems: 'stretch',
        backgroundColor: 'rgba(255, 255, 255,1)',
    },
    top: {

        flex: 3,
        justifyContent: "center",
        alignItems: "center"
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
    middle_status: {
        flex: 1.3,
        flexDirection: 'row',
        justifyContent: "center",
        alignItems: "flex-start"
    },


    middle_right: {
        marginHorizontal: 10,
        justifyContent: "center",
        alignItems: "center",
    },
    middle_left: {
        marginHorizontal: 10,
        justifyContent: "center",
        alignItems: "center",
    },
    status: {

        flexDirection: "row",
        marginTop: 10,
        padding: 10,
        width: 150,
        height: 40,
        borderRadius: 5,
        backgroundColor: 'rgba(255, 255, 255 , 1)',
        justifyContent: "space-between",
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,
        elevation: 10,
    },
    iconContainer: {
        width: 30,
        height: 30,
        borderRadius: 15,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: 'rgba(255,255,255,1)',
        shadowColor: '#51EDEF',
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,
        elevation: 10,
    },
    iconStatus: {
        width: 20,
        height: 20,
        borderRadius: 10
    },
    ///SUGGESTION
    suggestion: {
        flexDirection: 'row',
        justifyContent: "center",
        alignItems: "center",
        flex: 3,

    },
    suggestion_right: {
        flex: 1,
        justifyContent: "center",
    },
    suggestion_left: {
        flex: 1,
        justifyContent: "center",
    },
    suggest: {
        backgroundColor: "#FFF",
        margin: "5%",
        width: '90%',
        height: 100,
        borderRadius: 10,
        alignItems: "flex-start",
        justifyContent: "flex-start",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,
        elevation: 5,
    },
    suggest_title: {
        paddingTop: 10,
        paddingLeft: 10,
        fontSize: 15,
        fontWeight: "bold",
        color: 'rgb(51, 121, 255 )'
    },
    suggest_detail: {
        paddingTop: 2,
        paddingLeft: 20,
        paddingRight: 20
    },
    ///END-SUGGESTION
    bottom: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },

    btnAdd: {
        width: 200,
        height: 50,
        borderRadius: 5,
        alignItems: "center"
    },
    icon: {
        width: 50,
        height: 50,
    }
})
