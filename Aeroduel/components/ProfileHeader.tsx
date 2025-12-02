import { useFonts } from "expo-font";
import { router, SplashScreen } from "expo-router";
import { useEffect } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import LogoutElement from "./LogoutElement";

export default function ProfileHeader() {
  // Load the custom font
  const [fontsLoaded] = useFonts({
    "Xirod": require("../assets/fonts/Xirod.otf"),
  });

  // Check if the fonts are loaded
  useEffect(() => {
    if (fontsLoaded) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  // Sign out
  const signOut = () => {
    router.replace("/");
  };

  return (
    <View style={styles.aeroduelHeader}>
      <Pressable>
        <Text style={styles.headerText}>Profile</Text>
      </Pressable>
      <Pressable onPress={signOut}>
        <LogoutElement />
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  aeroduelHeader: {
    display: "flex",
    flexDirection: "row",
    marginTop: 80,
    justifyContent: "space-between",
  },
  headerText: {
    fontFamily: "Xirod",
    fontSize: 24,
    color: "#FFFFFF",
    marginLeft: 20,
    marginTop: 7,
  },
});
