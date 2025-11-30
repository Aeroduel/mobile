import { router } from "expo-router";
import { Pressable, StyleSheet, Text, View } from "react-native";

export default function SettingsOptions() {
  // Declare settings options
  const settings = [
    { title: "Username", route: "/username.tsx" },
    { title: "Password", route: "/password.tsx" },
    { title: "App Apperance", route: "/appearance.tsx" },
    { title: "FAQ", route: "/faq" },
    { title: "About", route: "/about" },
    { title: "Privacy Policy", route: "/privacyPolicy" },
    { title: "Advanced", route: "/deleteAccount.tsx" },
  ];

  const settingsRouter = (route: string) => {
    router.push(route as any);
  };

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
    backgroundColor: "#015b74ff",
  },
  settingsTitle: {
    color: "#FFFFFF",
    fontSize: 28,
    fontFamily: "Coolvetica-Regular",
  },
});
