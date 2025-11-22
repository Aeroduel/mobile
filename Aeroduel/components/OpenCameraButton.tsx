import { router } from "expo-router";
import { Pressable, View, Text, StyleSheet } from "react-native";

export default function OpenCameraButton() {
  // const joinMatch = () => {
  //   router.push("/join");
  // };

  const startMatch = () => {
    router.push("/qrEntry");
  }

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
    flexDirection: "row",
    gap: 7,
    justifyContent: "center",
    paddingBottom: 10,
  },
  cameraButton: {
    backgroundColor: "rgba(225, 225, 225, 0.22)",
    paddingHorizontal: 135,
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
