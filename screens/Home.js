import React, { Component } from 'react'
import {View, StyleSheet, Text} from "react-native"
export default class Home extends Component {
    render() {
        return (
            <View style = {styles.container}>
                <View  style = {style.containerone}>
                    <View style ={styles.boxone}>

                    </View>
                    <View style ={styles.boxtwo}>

                    </View>
                    <View style ={styles.boxthree}>

                    </View>
                    <View style ={styles.boxfour}>

                    </View>

                </View>

                <View style = {styles.containertwo}></View>
                
            </View>
        )
    }
}


const styles = StyleSheet.create({

    container : {
        flex : 1, 
        alignItems : "center", 
        justifyContent : "center"
    },

    containerone: {
      
        flex : 1

    },

    containertwo : {
        flex : 1,
        backgroundColor : '#fff',
        borderTopRightRadius :  60, 
        borderTopLeftRadius : 60
    },
    boxone : {
        flex : 1
    },
    boxtwo : {
        flex : 0.8,
        marginHorizontal
    },
    boxthree : {
        flex : 2.5
    },
    boxfour : {
        flex : 0.5,
        color : '$fff',
        flexDirection : 'row'
    }
})