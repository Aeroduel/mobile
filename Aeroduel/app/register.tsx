import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { LinearGradient } from "expo-linear-gradient";
import { router } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useState } from "react";
import {
  Alert,
  Image,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import { auth } from "../config/FirebaseConfig";
const AeroduelLogo = require("../assets/images/aeroduel-banner.png");
const google = require("../assets/images/google.png");
const facebook = require("../assets/images/facebook.png");

SplashScreen.preventAutoHideAsync();

export default function RegisterPage() {
  // Push to login page
  const routeToLogin = () => {
    router.replace("/login");
  };

  // State variables and setters for email, name, and password
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  // Creates an account in Firebase
  const createAccount = async () => {
    try {
      const userCredentials = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      // Set the user's display name
      await updateProfile(userCredentials.user, {
        displayName: name,
      });
      // If the user is already registered, re-route to "tabs"
      if (userCredentials) {
        router.replace("/(tabs)");
      }
    } catch (error: any) {
      // Log error
      console.error(error);
      Alert.alert("Account Creation Failed", "Please provide your name, email address, and password to continue");
    }
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
        <Image source={AeroduelLogo} style={styles.aeroduelLogo} />
        <View style={styles.signInRedirect}>
          <Pressable onPress={routeToLogin}>
            <Text style={styles.redirectText}>
              Already have an account? Sign in Here
            </Text>
          </Pressable>
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
              value={name}
              onChangeText={(text) => setName(text)}
            ></TextInput>
            <TextInput
              style={styles.textInput}
              autoCapitalize="none"
              placeholder="Email..."
              placeholderTextColor={"white"}
              value={email}
              onChangeText={(text) => setEmail(text)}
            ></TextInput>
            <TextInput
              style={styles.textInput}
              autoCapitalize="none"
              placeholder="Password..."
              placeholderTextColor={"white"}
              secureTextEntry={true}
              value={password}
              onChangeText={(text) => setPassword(text)}
            ></TextInput>
            <Pressable onPress={createAccount} style={styles.signInButton}>
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
    fontWeight: 'light',
    flexDirection: "row",
  },
  formHeading: {
    fontSize: 40,
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
    paddingVertical: 15,
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
    marginTop: 15,
  },
  formOptions: {
    fontFamily: "Coolvetica-Regular",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 20,
  },
  continueWith: {
    color: "white",
    fontFamily: "Coolvetica-Light",
  },
  authOptions: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    gap: 10,
  },
  google: {
    fontFamily: "Coolvetica-Regular",
    color: "white",
  },
  googleButton: {
    flexDirection: "row",
    alignItems: "center",
    overflow: "hidden",
    backgroundColor: "rgba(169, 99, 105, 100)",
    paddingVertical: 10,
    paddingHorizontal: 55,
    borderRadius: 10,
  },
  facebookButton: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "rgba(169, 99, 105, 100)",
    paddingVertical: 10,
    paddingHorizontal: 45,
    borderRadius: 10,
    display: "flex",
  },
  facebook: {
    fontFamily: "Coolvetica-Regular",
    color: "white",
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
  },
});
