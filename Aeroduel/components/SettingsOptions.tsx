import { Text, View, StyleSheet, Pressable } from "react-native";

export default function SettingsOptions() {
  // We might need to move every settings option to a seperate component for spacing and formatting.
  return (
    <View style={styles.settingsContainer}>
      <Pressable style={styles.settingsOption}>
        <View>
          <Text style={styles.settingsTitle}>Username</Text>
        </View>
      </Pressable>
      <Pressable style={styles.settingsOption}>
        <View>
          <Text style={styles.settingsTitle}>Password</Text>
        </View>
      </Pressable>
      <Pressable style={styles.settingsOption}>
        <View>
          <Text style={styles.settingsTitle}>Clear Cache</Text>
        </View>
      </Pressable>
      <Pressable style={styles.settingsOption}>
        <View>
          <Text style={styles.settingsTitle}>FAQ</Text>
        </View>
      </Pressable>
      <Pressable style={styles.settingsOption}>
        <View>
          <Text style={styles.settingsTitle}>Help</Text>
        </View>
      </Pressable>
      <Pressable style={styles.settingsOption}>
        <View>
          <Text style={styles.settingsTitle}>About</Text>
        </View>
      </Pressable>
      <Pressable style={styles.settingsOption}>
        <View>
          <Text style={styles.settingsTitle}>Delete Account</Text>
        </View>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  settingsContainer: {
    backgroundColor: "rgba(145, 72, 72, 0.5)", // rgba to set opacity for background
    opacity: 100,
    marginLeft: 10,
    marginRight: 10,
    marginTop: 5,
    marginBottom: 5,
    paddingLeft: 20,
    paddingTop: 10,
    paddingBottom: 10,
    borderRadius: 15,
    gap: 15,
    // Need to play with the shadow colors
    // shadowColor: '#512929ff',
    // shadowOffset: { width: 10, height: 10 },
    // shadowOpacity: 10,
    // shadowRadius: 5,
  },
  settingsOption: {
    flexDirection: "row",
    display: "flex",
  },
  settingsTitle: {
    color: "#FFFFFF",
    fontSize: 30,
    fontFamily: "Coolvetica-Regular",
  },
});
