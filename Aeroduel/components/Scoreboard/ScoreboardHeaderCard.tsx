import { StyleSheet, Text, View } from "react-native";

export default function SpectateCard() {
  return (
    <View style={styles.spectateContainer}>
      <View style={styles.topRow}>
        <View style={styles.blockText}>
          <Text style={styles.blockHeader}>Scoreboard</Text>
          <Text style={styles.blockSubtitle}>Match Pin: [Match Pin]</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  spectateContainer: {
    backgroundColor: "rgba(145, 72, 72, 0.3)", // rgba to set opacity for background
    marginHorizontal: 10,
    marginVertical: 5,
    paddingHorizontal: 20,
    height: 170,
    borderRadius: 15,
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    paddingTop: 0,
  },
  topRow: {
    flexDirection: "row",
    gap: 20,
  },
  blockText: {
    width: 180,
    marginLeft: 10,
  },
  blockHeader: {
    color: "#FFFFFF",
    fontSize: 36,
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
});
