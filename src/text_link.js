import React from "react";
import { Platform, StyleSheet, Text } from "react-native-web"; // TODO: convert to `react-native`
import systemFontFamily from "./systemfontfamily";
import * as colors from "./colors";

export default function(props) {
  // WARNING: prop order matters.
  //          destructuring assignment not supported by microbundle
  return <Text {...props} style={[styles.textLink, props.style]} />;
}

const styles = StyleSheet.create({
  textLink: {
    fontFamily: systemFontFamily(Platform.OS),
    color: colors.topaz,
    fontSize: 16
  }
});
