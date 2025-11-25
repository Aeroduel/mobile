import { Text, View, StyleSheet, Image, Pressable } from "react-native";
import SpectateButtons from "./SpectateButtons";
import { router } from "expo-router";
const eyeIcon = require("../assets/images/scan-eye-half-white.png");
const startButton = require("../assets/images/start-match.png");
const qrButton = require("../assets/images/qrcode-btn.png");
const pinButton = require("../assets/images/pin-btn.png");

export default function NewsCard() {
  const aboutRedirect = () => {
    router.push('/about');
  };
  
  return (
    <View style={styles.newsContainer}>
      <View style={styles.topRow}>
        <View style={styles.blockText}>
          <Text style={styles.blockHeader}>Latest News</Text>
          <Text style={styles.blockSubtitle}>
            Welcome to Aeroduel Mobile! 
          </Text>
          <Text style={[styles.blockSubtitle, styles.appStatus]}>
            Great things are coming! Please be patient, as we are still developing this app! Check back soon for the official launch!
          </Text>
          <Text style={[styles.blockSubtitle, styles.appStatus]}>
            Learn more about Aeroduel and our team here
          </Text>
          <Text style={styles.blockSubtitle}>
            - Aeroduel Mobile Development Team 🛩️🎯
          </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  newsContainer: {
    backgroundColor: "rgba(145, 72, 72, 0.5)", // rgba to set opacity for background
    marginLeft: 10,
    marginRight: 10,
    marginTop: 5,
    marginBottom: 5,
    paddingHorizontal: 20,
    borderRadius: 15,
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "column",
    paddingBottom: 15,
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
    width: 310,
    marginVertical: 5,
  },
  appStatus: {
    width: 330,
    fontSize: 10,
    marginBottom: 15,
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
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    bottom: 45,
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
