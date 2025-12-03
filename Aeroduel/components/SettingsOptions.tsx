import { router } from "expo-router";
import { Pressable, StyleSheet, Text, View } from "react-native";

export default function SettingsOptions() {
  // Declare settings options
  const settings = [
    { title: "App Appearance", description: "Set the theme of your Aeroduel App", route: "/appAppearance" },
    { title: "FAQ", description: "Set theme them for your Aeroduel App", route: "/faq" },
    { title: "About", description: "Learn more about Aeroduel and our vision", route: "/about" },
    { title: "Privacy Policy", description: "Read our updated privacy policy", route: "/privacyPolicy" },
    { title: "Advanced", description: "Extended options to manage your account", route: "/deleteAccount" },
  ];

  const settingsRouter = (route: string) => {
    router.push(route as any);
  };

  return (
    <View style={styles.settingsContainer}>
      {settings.map((setting, index) => (
        <Pressable key={index} onPress={() => settingsRouter(setting.route)}>
          <Text style={styles.settingsTitle}>{setting.title}</Text>
          <Text style={styles.settingsDescription}>{setting.description}</Text>
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
  },
  settingsOption: {
    flexDirection: "row",
    display: "flex",
    backgroundColor: "#015b74ff",
  },
  settingsTitle: {
    color: "#FFFFFF",
    fontSize: 24,
    paddingLeft: 10,
    fontFamily: 'Coolvetica-Regular',
  },
  settingsDescription: {
    color: "#FFFFFF",
    fontSize: 13,
    paddingLeft: 10,
    paddingTop: 3,
    fontFamily: 'Coolvetica-Light',
  },
});
