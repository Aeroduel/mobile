import { Text, View, Pressable, StyleSheet } from "react-native";
import LogoutElement from "./LogoutElement";
import { router } from "expo-router";

export default function AeroduelHeader() {
  const signOut = () => {
    router.replace('/');
  }
  const goHome = () => {
    router.replace('/index')
  }

  return (
    <View style={styles.aeroduelHeader}>
      <Pressable>
        <Text style={styles.headerText}>Aeroduel</Text>
      </Pressable>
      <Pressable onPress={signOut}>
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
  },
  headerText: {
    fontFamily: "Coolvetica-Regular",
    fontSize: 30,
    color: "#FFFFFF",
    marginLeft: 20,
  },
})