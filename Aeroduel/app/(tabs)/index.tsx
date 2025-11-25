import AeroduelHeader from "@/components/AeroduelHeader";
import DuelCard from "@/components/DuelCard";
import HomeHeader from "@/components/HomeHeader";
import NewsCard from "@/components/NewsCard";
import SpectateCard from "@/components/ScoreboardCard";
import { useFonts } from "expo-font";
import { LinearGradient } from "expo-linear-gradient";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import { ScrollView, StyleSheet, View } from "react-native";

SplashScreen.preventAutoHideAsync();

export default function HomeScreen() {
  const [fontsLoaded] = useFonts({
    "Coolvetica-Regular": require("../../assets/fonts/coolvetica-regular.otf"),
  });

  useEffect(() => {
    if (fontsLoaded) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
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
        <AeroduelHeader />
        {/* MAIN CONTENT */}
        <View>
          <DuelCard />
          <SpectateCard />
          <NewsCard />
        </View>
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
});
