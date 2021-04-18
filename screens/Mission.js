import React, { Component } from 'react'
import { View , Text, ScrollView} from 'react-native'
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
