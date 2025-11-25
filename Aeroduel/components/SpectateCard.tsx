import { Text, View, StyleSheet, Image } from "react-native";
import SpectateButtons from "./SpectateButtons";
const eyeIcon = require("../assets/images/scan-eye-half-white.png");

export default function SpectateCard() {
  return (
    <View style={styles.spectateContainer}>
      <View style={styles.topRow}>
        <View style={styles.blockText}>
          <Text style={styles.blockHeader}>Spectate</Text>
          <Text style={styles.blockSubtitle}>
            View the scoreboards of ongoing duels
          </Text>
        </View>
        <Image source={eyeIcon} style={styles.eyeIcon}></Image>
      </View>
      <SpectateButtons />
    </View>
  );
}

const styles = StyleSheet.create({
  spectateContainer: {
    backgroundColor: "rgba(145, 72, 72, 0.5)", // rgba to set opacity for background
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    opacity: 100,
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
    gap: 20,
  },
  blockText: {
    paddingTop: 0,
    width: 220,
  },
  blockHeader: {
    color: "#FFFFFF",
    fontSize: 40,
    fontFamily: "Coolvetica-Regular",
  },
  blockSubtitle: {
    color: "#FFFFFF",
    fontWeight: "700",
    fontSize: 14,
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
  pinButton: {
    backgroundColor: "#333333ff",
    paddingHorizontal: 55,
    paddingVertical: 20,
    borderBottomRightRadius: 15,
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 20,
  },
  eyeIcon: {
    width: 60,
    height: 60,
  }
});
