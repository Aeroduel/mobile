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
const swordsIcon = require("../../assets/images/swords.png");

export default function Match1Card() {
  // Declare window dimensions
  const { width } = useWindowDimensions();
  const biggerDevice = width >= 439;

  return (
    <View style={styles.planeContainer}>
      <View style={styles.planeContent}>
        <View style={styles.blockText}>
          <Text style={styles.blockHeader}>Match 1</Text>
          <Text style={[styles.blockSubtitle, styles.uuidContainer]}>
            <Text style={styles.boldText}>Match ID: </Text>
            8a7b6c5d-4e3f-4123-5678-90abcdef0123
          </Text>
          <Text style={[styles.blockSubtitle, styles.uuidContainer]}>
            <Text style={styles.boldText}>Date:</Text> December 7th, 2025
          </Text>
          <Text style={[styles.blockSubtitle, styles.uuidContainer]}>
            <Text style={styles.boldText}>Players:</Text> Foxtrot-4 & Echo-6
          </Text>
          <Text style={[styles.blockSubtitle, styles.uuidContainer]}>
            <Text style={styles.boldText}>Champion:</Text> Echo-6
          </Text>
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
    height: 145,
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
    marginTop: 30,
    marginRight: 10,
  },
  plane: {
    width: 50,
    height: 50,
  },
  uuidContainer: {
    width: 1000,
  },
  onlineContainer: {
    display: "flex",
    flexDirection: "row",
    gap: 5,
  },
  onlineDot: {
    width: 9,
    height: 9,
    backgroundColor: "#00ff11ff",
    borderRadius: "100%",
    marginTop: 5,
  },
  boldText: {
    fontFamily: "Coolvetica-Regular",
  },
});
