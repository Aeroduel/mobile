import { Text, View, StyleSheet } from "react-native";
import SpectateButtons from "./SpectateButtons";

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
        {/* <Image (Need to get a higher quality icon)
              source={eye}
              style={styles.eyeIcon}
            ></Image> */}
      </View>
      <SpectateButtons />
    </View>
  );
}

const styles = StyleSheet.create({
  spectateContainer: {
    backgroundColor: "rgba(145, 72, 72, 0.5)", // rgba to set opacity for background
    opacity: 100,
    marginLeft: 10,
    marginRight: 10,
    marginTop: 5,
    marginBottom: 5,
    paddingLeft: 20,
    paddingRight: 20,
    height: 220,
    borderRadius: 15,
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "column",
    paddingTop: 35,
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
});
