import React, { Component } from 'react'
import { View , Text, ScrollView, StyleSheet} from 'react-native'
// import {  } from 'react-native-gesture-handler'

export default class Mission extends Component {
    render() {
        return (
            <View>
            <ScrollView 

            style = {{
                flex : 1
            }}
            showsVerticalScrollIndicator = {false}
            contentContainerStyle ={{
                width : "100%",
                height : "120%"
            }}
            >

                <View style = {styles.header}>
                    <Text style = {styles.inline}> My Mission</Text>

                </View>

                <View style = {style.memos}>
                    <ScrollView horizontal = {true}
                    
                    contentContainerStyle = {{width : "200%"}}
                    showsHorizontalScrollIndicator = {false}
                    >

                    </ScrollView>

                </View>
                

            </ScrollView>
                
            </View>
        )
    }
}


const styles = StyleSheet.create({
    container : {
        flex : 1,
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