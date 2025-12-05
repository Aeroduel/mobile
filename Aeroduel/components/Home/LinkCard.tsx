import * as Haptics from "expo-haptics";
import { router } from "expo-router";
import { useState } from "react";
import {
  Image,
  Pressable,
  StyleSheet,
  Text,
  useWindowDimensions,
  View,
} from "react-native";
const wifiIcon = require("../../assets/images/wifi.png");

export default function DuelCard() {
  // Declare window dimensions
  const { width } = useWindowDimensions();
  const biggerDevice = width >= 439;

  const viewScoreboard = () => {
    router.push("/scoreboard");
  };

  return (
    <View style={styles.duelContainer}>
      <View style={styles.duelContent}>
        <View style={styles.blockText}>
          <Text style={styles.blockHeader}>Link Plane</Text>
          <Text style={[styles.blockSubtitle, styles.partySize]}>
            View nearby planes that are online, and ready to be connected.
          </Text>
        </View>
        <View style={styles.crosshairContainer}>
          <Image source={wifiIcon} style={styles.crosshair}></Image>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  duelContainer: {
    backgroundColor: "rgba(145, 72, 72, 0.5)", // rgba to set opacity for background
    marginLeft: 10,
    marginRight: 10,
    marginTop: 5,
    marginBottom: 5,
    paddingLeft: 20,
    paddingRight: 20,
    height: 115,
    borderRadius: 15,
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "column",
    paddingTop: 0,
    // Need to play with the shadow colors
    // shadowColor: '#512929ff',
    // shadowOffset: { width: 10, height: 10 },
    // shadowOpacity: 10,
    // shadowRadius: 5,
  },
  duelContent: {
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
  crosshairContainer: {
    marginTop: 35,
  },
  crosshair: {
    width: 40,
    height: 40,
  }
});
