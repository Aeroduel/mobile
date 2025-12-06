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
const bluetoothIcon = require("../../assets/images/bluetooth.png");

export default function BluetoothLinkCard() {
  // Declare window dimensions
  const { width } = useWindowDimensions();
  const biggerDevice = width >= 439;

  return (
    <View style={styles.linkContainer}>
      <View style={styles.linkContent}>
        <View style={styles.blockText}>
          <Text style={styles.blockHeader}>Bluetooth</Text>
          <Text style={styles.blockSubtitle}>
            Connect to the plane&apos;s integrated ESP32 microcontroller via bluetooth
          </Text>
        </View>
        <View style={styles.bluetoothContainer}>
          <Image source={bluetoothIcon} style={styles.bluetooth}></Image>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  linkContainer: {
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
  linkContent: {
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
  bluetoothContainer: {
    marginTop: 35,
  },
  bluetooth: {
    width: 40,
    height: 40,
  }
});
