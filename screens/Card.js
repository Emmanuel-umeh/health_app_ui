import React, { Component } from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";
import * as Animatable from "react-native-animatable";
export default class Card extends Component {
  render() {
    return (
      <Animatable.View
        animation={this.props.animation}
        duration={1500}
        style={StyleSheet.cardone}
      >
        <TouchableOpacity style={StyleSheet.box1}>
          <View
            style={{
              borderRadius: 21,
              backgroundColor: "rgba(255,19,134,0.2)",
              height: "100%",
              flex: 1,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Image source={this.props.image} />
          </View>
        </TouchableOpacity>

        <View style={styles.box2}>
          <Text
            style={{
              fontSize: 20,
              color: "#2D2D2D",
              letterSpacing: -0.5,
            }}
          >
            {this.props.title}
          </Text>

          <Text
            style={{
              fontSize: 15,
              color: "#BEC4C9",
              letterSpacing: -0.5,
              paddingVertical: 5,
            }}
          >
            {this.props.subtitle}
          </Text>
        </View>
      </Animatable.View>
    );
  }
}
