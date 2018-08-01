import React, { Component } from "react";
import { Platform, StyleSheet, Text } from "react-native-web"; // TODO: convert to `react-native`

import * as colors from "./colors";

export class Heading extends Component {
  render() {
    var level = styles.heading1;

    switch (this.props.level) {
      case 2:
        level = styles.heading2;
        break;
      case 3:
        level = styles.heading3;
        break;
      case 4:
        level = styles.heading4;
        break;
      default:
    }
    if (this.props.level === 4) {
      return (
        <Text
          style={[styles.global, level, this.props.style]}
          numberOfLines={this.props.numberOfLines}
          onPress={this.props.onPress}
        >
          {this.props.children.toUpperCase()}
        </Text>
      );
    } else {
      return (
        <Text
          style={[styles.global, level, this.props.style]}
          numberOfLines={this.props.numberOfLines}
          onPress={this.props.onPress}
        >
          {this.props.children}
        </Text>
      );
    }
  }
}

export class PlainText extends Component {
  render() {
    return (
      <Text
        style={[styles.global, styles.plain, this.props.style]}
        numberOfLines={this.props.numberOfLines}
        onPress={this.props.onPress}
      >
        {this.props.children}
      </Text>
    );
  }
}

export class SecondaryText extends Component {
  render() {
    return (
      <Text
        style={[styles.global, styles.secondary, this.props.style]}
        numberOfLines={this.props.numberOfLines}
        onPress={this.props.onPress}
      >
        {this.props.children}
      </Text>
    );
  }
}

export class TertiaryText extends Component {
  render() {
    return (
      <Text
        style={[styles.global, styles.tertiary, this.props.style]}
        numberOfLines={this.props.numberOfLines}
        onPress={this.props.onPress}
      >
        {this.props.children}
      </Text>
    );
  }
}

export class Footnote extends Component {
  render() {
    return (
      <Text
        style={[styles.global, styles.footnote, this.props.style]}
        numberOfLines={this.props.numberOfLines}
        onPress={this.props.onPress}
      >
        {this.props.children}
      </Text>
    );
  }
}

const styles = StyleSheet.create({
  global: {
    fontFamily: Platform.OS === "ios" ? "System" : "normal"
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
    lineHeight: Platform.OS === "ios" ? 22 : 24
  },
  secondary: {
    color: colors.gray800,
    fontWeight: "400",
    fontSize: 15,
    lineHeight: Platform.OS === "ios" ? 22 : 24
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
