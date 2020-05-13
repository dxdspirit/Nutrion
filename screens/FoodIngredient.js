import React, { useState, useEffect } from 'react'
import { StyleSheet, Image, Text, View, TextInput, TouchableOpacity } from 'react-native'
import firebase from 'firebase'
import db from '../db/config'
const FoodIngredient = () => {
    // const rootRef = firebase.database().ref();
    // const usersRef = rootRef.child("users");
    const [IngredientName, setIngredientName] = useState(null);
    useEffect(() => {
        firebase.database().ref('/Ingredients/').on('value',function (snapshot) {
            setIngredientName(snapshot.val());
            console.log(IngredientName)
        });
    })
    const DATA = IngredientName;
    return (
        <View>
            <FlatList
                data={DATA}
                renderItem={({item , index}) => (
                    <Text>{item.name}</Text>
                )}>
            </FlatList>
        </View>
    )
}
export default FoodIngredient
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    item: {
        backgroundColor: '#f9c2ff',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
    },
    title: {
        fontSize: 32,
    },
})
