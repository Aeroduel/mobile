import { router } from "expo-router";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";
const logoutIcon = require("../../assets/images/logout-icon-white.png");

export default function LogoutElement() {
  // Route back to the login page
  const logout = () => {
    router.replace("/login");
  };

  return (
    <View style={styles.logoutContainer}>
      <Pressable onPress={logout} style={styles.logoutPressable}>
        <Text style={styles.logoutText}>Logout</Text>
        <Image source={logoutIcon} style={styles.logoutIcon}></Image>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  logoutContainer: {
    paddingRight: 15,
  },
  logoutPressable: {
    flexDirection: "row",
  },
  logoutText: {
    color: "white",
    fontSize: 20,
    marginTop: 9,
    marginLeft: 30,
    fontFamily: 'Coolvetica-Light',
  },
  logoutIcon: {
    width: 25,
    height: 25,
    marginTop: 10,
    marginLeft: 7,
  },
});
