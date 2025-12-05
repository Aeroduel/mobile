import BackHeader from "@/components/Headers/BackHeader";
import { LinearGradient } from "expo-linear-gradient";
import * as SplashScreen from "expo-splash-screen";
import {
  Alert,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import AppAppearanceHeader from "@/components/Settings/AppAppearance/appAppearanceHeader";

SplashScreen.preventAutoHideAsync();

export default function AppAppearance() {
  const aeroduelAlert = () => {
    Alert.alert("Success!", "Theme was set to: Aeroduel");
  };
  const duskAlert = () => {
    Alert.alert("Success!", "Theme was set to: Dusk");
  };
  const lightAlert = () => {
    Alert.alert("Success!", "Theme was set to: Light");
  };

  return (
    <View style={styles.container}>
      <LinearGradient
        colors={["#000000", "#FF0000"]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={styles.backgroundGradient}
      ></LinearGradient>
      <ScrollView
        contentContainerStyle={{
          flexGrow: 1,
          justifyContent: "flex-start",
          position: "relative",
        }}
      >
        {/* PAGE HEADER */}
        <BackHeader />
        <AppAppearanceHeader />
        {/* MAIN CONTENT */}
        <Pressable onPress={aeroduelAlert} style={styles.appearanceOption}>
          <Text style={styles.appearanceTitle}>
            Aeroduel Theme
            <View style={[styles.themePreviewBlocks, styles.aeroduel]}>
              <View style={[styles.colorPreview, styles.black]}></View>
              <View style={[styles.colorPreview, styles.red]}></View>
              <View style={[styles.colorPreview, styles.white]}></View>
            </View>
          </Text>
          <Text style={styles.appearanceSubtitle}>
            Derived from the colors of our brand
          </Text>
        </Pressable>
        <Pressable onPress={duskAlert} style={styles.appearanceOption}>
          <Text style={styles.appearanceTitle}>
            Dusk Theme
            <View style={[styles.themePreviewBlocks, styles.dusk]}>
              <View style={[styles.colorPreview, styles.darkGrey]}></View>
              <View style={[styles.colorPreview, styles.lightGrey]}></View>
              <View style={[styles.colorPreview, styles.white]}></View>
            </View>
          </Text>
          <Text style={styles.appearanceSubtitle}>
            Darker colors, for those that prefer them.
          </Text>
        </Pressable>
        <Pressable onPress={lightAlert} style={styles.appearanceOption}>
          <Text style={styles.appearanceTitle}>
            Light Theme
            <View style={[styles.themePreviewBlocks, styles.light]}>
              <View style={[styles.colorPreview, styles.skyBlue]}></View>
              <View style={[styles.colorPreview, styles.white]}></View>
              <View style={[styles.colorPreview, styles.black]}></View>
            </View>
          </Text>
          <Text style={styles.appearanceSubtitle}>
            Lighter colors, for those that prefer them.
          </Text>
        </Pressable>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    position: "relative",
    fontFamily: "Coolvetica-Regular",
  },
  backgroundGradient: {
    position: "absolute",
    width: "100%",
    height: "100%",
  },
  appearanceContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 50,
  },
  appearanceMainHeader: {
    color: "white",
    fontSize: 50,
  },
  appearanceTextContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  appearanceText: {
    color: "white",
    textAlign: "left",
    width: "80%",
    lineHeight: 35,
    fontSize: 15,
  },
  appearanceOption: {
    backgroundColor: "rgba(145, 72, 72, 0.5)",
    borderRadius: 15,
    marginVertical: 5,
    marginHorizontal: 10,
  },
  appearanceTitle: {
    color: "white",
    fontSize: 24,
    paddingLeft: 30,
    paddingTop: 15,
    paddingBottom: 5,
    fontFamily: "Coolvetica-Regular",
  },
  appearanceSubtitle: {
    color: "white",
    fontSize: 13,
    fontWeight: 300,
    paddingLeft: 30,
    paddingBottom: 15,
    fontFamily: "Coolvetica-Light",
  },
  themePreviewBlocks: {
    display: "flex",
    justifyContent: "flex-end",
    flexDirection: "row",
    gap: 10,
  },
  colorPreview: {
    width: 25,
    height: 25,
    borderRadius: 4,
  },
  black: {
    backgroundColor: "black",
    shadowColor: "black",
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.4,
    shadowRadius: 5,
  },
  red: {
    backgroundColor: "red",
    shadowColor: "red",
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.4,
    shadowRadius: 5,
  },
  white: {
    backgroundColor: "white",
    shadowColor: "white",
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.4,
    shadowRadius: 5,
  },
  darkGrey: {
    backgroundColor: "#242424ff",
    shadowColor: "#242424ff",
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.9,
    shadowRadius: 5,
  },
  lightGrey: {
    backgroundColor: "#4d4d4dff",
    shadowColor: "#4d4d4dff",
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.9,
    shadowRadius: 5,
  },
  skyBlue: {
    backgroundColor: "#96eaffff",
    shadowColor: "#96eaffff",
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.4,
    shadowRadius: 5,
  },
  aeroduel: {
    paddingLeft: 70,
  },
  dusk: {
    paddingLeft: 110,
  },
  light: {
    paddingLeft: 108,
  },
});
