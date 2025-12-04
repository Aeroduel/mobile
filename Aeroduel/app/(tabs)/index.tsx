import AeroduelHeader from "@/components/AeroduelHeader";
import DuelCard from "@/components/DuelCard";
import ScoreboardCard from "@/components/LinkCard";
import NewsCard from "@/components/NewsCard";
import WelcomeCard from "@/components/WelcomeCard";
import { LinearGradient } from "expo-linear-gradient";
import * as SplashScreen from "expo-splash-screen";
import { ScrollView, StyleSheet, View } from "react-native";

SplashScreen.preventAutoHideAsync();

export default function HomeScreen() {
  return (
    <View style={{ flex: 1 }}>
      <LinearGradient
        colors={["#000000", "#FF0000"]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={styles.backgroundGradient}
      ></LinearGradient>
      {/* PAGE HEADER */}
      <AeroduelHeader />
      <ScrollView
        contentContainerStyle={{
          flexGrow: 1,
          justifyContent: "flex-start",
          position: "relative",
        }}
      >
        {/* MAIN CONTENT */}
        <View>
          <WelcomeCard />
          <DuelCard />
          <ScoreboardCard />
          <NewsCard />
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  backgroundGradient: {
    position: "absolute",
    width: "100%",
    height: "100%",
  },
});
