import * as Haptics from "expo-haptics";
import { router } from "expo-router";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";
const qrButton = require("../assets/images/qrcode-btn.png");
const pinButton = require("../assets/images/pin-btn.png");

export default function SpectateCard() {
  const openCamera = () => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
    router.push("/qrEntry");
  }
  const enterPin = () => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
  }

  return (
    <View style={styles.spectateContainer}>
      <View style={styles.topRow}>
        <View style={styles.blockText}>
          <Text style={styles.blockHeader}>Scoreboard</Text>
          <Text style={styles.blockSubtitle}>
            View ongoing match statistics. Scan QR code or enter pin.
          </Text>
        </View>
      </View>
      <View style={styles.buttonContainer}>
        <Pressable onPress={openCamera}>
          <Image source={qrButton} style={styles.qrCodeButton} />
        </Pressable>
        <Pressable onPress={enterPin}>
          <Image source={pinButton} style={styles.pinButton} />
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  spectateContainer: {
    backgroundColor: "rgba(145, 72, 72, 0.5)", // rgba to set opacity for background
    marginLeft: 10,
    marginRight: 10,
    marginTop: 5,
    marginBottom: 5,
    paddingLeft: 20,
    paddingRight: 20,
    height: 170,
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
  topRow: {
    flexDirection: "row",
    gap: 20,
  },
  blockText: {
    paddingTop: 15,
    width: 180,
    marginLeft: 10,
  },
  blockHeader: {
    color: "#FFFFFF",
    fontSize: 30,
    fontFamily: "Coolvetica-Regular",
  },
  blockSubtitle: {
    color: "#FFFFFF",
    fontWeight: "700",
    fontSize: 13,
    width: 200,
  },
  bottomRow: {
    display: "flex",
    flexDirection: "row",
    gap: 7,
    justifyContent: "center",
    paddingBottom: 10,
  },
  qrButton: {
    backgroundColor: "#333333ff",
    paddingHorizontal: 35,
    paddingVertical: 20,
    borderBottomLeftRadius: 15,
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 20,
  },
  eyeIcon: {
    width: 60,
    height: 60,
  },
  buttonContainer: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    bottom: 75,
  },
  qrCodeButton: {
    width: 200,
    height: 64,
    transform: [{ scale: 0.7 }],
    position: "absolute",
    left: -20,
  },
  pinButton: {
    width: 200,
    height: 64,
    transform: [{ scale: 0.7 }],
    position: "absolute",
    right: -20,
  },
});
