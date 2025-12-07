import { router } from "expo-router";
import { Pressable, StyleSheet, Text, View } from "react-native";

export default function SettingsOptions() {
  // Declare settings options
  const settings = [
    {
      title: "App Appearance",
      description: "Set the theme of your Aeroduel app",
      route: "/appAppearance",
    },
    {
      title: "FAQ",
      description: "Your frequently asked questions, answered",
      route: "/faq",
    },
    {
      title: "About",
      description: "Learn more about Aeroduel and our vision",
      route: "/about",
    },
    {
      title: "Privacy Policy",
      description: "Read our current privacy policy",
      route: "/privacyPolicy",
    },
    {
      title: "Advanced",
      description: "Extended options to manage your account",
      route: "/advancedSettings",
    },
  ];

  const settingsRouter = (route: string) => {
    router.push(route as any);
  };

  return (
    <View>
      <View style={styles.settingsContainer}>
        <Pressable
          onPress={() => settingsRouter(settings[0].route)}
          style={styles.settingsOption}
        >
          <Text style={styles.settingsTitle}>{settings[0].title}</Text>
          <Text style={styles.settingsDescription}>
            {settings[0].description}
          </Text>
        </Pressable>
      </View>
      <View style={styles.settingsContainer}>
        <Pressable
          onPress={() => settingsRouter(settings[1].route)}
          style={styles.settingsOption}
        >
          <Text style={styles.settingsTitle}>{settings[1].title}</Text>
          <Text style={styles.settingsDescription}>
            {settings[1].description}
          </Text>
        </Pressable>
      </View>
      <View style={styles.settingsContainer}>
        <Pressable
          onPress={() => settingsRouter(settings[2].route)}
          style={styles.settingsOption}
        >
          <Text style={styles.settingsTitle}>{settings[2].title}</Text>
          <Text style={styles.settingsDescription}>
            {settings[2].description}
          </Text>
        </Pressable>
      </View>
      <View style={styles.settingsContainer}>
        <Pressable
          onPress={() => settingsRouter(settings[3].route)}
          style={styles.settingsOption}
        >
          <Text style={styles.settingsTitle}>{settings[3].title}</Text>
          <Text style={styles.settingsDescription}>
            {settings[3].description}
          </Text>
        </Pressable>
      </View>
      <View style={styles.settingsContainer}>
        <Pressable
          onPress={() => settingsRouter(settings[4].route)}
          style={styles.settingsOption}
        >
          <Text style={styles.settingsTitle}>{settings[4].title}</Text>
          <Text style={styles.settingsDescription}>
            {settings[4].description}
          </Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  settingsContainer: {
    backgroundColor: "rgba(145, 72, 72, 0.5)",
    opacity: 100,
    marginHorizontal: 10,
    marginVertical: 5,
    paddingTop: 15,
    paddingBottom: 20,
    paddingLeft: 5,
    borderRadius: 15,
    gap: 15,
  },
  settingsOption: {
    marginLeft: 10,
  },
  settingsTitle: {
    color: "#FFFFFF",
    fontSize: 24,
    paddingLeft: 10,
    fontFamily: "Coolvetica-Regular",
  },
  settingsDescription: {
    color: "#FFFFFF",
    fontSize: 13,
    paddingLeft: 10,
    paddingTop: 3,
    fontFamily: "Coolvetica-Light",
  },
});
