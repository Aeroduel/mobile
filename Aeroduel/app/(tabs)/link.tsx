import LinkHeader from "@/components/Headers/LinkHeader";
import LinkHeaderCard from "@/components/Link/LinkHeaderCard";
import PinLinkCard from "@/components/Link/Planes/Join/PinLinkCard";
import QRLinkCard from "@/components/Link/Planes/Join/QRLinkCard";
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
  Text,
  Image,
} from "react-native";
const wifiIcon = require("../../assets/images/wifi.png");

SplashScreen.preventAutoHideAsync();

export default function HomeScreen() {
  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = () => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 1500);
  };

  const listAvailablePlanes = () => {
    router.push("/availablePlanes");
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
      <LinkHeader />

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
        <View>
          <LinkHeaderCard />

          {/* NEW — WiFi Plane Linking Button */}
          <Pressable onPress={listAvailablePlanes} style={styles.button}>
            <View>
              <Text style={styles.buttonText}>Link with WiFi</Text>
              <Text style={styles.buttonSubtitle}>Search for nearby planes, through WiFi</Text>
            </View>
            <View>
              <Image source={wifiIcon} style={styles.wifi}></Image>
            </View>
          </Pressable>

          {/* You still have these join methods */}
          <PinLinkCard />
          <QRLinkCard />
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
  button: {
    marginHorizontal: 10,
    marginVertical: 5,
    paddingVertical: 30,
    paddingHorizontal: 30,
    borderRadius: 15,
    backgroundColor: "rgba(145, 72, 72, 0.5)",
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  buttonText: {
    color: "white",
    fontSize: 30,
    fontWeight: "bold",
    fontFamily: 'Coolvetica-Regular',
  },
  buttonSubtitle: {
    fontSize: 14,
    color: 'white',
    fontFamily: 'Coolvetica-Light',
  },
  wifi: {
    width: 45,
    height: 45,
  }
});
