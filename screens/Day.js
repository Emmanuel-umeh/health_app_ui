import React, { Component } from 'react'
import { View ,  StyleSheet, Text} from 'react-native'

export default class Day extends Component {

    render() {
        return (
            <View style = {style.container}>
                <View style = {{
                    borderRadius : 10, padding : 5, backgroundColor : this.props.active

                }}>
                    <Text style = {{
                        color : "#fff"
                    }}>
                        {this.props.day_name}
                    </Text>
                </View>
            </View>
        )
    }
}


const style = StyleSheet.create({

    container : {
        flex:1,
        alignItems : 'center',
        justifyContent : "center"


    }

})