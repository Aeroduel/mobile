import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { router } from 'expo-router';
import { LinearGradient } from "expo-linear-gradient";
import { useEffect } from "react";
import {
  Image,
  Pressable,
  StyleSheet,
  Text,
  View,
  ScrollView,
} from "react-native";
import whitePlaneIcon from "../../assets/images/aeroduel-plane-white.png";
import MatchButtons from '../../components/MatchButtons';
import LogoutElement from "@/components/LogoutElement";
import DuelCard from "@/components/DuelCard";
import SpectateCard from "@/components/SpectateCard";
import NewsCard from "@/components/NewsCard";


SplashScreen.preventAutoHideAsync();

export default function HomeScreen() {
  const [fontsLoaded] = useFonts({
    "Coolvetica-Regular": require("../../assets/fonts/coolvetica-regular.otf"),
  });

  useEffect(() => {
    if (fontsLoaded) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  // Sign Out
  // const signOut = () => {
  //   router.replace('/auth')
  // }

  // Event Handler
  // onPress={signOut}

  const joinMatch = () => {
    router.push('/join')
  }

  return (
    <View style={{ flex: 1 }}>
      <LinearGradient
        colors={["#000000", "#FF0000"]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={styles.backgroundGradient}
      ></LinearGradient>
      <ScrollView
        contentContainerStyle={{
          flexGrow: 1,
          justifyContent: "flex-start",
          position: "relative",
        }}
      >
        <View style={styles.homePageHeader}>
          <Text style={styles.headerText}>Welcome, [user]</Text>
          <LogoutElement />
        </View>
        <View>
          <DuelCard />
          <SpectateCard />
          <NewsCard />
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
  homePageHeader: {
    display: "flex",
    flexDirection: "row",
    marginTop: 80,
  },
  headerText: {
    fontFamily: "Coolvetica-Regular",
    fontSize: 35,
    color: "#FFFFFF",
    marginLeft: 20,
  },
  backgroundGradient: {
    position: "absolute",
    width: "100%",
    height: "100%",
  },
  topRow: {
    flexDirection: "row",
  },
  bottomRow: {
    display: "flex",
    flexDirection: "row",
    gap: 7,
    justifyContent: "center",
    paddingBottom: 10,
  },
  blockText: {
    paddingTop: 10,
  },
  blockHeader: {
    color: "#FFFFFF",
    fontSize: 40,
    fontFamily: "Coolvetica-Regular",
  },
  blockSubtitle: {
    color: "#FFFFFF",
    fontWeight: "700",
  },
  enterDuel: {
    backgroundColor: "#595959ff",
    opacity: 100,
    marginLeft: 10,
    marginRight: 10,
    marginTop: 5,
    marginBottom: 5,
    paddingLeft: 20,
    paddingRight: 20,
    height: 220,
    borderRadius: 15,
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "column",
    paddingTop: 35,
  },
  whitePlaneIcon: {
    width: 90,
    height: 90,
  },
  eyeIcon: {
    width: 100,
    height: 100,
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 20,
  },
  joinButton: {
    backgroundColor: "#333333ff",
    paddingHorizontal: 45,
    paddingVertical: 20,
    borderBottomLeftRadius: 15,
  },
  startButton: {
    backgroundColor: "#333333ff",
    paddingHorizontal: 45,
    paddingVertical: 20,
    borderBottomRightRadius: 15,
  },
  qrButton: {
    backgroundColor: "#333333ff",
    paddingHorizontal: 35,
    paddingVertical: 20,
    borderBottomLeftRadius: 15,
  },
  pinButton: {
    backgroundColor: "#333333ff",
    paddingHorizontal: 55,
    paddingVertical: 20,
    borderBottomRightRadius: 15,
  },
});