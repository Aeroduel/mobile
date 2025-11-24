import { View, StyleSheet, TextInput } from "react-native";

export default function PinInput() {
  // Max length for individual text input box
  // TODO: look for a way around this, just formatting for now
  const maxLength = 1;

  return (
    <View style={styles.pinInputContainer}>
      <View style={styles.pinInputRow}>
        <View style={styles.roundedLeftInputButton}>
          <TextInput style={styles.pinInputText} keyboardType="numeric" maxLength={maxLength}></TextInput>
        </View>
        <View style={styles.squareInputButton}>
          <TextInput style={styles.pinInputText} keyboardType="numeric" maxLength={maxLength}></TextInput>
        </View>
        <View style={styles.squareInputButton}>
          <TextInput style={styles.pinInputText} keyboardType="numeric" maxLength={maxLength}></TextInput>
        </View>
        <View style={styles.roundedRightInputButton}>
          <TextInput style={styles.pinInputText} keyboardType="numeric" maxLength={maxLength}></TextInput>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  pinInputContainer: {
    backgroundColor: 'rgba(225, 225, 225, 0.25)',
    paddingTop: 0,
    marginBottom: 10,
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
    display: "flex",
    width: 360,
  },
  pinInputRow: {
    flexDirection: "row",
    justifyContent: "center",
    gap: 5,
    padding: 10,
  },
  roundedLeftInputButton: {
    backgroundColor: "rgba(225, 225, 225, 0.22)",
    width: 45,
    height: 45,
    borderBottomLeftRadius: 15,
  },
  squareInputButton: {
    backgroundColor: "rgba(225, 225, 225, 0.22)",
    width: 45,
    height: 45,
  },
  roundedRightInputButton: {
    backgroundColor: "rgba(225, 225, 225, 0.22)",
    width: 45,
    height: 45,
    borderBottomRightRadius: 15,
  },
  pinInputText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 40,
    textAlign: 'center',
  },
});
