import React from "react";
import { Platform, StyleSheet, Text } from "react-native-web"; // TODO: convert to `react-native`

import * as colors from "./colors";

// TODO: destructuring assignment not supported by microbundle
export default function(props) {
  return <Text  {...props} style={[styles.textLink, props.style]} />;
}

const styles = StyleSheet.create({
  textLink: {
    fontFamily: Platform.OS === "ios" ? "System" : "normal",
    color: colors.topaz,
    fontSize: 16
  }
});
