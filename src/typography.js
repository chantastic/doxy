import React from "react";
import { Platform, StyleSheet, Text } from "react-native"; // TODO: convert to `react-native`
import systemFontFamily from "./systemfontfamily";
import omit from "lodash.omit"; // _.omit because microbundle does not support destructuring assignment

import * as colors from "./colors";

export function Heading(props) {
  // WARNING: prop order matters.
  //          destructuring assignment not supported by microbundle
  return (
    <Text
      {...omit(props, ["level"])}
      style={[styles.global, styles[`heading${props.level}`], props.style]}
    >
      {props.level === 4 ? props.children.toUpperCase() : props.children}
    </Text>
  );
}

export function PlainText(props) {
  // WARNING: prop order matters.
  //          destructuring assignment not supported by microbundle
  return <Text {...props} style={[styles.global, styles.plain, props.style]} />;
}

export function SecondaryText(props) {
  // WARNING: prop order matters.
  //          destructuring assignment not supported by microbundle
  return (
    <Text {...props} style={[styles.global, styles.secondary, props.style]} />
  );
}

export function TertiaryText(props) {
  // WARNING: prop order matters.
  //          destructuring assignment not supported by microbundle
  return (
    <Text {...props} style={[styles.global, styles.tertiary, props.style]} />
  );
}

export function Footnote(props) {
  // WARNING: prop order matters.
  //          destructuring assignment not supported by microbundle
  return (
    <Text {...props} style={[styles.global, styles.footnote, props.style]} />
  );
}

const styles = StyleSheet.create({
  global: {
    fontFamily: systemFontFamily(Platform.OS)
  },
  heading1: {
    color: colors.gray900,
    fontWeight: "400",
    fontSize: 25,
    lineHeight: 32
  },
  heading2: {
    color: colors.gray900,
    fontWeight: "600",
    fontSize: 21,
    lineHeight: 24
  },
  heading3: {
    color: colors.gray900,
    fontWeight: "600",
    fontSize: 18,
    lineHeight: 22
  },
  heading4: {
    color: colors.gray600,
    fontWeight: "700",
    fontSize: 14,
    lineHeight: 20
  },
  plain: {
    color: colors.gray800,
    fontWeight: "400",
    fontSize: 16,
    lineHeight: 24
  },
  secondary: {
    color: colors.gray800,
    fontWeight: "400",
    fontSize: 15,
    lineHeight: 24
  },
  tertiary: {
    color: colors.gray800,
    fontWeight: "400",
    fontSize: 14,
    lineHeight: 20
  },
  footnote: {
    color: colors.gray600,
    fontWeight: "400",
    fontSize: 12,
    lineHeight: 16
  }
});
