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
const planeIcon = require("../../../assets/images/plane-white.png");

export default function Plane2Card() {
  // Declare window dimensions
  const { width } = useWindowDimensions();
  const biggerDevice = width >= 439;

  return (
    <View style={styles.planeContainer}>
      <View style={styles.planeContent}>
        <View style={styles.blockText}>
          <Text style={styles.blockHeader}>Foxtrot-4</Text>
          <Text style={[styles.blockSubtitle, styles.uuidContainer]}>
            02b9d4e7-a8f1-46c5-8e3d-7b2c1a0f9e8d
          </Text>
          <View style={styles.onlineContainer}>
            <View style={styles.onlineDot}></View>
            <Text style={[styles.blockSubtitle, styles.uuidContainer]}>
              Not Ready
            </Text>
          </View>
        </View>
        <View style={styles.bluetoothContainer}>
          <Image source={planeIcon} style={styles.plane}></Image>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  planeContainer: {
    backgroundColor: "rgba(145, 72, 72, 0.5)", // rgba to set opacity for background
    marginHorizontal: 10,
    marginVertical: 5,
    paddingHorizontal: 20,
    height: 115,
    borderRadius: 15,
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "column",
    paddingTop: 0,
  },
  planeContent: {
    flexDirection: "row",
  },
  blockText: {
    paddingVertical: 15,
    width: 250,
    marginLeft: 10,
  },
  blockHeader: {
    color: "#FFFFFF",
    fontSize: 30,
    fontFamily: "Coolvetica-Regular",
  },
  blockSubtitle: {
    color: "#FFFFFF",
    fontFamily: "Coolvetica-Light",
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
  bluetoothContainer: {
    marginTop: 20,
    marginRight: 20,
  },
  plane: {
    width: 70,
    height: 70,
  },
  uuidContainer: {
    width: 240,
  },
  onlineContainer: {
    display: 'flex',
    flexDirection: 'row',
    gap: 5,
  },
  onlineDot: {
    width: 9,
    height: 9,
    backgroundColor: '#ff0000ff',
    borderRadius: '100%',
    marginTop: 5,
  }
});
