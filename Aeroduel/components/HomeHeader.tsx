import { Text, View, Pressable, StyleSheet } from "react-native";
import LogoutElement from "./LogoutElement";
import { router } from "expo-router";

export default function HomeHeader() {
  const signOut = () => {
    router.replace('/');
  }

  return (
    <View style={styles.homePageHeader}>
      <Text style={styles.headerText}>Welcome, [user]</Text>
      <Pressable onPress={signOut}>
        <LogoutElement />
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
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
})
