import { Text, View, Pressable, StyleSheet } from "react-native";
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
    justifyContent: 'space-between',
    marginTop: 80,
  },
  headerText: {
    fontFamily: "Coolvetica-Regular",
    fontSize: 35,
    color: "#FFFFFF",
    marginLeft: 20,
  },
  logoutBlock: {
    paddingRight: 12,
    paddingTop: 2,
  }
})
