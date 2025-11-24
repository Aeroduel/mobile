import { router } from "expo-router";
import { Text, View, StyleSheet, Pressable } from "react-native";

export default function SettingsOptions() {
  // We might need to move every settings option to a seperate component for spacing and formatting.
  const settings = [
    { title: 'Username', route: '' },
    { title: 'Password', route: '' },
    { title: 'Clear Cache', route: ''},
    { title: 'FAQ', route: ''},
    { title: 'Help', route: ''},
    { title: 'About', route: '/about'},
    { title: 'Delete Account', route: ''}
  ];

  const settingsRouter = (route) => {
    router.push(route)
  }

  return (
    <View style={styles.settingsContainer}>
      {settings.map((setting, index) => (
        <Pressable key={index} onPress={() => settingsRouter(setting.route)}>
            <Text style={styles.settingsTitle}>{setting.title}</Text>
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
