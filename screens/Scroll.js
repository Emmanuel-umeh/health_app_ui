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
                
            </Animatable.View>
        )
    }
}
