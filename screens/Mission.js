import React from 'react';
import {View,Text,StyleSheet,ScrollView,TouchableOpacity} from 'react-native';
import * as Animatable from 'react-native-animatable';
import Scroll from './scroll';
// import Support from './support';

export default class Mission extends  React.Component{
    render(){
        return(
            <View style={styles.container}>
                <ScrollView showsVerticalScrollIndicator={false} style={{flex:1}} contentContainerStyle={{width:'100%',height:'120%'}}>
                    <View style={styles.header}>
                        <Text style={styles.inline}>My Mission</Text>
                    </View>
                    <View style={styles.memos}>
                        <ScrollView 
                        horizontal={true} 
                        contentContainerStyle={{width:'200%'}}
                        showsHorizontalScrollIndicator={false}>
                            <Scroll bgcolor="#FFBE86" 
                            background={require('../assets/icons/graphtwo.png')}
                            title="Game Of Chess"
                            month = "Sep - Nov"
                            animation = "bounceInLeft"
                            />
                             <Scroll bgcolor="#7DC9E7" 
                            background={require('../assets/icons/graphtwo.png')}
                            title="100 Km Jogging"
                            month = "Jan - Feb"
                            animation = "bounceInLeft"
                            />
                             <Scroll bgcolor="#FFBE86" 
                            background={require('../assets/icons/graphtwo.png')}
                            title="Netflix and Chill"
                            month = "March - April"
                            />
                             <Scroll bgcolor="#7DC9E7" 
                            background={require('../assets/icons/graphtwo.png')}
                            title="Video Games"
                            month = "Aug - Sep"
                            />
                        </ScrollView>
                    </View>
                    
                </ScrollView>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container : {
        flex : 1,
        backgroundColor : '#fff'
    },
    header : {
        flex : 1,
        left : 25,
        top : 100
    },
    inline : {
        fontSize : 38,
        letterSpacing : -0.5,
        fontWeight : 'bold',
        color : '#2E2E2E'
    },
    memos : {
        height : 250,
        position : 'absolute',
        top : 160,
        width:'100%',
        marginLeft : 10
    },
    supportview : {
        position : 'absolute',
        left : 25,
        top : 420
    },
    support : {
        fontSize : 25,
        fontWeight : 'bold',
        letterSpacing : -0.5,
        color : '#2E2E2E'
    },
    rectangleone : {
        height : 85,
        width : 300,
        position : 'absolute',
        alignSelf  : 'center',
        top : 470,
        borderRadius : 18
    }
})