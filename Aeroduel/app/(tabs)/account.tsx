import ProfileHeaderCard from "@/components/AccountHeaderCard";
import ProfileHeader from "@/components/AccountHeader";
import StatisticsHeaderCard from "@/components/StatisticsHeaderCard";
import AccountInformationCard from "@/components/AccountInformationCard";
import AccountCreationDateCard from "@/components/AccountCreationDate";
import { LinearGradient } from "expo-linear-gradient";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import { ScrollView, StyleSheet, View, Pressable } from "react-native";
import { router } from "expo-router";

SplashScreen.preventAutoHideAsync();

export default function ProfilePage() {
  const statisticsRoute = () => {
    router.push('/statistics')
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
          <AccountCreationDateCard />
          <Pressable onPress={statisticsRoute}>
            <StatisticsHeaderCard />
          </Pressable>
          <AccountInformationCard />
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
