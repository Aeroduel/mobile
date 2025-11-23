import { LinearGradient } from "expo-linear-gradient";
import * as SplashScreen from "expo-splash-screen";
import {
  StyleSheet,
  View,
  Image,
  Text,
  Pressable,
  TextInput,
} from "react-native";
import { router } from "expo-router";
const AeroduelLogo = require("../assets/images/aeroduel-banner.png");
const google = require("../assets/images/google.png");
const facebook = require("../assets/images/facebook.png");

SplashScreen.preventAutoHideAsync();

export default function RegisterPage() {
  // route to the home screen for now
  const login = () => {
    router.push("/");
  };
  const routeToLogin = () => {
    router.push("/login");
  };

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
          <Text style={styles.redirectText}>
            Already have an account?
            <Pressable onPress={routeToLogin}>
              <Text style={[styles.redirectText, styles.here]}>Sign In</Text>
            </Pressable>
          </Text>
        </View>
        <View style={styles.loginForm}>
          <View style={styles.formHeaderText}>
            <Text style={styles.formHeading}>Get Started Free</Text>
            <Text style={styles.formSubtitle}>Jump into the Action</Text>
          </View>
          <View>
            <TextInput
              style={styles.textInput}
              autoCapitalize="none"
              placeholder="Name..."
              placeholderTextColor={"white"}
            ></TextInput>
            <TextInput
              style={styles.textInput}
              autoCapitalize="none"
              placeholder="Email..."
              placeholderTextColor={"white"}
            ></TextInput>
            <TextInput
              style={styles.textInput}
              autoCapitalize="none"
              placeholder="Password..."
              placeholderTextColor={"white"}
              secureTextEntry={true}
            ></TextInput>
            <Pressable onPress={login} style={styles.signInButton}>
              <LinearGradient
                colors={["#640000", "#dc0202ff"]}
                start={{ x: 1, y: 0 }}
                end={{ x: 1, y: 1 }}
                style={styles.buttonGradient}
              >
                <Text style={styles.signInText}>Create Account</Text>
              </LinearGradient>
            </Pressable>
          </View>
          <View style={styles.formOptions}>
            <Text style={styles.continueWith}>Or continue with</Text>
          </View>
          <View style={styles.authOptions}>
            <Pressable style={styles.googleButton}>
              <Image source={google} style={styles.googleIcon}></Image>
              <Text style={styles.google}>Google</Text>
            </Pressable>
            <Pressable style={styles.facebookButton}>
                <Image source={facebook} style={styles.facebookIcon}></Image>
                <Text style={styles.facebook}>Facebook</Text>
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
    alignItems: 'center',
    justifyContent: 'center',
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
    backgroundColor: "#944148",
    width: "100%",
    height: 650,
    position: "absolute",
    bottom: 0,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  formHeaderText: {
    alignItems: "center",
    marginVertical: 30,
  },
  signInRedirect: {
    backgroundColor: "#782d33",
    width: 380,
    height: 30,
    marginTop: 50,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    flexDirection: "row",
    display: 'flex',
  },
  redirectText: {
    color: "white",
    fontFamily: "Coolvetica-Regular",
    flexDirection: "row",
    marginHorizontal: "auto",
    paddingBottom: 11,
  },
  here: {
    marginLeft: 10,
    marginTop: 6,
  },
  formHeading: {
    fontSize: 40,
    fontWeight: "bold",
    color: "white",
    fontFamily: "Coolvetica-Regular",
  },
  formSubtitle: {
    fontFamily: "Coolvetica-Regular",
    color: "white",
    fontSize: 17,
    paddingTop: 10,
  },
  textInput: {
    backgroundColor: "rgba(169, 99, 105, 100)",
    paddingVertical: 20,
    paddingLeft: 20,
    marginHorizontal: 30,
    marginBottom: 20,
    borderRadius: 10,
    color: "white",
    fontFamily: "Coolvetica-Regular",
  },
  signInButton: {
    backgroundColor: "red",
    height: 60,
    overflow:'hidden',
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    marginHorizontal: 30,
    borderRadius: 10,
    opacity: 50,
  },
  signInText: {
    color: "white",
    fontFamily: "Coolvetica-Regular",
    fontSize: 17,
  },
  formOptions: {
    fontFamily: "Coolvetica-Regular",
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 20,
  },
  continueWith: {
    color: 'white',
    fontFamily: 'Coolvetica-Regular',
  },
  authOptions: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: "center",
    gap: 10,
  },
  google: {
    fontFamily: "Coolvetica-Regular",
    color: 'white',
  },
  googleButton: {
    flexDirection: 'row',
    alignItems: 'center',
    overflow: 'hidden',
    backgroundColor: "rgba(169, 99, 105, 100)",
    paddingVertical: 15,
    paddingHorizontal: 55,
    borderRadius: 10,
  },
  facebookButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: "rgba(169, 99, 105, 100)",
    paddingVertical: 15,
    paddingHorizontal: 45,
    borderRadius: 10,
    display: 'flex',
  },
  facebook: {
    fontFamily: "Coolvetica-Regular",
    color: 'white',
  },
  googleIcon: {
    width: 24,
    height: 24,
    marginRight: 8,
  },
  facebookIcon: {
    width: 30,
    height: 30,
    marginRight: 8,
  }
});

