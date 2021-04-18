import React, { Component } from "react";
import {
  View,
  StyleSheet,
  ImageBackground,
  Text,
  Image,
  TouchableOpacity,
} from "react-native";
import * as Animatable from "react-native-animatable";


export default class Scroll extends Component {
  render() {
    return (
      <Animatable.View
        animation={this.props.animation}
        duration={7000}
        style={
          (styles.memo1,
          {
            backgroundColor: this.props.bgcolor,
          })
        }
      >
        <View style={styles.insideone}>
          <Text
            style={{
              fontSize: 20,
              color: "#fff",
              width: 100,
            }}
          >
            {this.props.title}
          </Text>
          <Text
            style={{
              color: "#fff",
              fontSize: 14,
              marginVertical: 5,
            }}
          >
            {this.props.month}
          </Text>
        </View>

        <View style={styles.insidetwo}>
          <ImageBackground
            source={this.props.background}
            style={{
              width: "100%",
              height: "100%",
            }}
          />
        </View>

        <TouchableOpacity style={styles.insidethree}>
          <Image source={require("../assets/icons/i_icon.png")}></Image>
        </TouchableOpacity>
      </Animatable.View>
    );
  }
}

const styles = StyleSheet.create({
  memo1: {
    flex: 1,
    margin: 10,
    borderRadius: 18,
  },
  insideone: {
    flex: 1,
    padding: 10,
  },
  insidetwo: {
    flex: 2,
    marginVertical: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  insidethree: {
    flex: 3,
    alignItems: "flex-end",
    justifyContent: "center",
    margin : 10
  },
});
