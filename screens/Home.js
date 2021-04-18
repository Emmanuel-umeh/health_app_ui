import React, { Component } from "react";

import { View, StyleSheet, Text, ImageBackground } from "react-native";
import Day from "./Day";
export default class Home extends Component {
  componentDidMount() {
    console.log("mounted");
  }

  state = {
    color: "#126DF3",
    activeState: "rgba(255,255,255,0.291821)",
  };
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.containerone}>
          <View style={styles.boxone}></View>
          <View style={styles.boxtwo}>
            <Text style={styles.name}> Hi Emmanuel</Text>

            <Text style={styles.subtitle}>Welcome to my design</Text>
          </View>
          <View style={styles.boxthree}>
            <ImageBackground
              style={{
                width: 360,
                height: "100%",
              }}
              source={require("../assets/icons/graphone.png")}
            />
          </View>
          <View style={styles.boxfour}>
              <Day day_name = "Sun" />
              <Day day_name = "Mon" />
              <Day day_name = "Tue" />
              <Day day_name = "Wed" />
              <Day day_name = "Thu"  active = {this.state.activeState} />
              <Day day_name = "Fri" />
              <Day day_name = "Sat" />

          </View>
        </View>

        <View style={styles.containertwo}>
            <View style = {styles.line}></View>
            <View style = {styles.progress}>

                <Text style = {styles.textone}>
My progress
                </Text>
            </View>
            <View style = {styles.cards}>

            </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: "flex",
    backgroundColor: "#136DF3",
  },
  containerone: {
    flex: 1.5,
    display: "flex",
  },
  containertwo: {
    flex: 1,
    backgroundColor: "#fff",
    borderTopRightRadius: 60,
    borderTopLeftRadius: 60,
  },
  boxone: {
    flex: 1,
  },
  boxtwo: {
    flex: 0.8,
    marginHorizontal: 35,
  },
  boxthree: {
    flex: 2.5,
  },
  boxfour: {
    flex: 0.5,
    color: "#fff",
    flexDirection: "row",
  },
  name: {
    fontSize: 38,
    color: "#fff",
    fontWeight: "bold",
    letterSpacing: -0.5,
  },
  subtitle: {
    fontSize: 20,
    color: "#fff",
  },
  line: {
    width: 66,
    height: 4,
    backgroundColor: "#F4F0F0",
    borderRadius: 2,
    marginVertical: 25,
    left: 150,
  },
  progress: {
    left: 50,
  },
  textone: {
    fontSize: 20,
    color: "#2D2D2D",
    letterSpacing: -0.5,
  },
  cards: {
    flex: 1,
    display: "flex",
    marginTop: 10,
    marginHorizontal: 30,
  },
});
