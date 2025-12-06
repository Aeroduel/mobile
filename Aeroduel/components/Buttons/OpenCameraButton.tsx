import { router } from "expo-router";
import { Pressable, StyleSheet, Text, View } from "react-native";

export default function OpenCameraButton() {
  // Route to the QR entry page
  const startMatch = () => {
    router.push("/qrEntry");
  };

  return (
    <View style={styles.cameraBlock}>
      <Pressable style={styles.cameraButton} onPress={startMatch}>
        <Text style={styles.buttonText}>Open Camera</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  cameraBlock: {
    display: "flex",
    justifyContent: "center",
    flexDirection: "row",
    gap: 7,
    paddingBottom: 10,
  },
  cameraButton: {
    backgroundColor: "rgba(225, 225, 225, 0.22)",
    paddingHorizontal: 115,
    paddingVertical: 20,
    borderBottomRightRadius: 15,
    borderBottomLeftRadius: 15,
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 20,
    width: 130,
  },
});
