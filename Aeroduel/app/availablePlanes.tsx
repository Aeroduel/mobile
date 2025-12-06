import Plane1Card from "@/components/Link/Planes/Plane1Card";
import Plane2Card from "@/components/Link/Planes/Plane2Card";
import Plane3Card from "@/components/Link/Planes/Plane3Card";
import LinkHeaderCard from "@/components/Link/LinkHeaderCard";
import AvailablePlanesHeaderCard from "@/components/Link/Planes/AvailablePlanesHeaderCard";
import { LinearGradient } from "expo-linear-gradient";
import { router } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useState } from "react";
import PlanesHeader from '@/components/Headers/PlanesHeader';
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

  // RefreshControl handler function
  const onRefresh = () => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 1500);
  };

  const routeToJoin = () => {
    router.push("/join");
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
      <PlanesHeader />
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
          <AvailablePlanesHeaderCard />
          <Pressable onPress={routeToJoin}>
            <Plane1Card />
            <Plane2Card />
            <Plane3Card />
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
