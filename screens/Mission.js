import React, { Component } from 'react'
import { View , Text, ScrollView, StyleSheet} from 'react-native'
// import {  } from 'react-native-gesture-handler'

export default class Mission extends Component {
    render() {
        return (
            <View>
            <ScrollView 
            showsVerticalScrollIndicator = {false}
            contentContainerStyle ={{
                width : "100%",
                height : "120%"
            }}
            >

                <View style = {styles.header}>
                    <Text style = {styles.inline}> My Mission</Text>

                </View>
                

            </ScrollView>
                
            </View>
        )
    }
}


const styles = StyleSheet.create({
    container : {
        flex : 1,
        alignItems : "center",
        justifyContent : "center",
        backgroundColor : "#fff"
    },
    header : {
        flex : 1,
        left : 25,
        top : 100

    },
    inline : {
        fontSize : 30,
        letterSpacing : -0.5,
        fontWeight : 'bold',
        color : '#2E2E2E'

    }
})