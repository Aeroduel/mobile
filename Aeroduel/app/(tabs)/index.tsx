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
import logout from "../../assets/images/log-out.png";

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
          <View style={styles.logoutContainer}>
            <Text style={styles.logoutText}>Logout</Text>
            <Image source={logout} style={styles.logoutIcon}></Image>
          </View>
        </View>
        <View>
          <View style={styles.enterDuel}>
            <View style={styles.topRow}>
              <View style={styles.blockText}>
                <Text style={styles.blockHeader}>Enter the Duel</Text>
                <Text style={styles.blockSubtitle}>
                  Join with a QR code, or start a new match
                </Text>
              </View>
              <Image
                source={whitePlaneIcon}
                style={styles.whitePlaneIcon}
              ></Image>
            </View>
            <View style={styles.bottomRow}>
              <Pressable style={styles.joinButton} onPress={joinMatch}>
                <Text style={styles.buttonText}>Join Match</Text>
              </Pressable>
              <Pressable style={styles.startButton}>
                <Text style={styles.buttonText}>Start Match</Text>
              </Pressable>
            </View>
          </View>
          <View style={styles.enterDuel}>
            <View style={styles.topRow}>
              <View style={styles.blockText}>
                <Text style={styles.blockHeader}>Spectate</Text>
                <Text style={styles.blockSubtitle}>
                  View the scoreboards of ongoing duels
                </Text>
              </View>
              {/* <Image (Need to get a higher quality icon)
              source={eye}
              style={styles.eyeIcon}
            ></Image> */}
            </View>
            <View style={styles.bottomRow}>
              <Pressable style={styles.qrButton}>
                <Text style={styles.buttonText}>Join with QR</Text>
              </Pressable>
              <Pressable style={styles.pinButton}>
                <Text style={styles.buttonText}>Enter Pin</Text>
              </Pressable>
            </View>
          </View>
          <View style={styles.enterDuel}>
            <View style={styles.topRow}>
              <View style={styles.blockText}>
                <Text style={styles.blockHeader}>Latest News</Text>
                <Text style={styles.blockSubtitle}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla scelerisque sapien ligula, accumsan lectus tincidunt quis. Sed faucibus laoreet nibh, ac euismod metus molestie. Dolor sit amet, consectetur adipisc
                </Text>
              </View>
            </View>
          </View>
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
  logoutText: {
    color: "#FFFFFF",
    fontSize: 20,
    marginTop: 10,
    marginLeft: 65,
    fontWeight: "bold",
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
  logoutContainer: {
    display: "flex",
    flexDirection: "row",
    marginLeft: 24,
  },
  logoutIcon: {
    width: 25,
    height: 25,
    marginTop: 9,
    marginLeft: 5,
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
