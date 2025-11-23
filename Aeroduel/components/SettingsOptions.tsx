import { Text, View, StyleSheet, Pressable } from "react-native";

export default function SettingsOptions() {
  // We might need to move every settings option to a seperate component for spacing and formatting.
  const settings = [
    'Username',
    'Password',
    'Clear Cache',
    'FAQ',
    'Help',
    'About',
    'Delete Account'
  ]
  return (
    <View style={styles.settingsContainer}>
      {settings.map((title, index) => (
        <Pressable key={index}>
            <Text style={styles.settingsTitle}>{title}</Text>
        </Pressable>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  settingsContainer: {
    backgroundColor: "rgba(145, 72, 72, 0.5)", // rgba to set opacity for background
    opacity: 100,
    marginHorizontal: 10,
    marginVertical: 5,
    paddingVertical: 10,
    paddingLeft: 20,
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
    backgroundColor: '#015b74ff',
  },
  settingsTitle: {
    color: "#FFFFFF",
    fontSize: 30,
    fontFamily: "Coolvetica-Regular",
  },
});
