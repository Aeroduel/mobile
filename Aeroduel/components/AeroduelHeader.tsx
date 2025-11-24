import { Text, View, Pressable, StyleSheet } from "react-native";
import LogoutElement from "./LogoutElement";
import { router } from "expo-router";

export default function AeroduelHeader() {
  const signOut = () => {
    router.replace('/');
  }

  return (
    <View style={styles.aeroduelHeader}>
      <View>
        <Text style={styles.headerText}>Aeroduel</Text>
      </View>
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