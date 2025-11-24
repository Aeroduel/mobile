import { Text, View, StyleSheet, Image } from "react-native";
const settingsGear = require("../assets/images/settings-gear-white.png");
const wrenchWhite = require("../assets/images/wrench-white.png");

export default function SettingsHeader() {
  return (
    <View style={styles.settingsContainer}>
      <View style={styles.settingsRow}>
        <View>
          <Text style={styles.settingsHeader}>Settings</Text>
          <Text style={styles.settingsSubtitle}>
            Control Your App Experience
          </Text>
        </View>
        <View>
          <Image source={settingsGear} style={styles.settingsGearIcon}></Image>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  settingsContainer: {
    backgroundColor: "rgba(145, 72, 72, 0.5)", // rgba to set opacity for background
    opacity: 100,
    marginHorizontal: 10,
    marginVertical: 5,
    paddingHorizontal: 20,
    paddingBottom: 20,
    borderRadius: 15,
    paddingTop: 35,
    // Need to play with the shadow colors
    // shadowColor: '#512929ff',
    // shadowOffset: { width: 10, height: 10 },
    // shadowOpacity: 10,
    // shadowRadius: 5,
  },
  settingsRow: {
    flexDirection: "row",
    display: "flex",
    justifyContent: 'space-between',
    marginTop: 10,
  },
  settingsHeader: {
    color: "#FFFFFF",
    fontSize: 40,

    fontFamily: "Coolvetica-Regular",
  },
  settingsSubtitle: {
    color: "#FFFFFF",
    fontWeight: "700",
    paddingBottom: 20,
  },
  blockAuthor: {
    paddingTop: 20,
    fontSize: 17,
  },
  settingsGearIcon: {
    width: 70,
    height: 70,
    justifyContent: 'flex-end',
    marginRight: 15,
  }
});