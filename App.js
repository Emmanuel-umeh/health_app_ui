import React, { Component } from 'react'
import {NavigationContainer} from "@react-navigation/native"
import {createStackNavigator} from '@react-navigation/stack'
import {Image} from "react"
import Home from "./screens/Home"
import Mission from "./screens/Mission"

const Stack = createStackNavigator()
export default class App extends Component {


  
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator>

   
        
        <Stack.Screen  name = "Home" component = {Home } options ={{
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
        component = { Mission } />
             </Stack.Navigator>
      </NavigationContainer>
    )
    <StackActions
  }
}
