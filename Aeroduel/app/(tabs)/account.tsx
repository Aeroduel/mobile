import AccountHeaderCard from "@/components/Account/AccountHeaderCard";
import AccountHeader from "@/components/Headers/AccountHeader";
import StatisticsOptionCard from "@/components/Account/StatisticsOptionCard";
import AccountCreationDateCard from "@/components/Account/AccountCreationDate";
import { LinearGradient } from "expo-linear-gradient";
import * as SplashScreen from "expo-splash-screen";
import {
  ScrollView,
  StyleSheet,
  View,
  Pressable,
  RefreshControl,
} from "react-native";
import { router } from "expo-router";
import { useState } from "react";
import AccountLoginHistoryCard from "@/components/Account/AccountLoginHistoryCard";

SplashScreen.preventAutoHideAsync();

export default function ProfilePage() {
  // Route to the statistics page
  const statisticsRoute = () => {
    router.push("/statistics");
  };

  // State variables for RefreshControl
  const [refreshing, setRefreshing] = useState(false);

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
      <AccountHeader />
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
            tintColor={"#white"}
          />
        }
      >
        {/* MAIN CONTENT */}
        <View>
          <AccountHeaderCard />
          <AccountCreationDateCard />
          <AccountLoginHistoryCard />
          <Pressable onPress={statisticsRoute}>
            <StatisticsOptionCard />
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
