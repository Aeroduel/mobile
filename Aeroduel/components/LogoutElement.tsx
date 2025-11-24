import { router } from "expo-router";
import { Text, View, Image, StyleSheet, Pressable } from "react-native";
const logoutIcon = require("../assets/images/logout-icon-white.png");

export default function LogoutElement() {
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
    display: "flex",
    paddingRight: 15,
  },
  logoutPressable: {
    flexDirection: 'row',
  },
  logoutText: {
    color: "#FFFFFF",
    fontSize: 20,
    marginTop: 10,
    marginLeft: 30,
    fontWeight: "bold",
  },
  logoutIcon: {
    width: 25,
    height: 25,
    marginTop: 10,
    marginLeft: 7,
  },
});
