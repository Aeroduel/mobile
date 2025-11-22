import { Pressable, View, Text, StyleSheet } from "react-native";

export default function PinInput() {
  return (
    <View style={styles.pinInputContainer}>
      <View style={styles.pinInputRow}>
        <View style={styles.roundedLeftInputButton}>
          <Text style={styles.pinInputText}>1</Text>
        </View>
        <View style={styles.squareInputButton}>
          <Text style={styles.pinInputText}>2</Text>
        </View>
        <View style={styles.squareInputButton}>
          <Text style={styles.pinInputText}>3</Text>
        </View>
        <View style={styles.roundedRightInputButton}>
          <Text style={styles.pinInputText}>4</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  pinInputContainer: {
    backgroundColor: 'rgba(225, 225, 225, 0.25)',
    paddingTop: 10,
    marginBottom: 15,
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
  },
  pinInputRow: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    gap: 10,
    paddingBottom: 10,
  },
  roundedLeftInputButton: {
    backgroundColor: "rgba(225, 225, 225, 0.22)",
    paddingHorizontal: 15,
    paddingVertical: 5,
    borderBottomLeftRadius: 15,
  },
  squareInputButton: {
    backgroundColor: "rgba(225, 225, 225, 0.22)",
    paddingHorizontal: 15,
    paddingVertical: 5,
  },
  roundedRightInputButton: {
    backgroundColor: "rgba(225, 225, 225, 0.22)",
    paddingHorizontal: 15,
    paddingVertical: 5,
    borderBottomRightRadius: 15,
  },
  pinInputText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 30,
  },
});
