// import * as Haptics from "expo-haptics";
// import { router } from "expo-router";
// import { useState } from "react";
import {
  Image,
  StyleSheet,
  Text,
  View,
} from "react-native";
const pinIcon = require("../../../../assets/images/pin.png");

export default function pinLinkCard() {
  // Declare window dimensions

  return (
    <View style={styles.pinLinkContainer}>
      <View style={styles.pinLinkContent}>
        <View style={styles.blockText}>
          <Text style={styles.blockHeader}>Temporary Pin</Text>
          <Text style={[styles.blockSubtitle, styles.partySize]}>
            Enter the temporary pin that is displayed on the desktop app
          </Text>
        </View>
        <View style={styles.pinContainer}>
          <Image source={pinIcon} style={styles.pin}></Image>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  pinLinkContainer: {
    backgroundColor: "rgba(145, 72, 72, 0.5)", // rgba to set opacity for background
    marginHorizontal: 10,
    marginVertical: 5,
    paddingHorizontal: 20,
    height: 115,
    borderRadius: 15,
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "column",
  },
  pinLinkContent: {
    flexDirection: "row",
  },
  blockText: {
    paddingTop: 15,
    width: 270,
    marginLeft: 10,
  },
  blockHeader: {
    color: "#FFFFFF",
    fontSize: 30,
    fontFamily: "Coolvetica-Regular",
  },
  blockSubtitle: {
    color: "#FFFFFF",
    fontFamily: 'Coolvetica-Light',
    fontSize: 15,
    width: 220,
  },
  // whitePlaneIcon: {
  //   width: 80,
  //   height: 75,
  // },
  buttonContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  startButton: {
    width: 200,
    height: 46,
    marginBottom: 15,
  },
  partySize: {
    paddingTop: 2,
  },
  largeScreen: {
    width: 75,
    height: 70,
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "flex-end",
    marginTop: 13,
    marginLeft: 80,
  },
  smallScreen: {
    width: 80,
    height: 75,
    marginTop: 15,
    marginLeft: 35,
  },
  pinContainer: {
    marginTop: 35,
  },
  pin: {
    width: 40,
    height: 40,
  }
});
