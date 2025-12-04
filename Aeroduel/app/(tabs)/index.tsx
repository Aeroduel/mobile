import AeroduelHeader from "@/components/AeroduelHeader";
import DuelCard from "@/components/DuelCard";
import ScoreboardCard from "@/components/LinkCard";
import NewsCard from "@/components/NewsCard";
import WelcomeCard from "@/components/WelcomeCard";
import { LinearGradient } from "expo-linear-gradient";
import { router } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useEffect, useState } from "react";
import { RefreshControl, ScrollView, StyleSheet, View } from "react-native";
import { auth } from "../../config/FirebaseConfig";

SplashScreen.preventAutoHideAsync();

export default function HomeScreen() {
  const user = auth.currentUser;

  useEffect(() => {
    if (!user) {
      router.replace("/login");
    }
  }, [user]);

  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = () => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 1500);
  };

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
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={onRefresh}
            tintColor={'white'}
          />
        }
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
