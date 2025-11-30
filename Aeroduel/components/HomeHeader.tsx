import { Pressable, StyleSheet, Text, View } from "react-native";
import LogoutElement from "./LogoutElement";

export default function HomeHeader() {
  return (
    <View style={styles.homePageHeader}>
      <Text style={styles.headerText}>Welcome, [user]</Text>
      <Pressable style={styles.logoutBlock}>
        <LogoutElement />
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  homePageHeader: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 80,
  },
  headerText: {
    fontFamily: "Coolvetica-Regular",
    fontSize: 30,
    color: "#FFFFFF",
    marginLeft: 20,
  },
  logoutBlock: {},
});
