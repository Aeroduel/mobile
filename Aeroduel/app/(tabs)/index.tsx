import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
// import { router } from 'expo-router';
import { LinearGradient } from "expo-linear-gradient";
import { useEffect } from "react";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";
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

  return (
    <View style={styles.container}>
      <LinearGradient
        colors={["#000000", "#FF0000"]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={styles.backgroundGradient}
      ></LinearGradient>
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
          <View style={styles.blockButtons}>
            <Pressable style={styles.joinButton}>
              <Text style={styles.buttonText}>Join Match</Text>
            </Pressable>
            <Pressable style={styles.startButton}>
              <Text style={styles.buttonText}>Start Match</Text>
            </Pressable>
          </View>
        </View>
        <View></View>
      </View>
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
    flexDirection: 'row',
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
  blockButtons: {
    display: 'flex',
    flexDirection: 'row',
    gap: 7,
    justifyContent: 'center',
    paddingBottom: 10,
  },
  logoutContainer: {
    display: "flex",
    flexDirection: "row",
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
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20,
  },
  joinButton: {
    backgroundColor: '#333333ff',
    paddingHorizontal: 45,
    paddingVertical: 20,
    borderBottomLeftRadius: 15,
  },
  startButton: {
    backgroundColor: '#333333ff',
    paddingHorizontal: 45,
    paddingVertical: 20,
    borderBottomRightRadius: 15,
  }
});
