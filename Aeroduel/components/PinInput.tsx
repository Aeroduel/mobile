import { Pressable, View, Text, StyleSheet, TextInput } from "react-native";

export default function PinInput() {
  return (
    <View style={styles.pinInputContainer}>
      <View style={styles.pinInputRow}>
        <View style={styles.roundedLeftInputButton}>
          <TextInput style={styles.pinInputText} keyboardType="numeric"></TextInput>
        </View>
        <View style={styles.squareInputButton}>
          <TextInput style={styles.pinInputText} keyboardType="numeric"></TextInput>
        </View>
        <View style={styles.squareInputButton}>
          <TextInput style={styles.pinInputText} keyboardType="numeric"></TextInput>
        </View>
        <View style={styles.roundedRightInputButton}>
          <TextInput style={styles.pinInputText} keyboardType="numeric"></TextInput>
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
    gap: 5,
    paddingBottom: 10,
  },
  roundedLeftInputButton: {
    backgroundColor: "rgba(225, 225, 225, 0.22)",
    width: 55,
    paddingVertical: 5,
    borderBottomLeftRadius: 15,
  },
  squareInputButton: {
    backgroundColor: "rgba(225, 225, 225, 0.22)",
    width: 55,
    paddingVertical: 5,
  },
  roundedRightInputButton: {
    backgroundColor: "rgba(225, 225, 225, 0.22)",
    width: 55,
    paddingVertical: 5,
    borderBottomRightRadius: 15,
  },
  pinInputText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 35,
    textAlign: 'center',
    textAlignVertical: 'center',
  },
});
