import StatisticsHeader from "@/components/Headers/StatisticsHeader";
import StatisticsHeaderCard from "@/components/Statistics/StatisticsHeaderCard";
import { LinearGradient } from "expo-linear-gradient";
import * as SplashScreen from "expo-splash-screen";
import { useState } from "react";
import { ScrollView, StyleSheet, View, RefreshControl } from "react-native";

SplashScreen.preventAutoHideAsync();

export default function HomeScreen() {
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
