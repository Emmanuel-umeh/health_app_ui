import React, { Component } from 'react'
import { View, StyleSheet, ImageBackground,Text, Image,TouchableOpacity } from 'react-native'
import * as Animated from "react-native-animatable"
export default class Scroll extends Component {
    render() {
        return (
            <Animatable.View animation  = {this.props.animation} duration = {7000}
            style = {
                styles.memo1, {
                    backgroundColor : this.props.bgcolor
                }
            }
            >

                <View style = {styles.insideone}>

                    <Text  style = {{
                        fontSize : 20, color : "#fff", width : 100
                    }}>{

                    this.props.title}</Text>
                    <Text style = {{
                        color : "#fff", fontSize : 14, marginVertical : 5
                    }}>{this.props.month}</Text>
                </View>


                <View style = {style.insidetwo}>

                </View>
                
            </Animatable.View>
        )
    }
}
