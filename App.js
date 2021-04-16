import React, { Component } from 'react'
import {NavigationContainer, StackActions} from "@react-navigation/native"
import {createStackNavigator} from '@react-navigation/stack'


const Stack = createStackNavigator()
export default class App extends Component {
  render() {
    return (
      <NavigationContainer>
        
        <Stack.Screen name = "Home" component = {} />
        <Stack.Screen name = "Mission" component = {} />
      </NavigationContainer>
    )
    <StackActions
  }
}
