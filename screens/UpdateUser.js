import React from 'react'
import { StyleSheet, Text, Image, TextInput, TouchableOpacity, View } from 'react-native'

const UpdateUser = () => {
    return (
        <View style={styles.container}>
            <View style={styles.container}>
                <View style={styles.UpdateUserForm}>
                    <View style={styles.textInputContainer}>
                        <Text>Họ</Text>
                        <TextInput
                            style={styles.textInput}
                        ></TextInput>
                    </View>
                    <View style={styles.textInputContainer}>
                        <Text>Tên</Text>
                        <TextInput

                            style={styles.textInput}
                        ></TextInput>
                    </View>
                    <View style={styles.textInputContainer}>
                        <Text>Ngày sinh</Text>
                        <TextInput
                            style={styles.textInput}
                            placeholder='Nhập ngày sinh'
                        ></TextInput>
                    </View>
                    <View style={styles.textInputContainer}>
                        <Text>Số điện thoại</Text>
                        <TextInput
                            style={styles.textInput}
                            placeholder='Nhập số điện thoại mới'
                           ></TextInput>
                    </View>
                    <View style={styles.textInputContainer}>
                        <Text>Chiều cao</Text>
                        <TextInput
                            style={styles.textInput}
                            secureTextEntry={true}
                            placeholder='Chiều cao của bạn'
                           ></TextInput>
                    </View>
                    <View style={styles.textInputContainer}>
                        <Text>Cân nặng</Text>
                        <TextInput
                            style={styles.textInput}
                            placeholder='Cân nặng của bạn'
                            secureTextEntry={true}
                           ></TextInput>
                    </View>
                    <TouchableOpacity
                        style={styles.UpdateUseButton}>
                        <Text>CẬP NHẬT</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

export default UpdateUser

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "flex-start",
        alignItems: "center"
    },
    UpdateUserForm: {
        flex: 5,
        justifyContent: "center",
        alignItems: "center"
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
    UpdateUseButton: {
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
