import { Text, View, Pressable, StyleSheet } from "react-native";
import LogoutElement from "./LogoutElement";
import { router } from "expo-router";

export default function AeroduelHeader() {
  const signOut = () => {
    router.replace('/');
  }

  return (
    <View style={styles.aeroduelHeader}>
      <View style={styles.aeroduelTitle}>
        <Text style={styles.headerText}>Aeroduel</Text>
      </View>
      <Pressable onPress={signOut} style={styles.logoutBlock}>
        <LogoutElement />
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  aeroduelHeader: {
    display: "flex",
    flexDirection: "row",
    marginTop: 80,
    justifyContent: 'space-between',
    marginRight: 10,
  },
  aeroduelTitle: {

  },
  headerText: {
    fontFamily: "Coolvetica-Regular",
    fontSize: 35,
    color: "#FFFFFF",
    marginLeft: 20,
  },
  logoutBlock: {
    paddingRight: 2,
    paddingTop: 2,
  }
})