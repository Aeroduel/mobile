import { router } from "expo-router";
import { Text, View, Pressable, StyleSheet } from "react-native";

export default function SpectateButtons() {
  // Push to QR scanner page
  const scanQR = () => {
    router.push("/qrEntry");
  };

  // Push to pin entry page
  const enterPin = () => {
    router.push("/pinEntry");
  };

  return (
    <View style={styles.bottomRow}>
      <Pressable style={styles.qrButton} onPress={scanQR}>
        <Text style={styles.buttonText}>Scan QR</Text>
      </Pressable>
      <Pressable style={styles.pinButton} onPress={enterPin}>
        <Text style={styles.buttonText}>Enter Pin</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  bottomRow: {
    display: "flex",
    flexDirection: "row",
    gap: 7,
    justifyContent: "center",
    paddingBottom: 10,
  },
  qrButton: {
    backgroundColor: "rgba(225, 225, 225, 0.22)",
    paddingHorizontal: 47,
    paddingVertical: 20,
    borderBottomLeftRadius: 15,
  },
  pinButton: {
    backgroundColor: "rgba(225, 225, 225, 0.22)",
    paddingHorizontal: 47,
    paddingVertical: 20,
    borderBottomRightRadius: 15,
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 20,
  },
});
