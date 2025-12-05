import AccountHeaderCard from "@/components/Account/AccountHeaderCard";
import AdvancedHeader from "@/components/Headers/AdvancedHeader";
import StatisticsOptionCard from "@/components/Account/StatisticsOptionCard";
import AccountInformationCard from "@/components/Account/AccountInformationCard";
import AccountCreationDateCard from "@/components/Account/AccountCreationDate";
import DeleteAccountCard from "@/components/Settings/Advanced/DeleteAccountCard";
import ResetPasswordCard from "@/components/Settings/Advanced/ResetPasswordCard";
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

SplashScreen.preventAutoHideAsync();

export default function AdvancedSettings() {
  const statisticsRoute = () => {
    router.push("/statistics");
  };

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
      <AdvancedHeader />
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
          <Pressable>
            <ResetPasswordCard />
          </Pressable>
          <Pressable>
            <DeleteAccountCard />
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
