import { router } from "expo-router";
import { Pressable, StyleSheet, Text, View, Image } from "react-native";
const themeIcon = require("../../assets/images/theme-icon.png")
const questionIcon = require("../../assets/images/question-mark.png");
const aboutIcon = require("../../assets/images/search-glass.png");
const privacyIcon = require("../../assets/images/privacy-icon.png");
const pickaxeIcon = require("../../assets/images/pickaxe.png")

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
        <Pressable onPress={() => settingsRouter(settings[0].route)} style={styles.settingsOption}>
          <View style={styles.settingsText}>
            <Text style={styles.settingsTitle}>{settings[0].title}</Text>
            <Text style={[styles.settingsDescription, styles.appearanceDescription]}>
              {settings[0].description}
            </Text>
          </View>
          <View>
            <Image source={themeIcon} style={[styles.settingsIcons, styles.appearanceIcon]}></Image>
          </View>
        </Pressable>
      </View>
      <View style={styles.settingsContainer}>
        <Pressable onPress={() => settingsRouter(settings[1].route)} style={styles.settingsOption}>
          <View style={styles.settingsText}>
            <Text style={styles.settingsTitle}>{settings[1].title}</Text>
            <Text style={[styles.settingsDescription, styles.faqDescription]}>
              {settings[1].description}
            </Text>
          </View>
          <View>
            <Image source={questionIcon} style={styles.settingsIcons}></Image>
          </View>
        </Pressable>
      </View>
      <View style={styles.settingsContainer}>
        <Pressable onPress={() => settingsRouter(settings[2].route)} style={styles.settingsOption}>
          <View style={styles.settingsText}>
            <Text style={styles.settingsTitle}>{settings[2].title}</Text>
            <Text style={[styles.settingsDescription, styles.aboutDescription]}>
              {settings[2].description}
            </Text>
          </View>
          <View>
            <Image source={aboutIcon} style={styles.settingsIcons}></Image>
          </View>
        </Pressable>
      </View>
      <View style={styles.settingsContainer}>
        <Pressable onPress={() => settingsRouter(settings[3].route)} style={styles.settingsOption}>
          <View style={styles.settingsText}>
            <Text style={styles.settingsTitle}>{settings[3].title}</Text>
            <Text style={[styles.settingsDescription, styles.privacyDescription]}>
              {settings[3].description}
            </Text>
          </View>
          <View>
            <Image source={privacyIcon} style={styles.settingsIcons}></Image>
          </View>
        </Pressable>
      </View>
      <View style={styles.settingsContainer}>
        <Pressable onPress={() => settingsRouter(settings[4].route)} style={styles.settingsOption}>
          <View style={styles.settingsText}>
            <Text style={styles.settingsTitle}>{settings[4].title}</Text>
            <Text style={[styles.settingsDescription, styles.advancedDescription]}>
              {settings[4].description}
            </Text>
          </View>
          <View>
            <Image source={pickaxeIcon} style={styles.settingsIcons}></Image>
          </View>
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
    flexDirection: 'row',
  },
  settingsText: {
    display: 'flex',
    flexDirection: 'column',
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
  appearanceIcon: {
    width: 45,
    height: 45,
  },
  settingsIcons: {
    width: 40,
    height: 40,
    marginTop: 4,
  },
  appearanceDescription: {
    width: 290,
  },
  faqDescription: {
    width: 290,
  },
  aboutDescription: {
    width: 290,
  },
  privacyDescription: {
    width: 290,
  },
  advancedDescription: {
    width: 290,
  },
});
