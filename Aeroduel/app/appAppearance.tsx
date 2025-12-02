import BackHeader from "@/components/BackHeader";
import { LinearGradient } from "expo-linear-gradient";
import * as SplashScreen from "expo-splash-screen";
import { Alert, Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import AppAppearanceHeader from "@/components/appAppearanceHeader";

SplashScreen.preventAutoHideAsync();

export default function AppAppearance() {
  const aeroduelAlert = () => {
    Alert.alert(
      "Success!",
      "Theme was set to: Aeroduel",
    )
  }
  const duskAlert = () => {
    Alert.alert(
      "Success!",
      "Theme was set to: Dusk",
    )
  }
  const lightAlert = () => {
    Alert.alert(
      "Success!",
      "Theme was set to: Light",
    )
  }

  return (
    <View style={{ flex: 1 }}>
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
          <Text style={styles.appearanceTitle}>Aeroduel Theme</Text>
        </Pressable>
        <Pressable onPress={duskAlert} style={styles.appearanceOption}>
          <Text style={styles.appearanceTitle}>Dusk Theme</Text>
        </Pressable>
        <Pressable onPress={lightAlert} style={styles.appearanceOption}>
          <Text style={styles.appearanceTitle}>Light Theme</Text>
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
    alignItems: 'center',
    marginTop: 50,
  },
  appearanceHeader: {
    fontWeight: "bold",
    color: "white",
    fontFamily: "Coolvetica-Regular",
    fontSize: 50,
  },
  dateContainer: {
    alignItems: 'center',
  },
  dateText: {
    textAlign: 'center',
  },
  privacyMainHeader: {
    color: "white",
    fontFamily: "Coolvetica-Regular",
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
    fontFamily: "Coolvetica-Regular",
    lineHeight: 35,
    fontSize: 15,
  },
  privacyHeader: {
    fontSize: 36,
    color: "white",
    fontFamily: "Coolvetica-Regular",
  },
  privacyContainer: {
    display: "flex",
    flexDirection: "row",
  },
  informationUse: {
    fontSize: 33,
  },
  policyChanges: {
    fontSize: 34,
  },
  appearanceOption: {
    backgroundColor: "rgba(145, 72, 72, 0.5)",
    borderRadius: 15,
    marginVertical: 10,
    marginHorizontal: 10,
  },
  appearanceTitle: {
    fontFamily: 'Coolvetica Regular',
    color: 'white',
    fontSize: 24,
    paddingLeft: 30,
    paddingVertical: 15,
  }
});
