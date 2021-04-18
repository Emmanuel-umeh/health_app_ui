import React, { Component } from 'react'
import { View ,  StyleSheet} from 'react-native'

export default class Day extends Component {

    state = {
        color :"#126DF3",

    }
    render() {
        return (
            <View style = {style.box1}>
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
        justifyCenter : "#fff"


    }

})