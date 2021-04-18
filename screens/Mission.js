import React, { Component } from 'react'
import { View , Text, ScrollView, StyleSheet} from 'react-native'
// import {  } from 'react-native-gesture-handler'
import Scroll from "./Scroll"

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

                        <Scroll 
                        bgcolor = '#FFBE86'
                        title = "Call of Duty"
                        month = "Sep - Nov"
                        animation = "bounceInLeft"

                        background = {require("../assets/icons/graphtwo.png")}
                        />
                        <Scroll 
                        bgcolor = '#FFBE86'
                        title = "Call of Duty"
                        month = "Sep - Nov"
                        animation = "bounceInLeft"

                        background = {require("../assets/icons/graphtwo.png")}
                        />
                        <Scroll 
                        bgcolor = '#FFBE86'
                        title = "Free Fire"
                        month = "Sep - Nov"
                        animation = "bounceInLeft"

                        background = {require("../assets/icons/graphtwo.png")}
                        />
                        <Scroll 
                        bgcolor = '#FFBE86'
                        title = "PUBG"
                        month = "Sep - Nov"
                        animation = "bounceInLeft"

                        background = {require("../assets/icons/graphtwo.png")}
                        />
                        <Scroll 
                        bgcolor = '#FFBE86'
                        title = "FortNite"
                        month = "Sep - Nov"
                        animation = "bounceInLeft"

                        background = {require("../assets/icons/graphtwo.png")}
                        />

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

    },
     memos : {
         height : 250,
         position : 'absolute',
         top : 100,
         width : "100%",
         marginLeft : 10

     }
})