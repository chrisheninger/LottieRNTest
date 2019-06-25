/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from "react";
import { Platform, StyleSheet, Text, View } from "react-native";
import LottieView from "lottie-react-native";

const instructions = Platform.select({
  ios: "This animation plays how we'd expect, only keyframes 144 to 229",
  android:
    "This animation plays the entire thing, despite asking it to play 144 to 229"
});

type Props = {};
export default class App extends Component {
  lottieRef = null;

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    if (this.lottieRef) this.lottieRef.play(144, 229);
  }

  render() {
    return (
      <View style={styles.container}>
        <LottieView
          autoPlay={false}
          loop={false}
          ref={lottieView => {
            this.lottieRef = lottieView;
          }}
          source={require("./thirsty.json")}
          style={{
            height: 200,
            width: 200
          }}
        />
        <Text style={styles.welcome}>Welcome to React Native!</Text>
        <Text style={styles.instructions}>To get started, edit App.js</Text>
        <Text style={styles.instructions}>{instructions}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10
  },
  instructions: {
    textAlign: "center",
    color: "#333333",
    marginBottom: 5
  }
});
