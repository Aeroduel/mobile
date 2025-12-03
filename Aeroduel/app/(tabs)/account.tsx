import ProfileHeaderCard from "@/components/AccountHeaderCard";
import ProfileHeader from "@/components/AccountHeader";
import StatisticsHeaderCard from "@/components/StatisticsHeaderCard";
import EditAccountCard from "@/components/AccountInformationCard";
import { useFonts } from "expo-font";
import { LinearGradient } from "expo-linear-gradient";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import { ScrollView, StyleSheet, View } from "react-native";

SplashScreen.preventAutoHideAsync();

export default function ProfilePage() {
  // Load the custom font
  const [fontsLoaded] = useFonts({
    "Coolvetica-Regular": require("../../assets/fonts/coolvetica-regular.otf"),
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

  return (
    <View style={{ flex: 1 }}>
      <LinearGradient
        colors={["#000000", "#FF0000"]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={styles.backgroundGradient}
      ></LinearGradient>
      {/* PAGE HEADER */}
      <ProfileHeader />
      <ScrollView
        contentContainerStyle={{
          flexGrow: 1,
          justifyContent: "flex-start",
          position: "relative",
        }}
      >
        {/* MAIN CONTENT */}
        <View>
          <ProfileHeaderCard />
          <StatisticsHeaderCard />
          <EditAccountCard />
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
