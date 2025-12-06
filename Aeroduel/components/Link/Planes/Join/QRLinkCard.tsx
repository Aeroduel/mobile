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
const qrCodeIcon = require("../../../../assets/images/qrcode.png")

export default function QRLinkCard() {
  // Declare window dimensions
  const { width } = useWindowDimensions();
  const biggerDevice = width >= 439;

  return (
    <View style={styles.qrLinkContainer}>
      <View style={styles.qrLinkContent}>
        <View style={styles.blockText}>
          <Text style={styles.blockHeader}>QR Code</Text>
          <Text style={styles.blockSubtitle}>
            Scan the temporary QR code that is displayed on the desktop app
          </Text>
        </View>
        <View style={styles.qrCodeContainer}>
          <Image source={qrCodeIcon} style={styles.qrCode}></Image>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  qrLinkContainer: {
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
  },
  qrLinkContent: {
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
  qrCodeContainer: {
    marginTop: 35,
  },
  qrCode: {
    width: 40,
    height: 40,
  }
});
