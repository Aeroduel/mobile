import { LinearGradient } from "expo-linear-gradient";
import { router } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import {
  Alert,
  Image,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
const AeroduelLogo = require("../assets/images/aeroduel-banner.png");

SplashScreen.preventAutoHideAsync();

export default function ForgotPassword() {
  // route to the home screen for now
  const routeToLogin = () => {
    router.push("/login");
  };

  const emailSent = () => {
    Alert.alert(
      "Success!",
      "Check your inbox to reset your password"
    )
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
        <Pressable>
          <Image source={AeroduelLogo} style={styles.aeroduelLogo} />
        </Pressable>
        <View style={styles.signInRedirect}>
            <Pressable onPress={routeToLogin} style={styles.redirectButton}>
              <Text style={styles.redirectText}>Remember your password? Sign in Here</Text>
            </Pressable>
        </View>
        <View style={styles.loginForm}>
          <View style={styles.formHeaderText}>
            <Text style={styles.formHeading}>Recover Your Password</Text>
            <Text style={styles.formSubtitle}>Enter your details below</Text>
          </View>
          <View>
            <TextInput
              style={styles.textInput}
              autoCapitalize="none"
              placeholder="Email..."
              placeholderTextColor={"white"}
            ></TextInput>
            <Pressable style={styles.signInButton} onPress={emailSent}>
              <LinearGradient
                colors={["#640000", "#dc0202ff"]}
                start={{ x: 1, y: 0 }}
                end={{ x: 1, y: 1 }}
                style={styles.buttonGradient}
              >
                <Text style={styles.signInText}>Recover</Text>
              </LinearGradient>
            </Pressable>
          </View>
        </View>
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
  buttonGradient: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
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
    display: "flex",
  },
  loginForm: {
    backgroundColor: "rgba(255, 255, 255, 0.1)",
    width: "100%",
    height: 570,
    position: "absolute",
    bottom: 0,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  formHeaderText: {
    alignItems: "center",
    marginVertical: 30,
  },
  redirectButton: {
    borderRadius: 5,
  },
  redirectText: {
    color: "white",
    fontFamily: "Coolvetica-Light",
    flexDirection: "row",
  },
  formHeading: {
    fontSize: 34,
    fontWeight: "bold",
    color: "white",
    fontFamily: "Coolvetica-Regular",
  },
  formSubtitle: {
    fontFamily: "Coolvetica-Light",
    color: "white",
    fontSize: 17,
    paddingTop: 10,
  },
  textInput: {
    backgroundColor: "rgba(169, 99, 105, 100)",
    paddingVertical: 10,
    paddingLeft: 20,
    marginHorizontal: 30,
    marginBottom: 20,
    borderRadius: 10,
    color: "white",
    fontFamily: "Coolvetica-Light",
    fontSize: 18,
  },
  signInButton: {
    backgroundColor: "red",
    height: 60,
    overflow: "hidden",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    marginHorizontal: 30,
    borderRadius: 10,
    opacity: 50,
  },
  signInRedirect: {
    backgroundColor: "rgba(255, 255, 255, 0.2)",
    width: 360,
    height: 40,
    marginTop: 12,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    flexDirection: "row",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  signInText: {
    color: "white",
    fontFamily: "Coolvetica-Regular",
    fontSize: 17,
  },
  here: {
    marginLeft: 10,
  },
});
