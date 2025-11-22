import { useFonts } from "expo-font";
import { LinearGradient } from "expo-linear-gradient";
import * as SplashScreen from "expo-splash-screen";
import { ScrollView, StyleSheet, View, Image, Text, Pressable } from "react-native";
import AeroduelLogo from "../assets/images/aeroduel-banner.png";
import { router } from "expo-router";

SplashScreen.preventAutoHideAsync();

export default function LoginPage() {

  // route to the home screen for now
  const login = () => {
    router.push('/')
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
          display: 'flex',
          justifyContent: "flex-start",
          position: "relative",
          alignItems: 'center',
        }}
      >
        <Pressable onPress={login}>
          <Image source={AeroduelLogo} style={styles.aeroduelLogo} />
        </Pressable>
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
  aeroduelLogo: {
    width: 360,
    height: 150,
    justifyContent: 'center',
    marginTop: 80,
  }
});
