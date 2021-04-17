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
          title : '',
          headerTransparent : true,
          headerLeft : ()=>{
            <Image source =  {require('./assets/icons/menu.png')} 
            
            />
          },

          headerRight : ()=>{
            <Image style = {{
              marginHorizontal : 20, marginTop : 40
            }} source = {require('./assets/icons/person.png')} />
          }
        }} />
        <Stack.Screen name = "Mission" 
         options ={{
          title : '',
          headerTransparent : true,
          headerLeft : ()=>{
            <Image source =  {require('./assets/icons/menu.png')}/>
          },

          headerRight : ()=>{
            <Image  style = {{
              marginHorizontal : 20, marginTop : 40
            }}  source = {require('./assets/icons/person.png')} />
          }
        }} 
        component = {} />
      </NavigationContainer>
    )
    <StackActions
  }
}
