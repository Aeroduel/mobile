import { useFonts } from "expo-font";
import { LinearGradient } from "expo-linear-gradient";
import * as SplashScreen from "expo-splash-screen";
import {
  ScrollView,
  StyleSheet,
  View,
  Image,
  Text,
  Pressable,
} from "react-native";
import AeroduelLogo from "../assets/images/aeroduel-banner.png";
import { router } from "expo-router";

SplashScreen.preventAutoHideAsync();

export default function RegisterPage() {
  // route to the home screen for now
  const login = () => {
    router.push("/");
  };
  const routeToLogin = () => {
    router.push('/login');
  }

  return (
    <View style={{ flex: 1 }}>
      <LinearGradient
        colors={["#000000", "#FF0000"]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={styles.backgroundGradient}
      ></LinearGradient>
      <View style={styles.loginContainer}>
        <Pressable onPress={login}>
          <Image source={AeroduelLogo} style={styles.aeroduelLogo} />
        </Pressable>
        <View style={styles.signInRedirect}>
          <Text style={styles.redirectText}>Already have an account? Sign in
            <Pressable onPress={routeToLogin}>
              <Text style={[styles.redirectText, styles.here]}>here</Text>
            </Pressable>
          </Text>
        </View>
        <View style={styles.loginForm}></View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  backgroundGradient: {
    position: "absolute",
    width: "100%",
    height: "100%",
  },
  aeroduelLogo: {
    width: 360,
    height: 150,
    justifyContent: "center",
    marginTop: 80,
  },
  loginContainer: {
    flexGrow: 1,
    alignItems: "center",
    display: 'flex',
  },
  signInRedirect: {
    backgroundColor: '#782d33',
    width: 380,
    height: 45,
    marginTop: 30,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    flexDirection: 'row',
  },
  loginForm: {
    backgroundColor: "#944148",
    width: "100%",
    height: 650,
    position: "absolute",
    bottom: 0,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
  redirectText: {
    color: 'white',
    fontFamily: 'Coolvetica-Regular',
    flexDirection: 'row',
    marginHorizontal:'auto',
    paddingBottom: 15,
  },
  here: {
    marginLeft: 4,
    lineHeight: 50,
  }
});
