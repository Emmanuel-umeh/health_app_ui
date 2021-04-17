import React, { Component } from 'react'
import {NavigationContainer, StackActions} from "@react-navigation/native"
import {createStackNavigator} from '@react-navigation/stack'
import {Image} from "react"

const Stack = createStackNavigator()
export default class App extends Component {
  render() {
    return (
      <NavigationContainer>
        
        <Stack.Screen name = "Home" component = {} options ={{

          headerTransparent : true,
          headerLeft : ()=>{
            <Image source = {} />
          },

          headerRight : ()=>{
            <Image source = {} />
          }
        }} />
        <Stack.Screen name = "Mission" component = {} />
      </NavigationContainer>
    )
    <StackActions
  }
}
