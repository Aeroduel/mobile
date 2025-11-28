import { Text, View, Pressable, StyleSheet } from "react-native";
import LogoutElement from "./LogoutElement";
import { router, SplashScreen } from "expo-router";
import { useEffect } from "react";
import { useFonts } from "expo-font";

export default function AeroduelHeader() {
  const [fontsLoaded] = useFonts({
    "Xirod": require("../assets/fonts/Xirod.otf"),
  });

  useEffect(() => {
    if (fontsLoaded) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  const signOut = () => {
    router.replace("/");
  };

  return (
    <View style={styles.aeroduelHeader}>
      <Pressable>
        <Text style={styles.headerText}>Aeroduel</Text>
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
