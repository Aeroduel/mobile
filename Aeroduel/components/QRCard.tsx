import { Text, View, Image, StyleSheet } from "react-native";
import OpenCameraButton from "./OpenCameraButton";
const joinArrow = require("../assets/images/arrow-right-white.png");


export default function QRJoin() {
  return (
    <View style={styles.qrContainer}>
      <View style={styles.topRow}>
        <View style={styles.blockText}>
          <Text style={styles.blockHeader}>Join By QR</Text>
          <Text style={styles.blockSubtitle}>
            Scan QR code to connect to a match
          </Text>
        </View>
        <Image source={joinArrow} style={styles.joinArrows}></Image>
      </View>
      <View>
        <OpenCameraButton />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  qrContainer: {
    backgroundColor: "rgba(145, 72, 72, 0.5)", // rgba to set opacity for background
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    marginHorizontal: 10,
    marginVertical: 5,
    paddingHorizontal: 20,
    paddingTop: 35,
    height: 220,
    borderRadius: 15,
    // Need to play with the shadow colors
    // shadowColor: '#512929ff',
    // shadowOffset: { width: 10, height: 10 },
    // shadowOpacity: 10,
    // shadowRadius: 5,
  },
  topRow: {
    flexDirection: "row",
  },
  blockText: {
    paddingTop: 10,
  },
  blockHeader: {
    color: "#FFFFFF",
    fontSize: 40,
    fontFamily: "Coolvetica-Regular",
  },
  blockSubtitle: {
    color: "#FFFFFF",
    fontWeight: "700",
  },
  joinArrows: {
    transform: [{ scale: 0.6 }],
    marginLeft: 20
  }
})