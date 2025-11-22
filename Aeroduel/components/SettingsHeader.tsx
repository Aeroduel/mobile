import { Text, View, StyleSheet, Image } from "react-native";
import settingsGear from "../assets/images/settings-gear-white.png"

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
    marginLeft: 10,
    marginRight: 10,
    marginTop: 5,
    marginBottom: 5,
    paddingLeft: 20,
    paddingRight: 20,
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
  }
});