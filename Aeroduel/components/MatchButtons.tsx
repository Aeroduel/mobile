import { router } from "expo-router";
import { Pressable, View, Text, StyleSheet } from "react-native";

export default function MatchButtons() {
  const joinMatch = () => {
    router.push("/duel");
  };

  const startMatch = () => {
    router.push("/start");
  }

  return (
    <View style={styles.bottomRow}>
      <Pressable style={styles.joinButton} onPress={joinMatch}>
        <Text style={styles.buttonText}>Join Match</Text>
      </Pressable>
      <Pressable style={styles.startButton} onPress={startMatch}>
        <Text style={styles.buttonText}>Start Match</Text>
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
  joinButton: {
    backgroundColor: "rgba(225, 225, 225, 0.22)",
    paddingHorizontal: 45,
    paddingVertical: 20,
    borderBottomLeftRadius: 15,
  },
  startButton: {
    backgroundColor: "rgba(225, 225, 225, 0.22)",
    paddingHorizontal: 45,
    paddingVertical: 20,
    borderBottomRightRadius: 15,
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 20,
  },
});
