import StatisticsHeader from "@/components/Headers/StatisticsHeader";
import Match1Card from "@/components/Statistics/Match1Card";
import Match2Card from "@/components/Statistics/Match2Card";
import Match3Card from "@/components/Statistics/Match3Card";
import Match4Card from "@/components/Statistics/Match4Card";
import StatisticsHeaderCard from "@/components/Statistics/StatisticsHeaderCard";
import { LinearGradient } from "expo-linear-gradient";
import { router } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useState } from "react";
import {
  Pressable,
  RefreshControl,
  ScrollView,
  StyleSheet,
  View,
} from "react-native";

SplashScreen.preventAutoHideAsync();

export default function HomeScreen() {
  // State variables for RefreshControl
  const [refreshing, setRefreshing] = useState(false);

  const viewScoreboard = () => {
    router.push('/scoreboard')
  }

  // RefreshControl handler function
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
      <StatisticsHeader />
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
            tintColor={"white"}
          />
        }
      >
        {/* MAIN CONTENT */}
        <View>
          <StatisticsHeaderCard />
          <Pressable onPress={viewScoreboard}>
            <Match1Card />
          </Pressable>
          <Pressable onPress={viewScoreboard}>
            <Match2Card />
          </Pressable>
          <Pressable onPress={viewScoreboard}>
            <Match3Card />
          </Pressable>
          <Pressable onPress={viewScoreboard}>
            <Match4Card />
          </Pressable>
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
