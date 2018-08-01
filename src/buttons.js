import React from "react";
import {
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from "react-native-web"; // TODO: convert to `react-native`

// import LinearGradient from 'react-native-linear-gradient'
// import { iOSColors } from 'react-native-typography'
import * as colors from "./colors";
// import { DoxyIcon } from './icon'

export class Button extends React.Component {
  render() {
    if (this.props.disabled) {
      return <View style={{ opacity: 0.6 }}>{this.renderContent()}</View>;
    }
    return (
      <TouchableOpacity
        onPress={this.props.onPress}
        hitSlop={this.props.hitSlop}
      >
        {this.renderContent()}
      </TouchableOpacity>
    );
  }

  renderContent() {
    var buttonColors = this.props.bgColor
      ? [this.props.bgColor, this.props.bgColor]
      : [colors.topaz, colors.emerald];
    var buttonType = styles.primaryButton;
    var buttonInner = null;
    var buttonText = styles.primaryText;
    var buttonScale = this.props.compact ? styles.compactButton : null;

    if (this.props.plain) {
      buttonColors = ["transparent", "transparent"];
      buttonType = styles.plainButton;
      buttonText = styles.plainButtonText;
    } else if (this.props.system) {
      buttonColors = ["transparent", "transparent"];
      buttonType = styles.systemButton;
      buttonText = styles.systemButtonText;
    } else if (this.props.minor) {
      buttonText = styles.minorText;

      if (this.props.compact) {
        buttonColors = ["transparent", "transparent"];
        buttonType = styles.minorCompactButton;
        buttonText = styles.minorCompactText;
      } else if (this.props.secondary) {
        buttonType = styles.minorSecondaryButton;
        buttonInner = styles.minorSecondaryButtonInner;
        buttonText = styles.minorSecondaryText;
      } else {
        buttonType = styles.minorButton;
      }
    } else if (this.props.secondary) {
      buttonType = styles.secondaryButton;
      buttonInner = this.props.compact
        ? styles.compactSecondaryButtonInner
        : styles.secondaryButtonInner;
      buttonText = styles.secondaryText;
      buttonScale = null;
    }

    return (
      <View style={[styles.buttonInner, buttonInner]}>
        <Text style={[styles.globalText, buttonText, this.props.textStyle]}>
          {this.props.text}
        </Text>
      </View>
    );
    // return (
    //   <LinearGradient
    //     colors={buttonColors}
    //     start={{ x: 0.1, y: 0.1 }}
    //     end={{ x: 0.9, y: 0.9 }}
    //     style={[styles.globalButton, buttonScale, buttonType, this.props.style]}
    //   >
    //     <View style={[styles.buttonInner, buttonInner]}>
    //       {this.props.icon && (
    //         <DoxyIcon
    //           name={this.props.icon}
    //           type={this.props.iconType}
    //           style={[styles.icon, buttonText, this.props.iconStyle]}
    //         />
    //       )}
    //       <Text style={[styles.globalText, buttonText, this.props.textStyle]}>
    //         {this.props.text}
    //       </Text>
    //     </View>
    //   </LinearGradient>
    // );
  }
}

export class TextLink extends React.Component {
  render() {
    return (
      <Text style={[styles.textLink, this.props.style]}>
        {this.props.children}
      </Text>
    );
  }
}

const styles = StyleSheet.create({
  globalButton: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20
  },
  globalText: {
    backgroundColor: "transparent",
    fontFamily: Platform.OS === "ios" ? "System" : "normal",
    fontWeight: "800",
    textAlign: "center"
  },
  icon: {
    marginRight: 6
  },

  primaryButton: {
    height: 40,
    paddingHorizontal: 32
  },
  buttonInner: {
    flexDirection: "row",
    alignItems: "center"
  },
  primaryText: {
    color: "white",
    fontSize: 16
  },

  compactButton: {
    height: 32,
    paddingHorizontal: 16
  },

  secondaryButton: {
    padding: 2
  },
  minorSecondaryButton: {
    padding: 1
  },
  secondaryButtonInner: {
    height: 36,
    backgroundColor: "white",
    paddingHorizontal: 32,
    borderRadius: 20
  },
  compactSecondaryButtonInner: {
    height: 28,
    backgroundColor: "white",
    paddingHorizontal: 16,
    borderRadius: 20
  },
  minorSecondaryButtonInner: {
    height: 22,
    backgroundColor: "white",
    paddingHorizontal: 12,
    borderRadius: 20
  },
  secondaryText: {
    color: colors.turquoise,
    fontSize: 16
  },
  minorSecondaryText: {
    color: colors.turquoise,
    fontSize: 14
  },

  minorButton: {
    height: 24,
    paddingHorizontal: 12
  },
  minorCompactButton: {
    height: "auto",
    paddingHorizontal: 0
  },
  minorText: {
    color: "white",
    fontSize: 14
  },
  minorCompactText: {
    color: colors.gray600,
    fontSize: 14
  },

  plainButton: {
    height: "auto",
    paddingHorizontal: 0
  },
  plainButtonText: {
    color: colors.gray400,
    fontSize: 16,
    fontWeight: "400"
  },

  systemButton: {
    height: "auto",
    paddingHorizontal: 0,
    paddingVertical: 12
  },
  systemButtonText: {
    color: "black",
    // color: iOSColors.blue,
    fontSize: 16,
    fontWeight: "400"
  },

  textLink: {
    fontFamily: Platform.OS === "ios" ? "System" : "normal",
    color: colors.topaz,
    fontSize: 16
  }
});
