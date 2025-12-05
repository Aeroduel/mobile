import { router } from "expo-router";
import { Pressable, StyleSheet, Text, View } from "react-native";
import LogoutElement from './LogoutElement';

export default function AeroduelHeader() {
  // Sign out
  const signOut = () => {
    router.replace("/");
  };

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
    justifyContent: "space-between",
  },
  headerText: {
    fontFamily: "Xirod",
    fontSize: 24,
    color: "#FFFFFF",
    marginLeft: 20,
    marginTop: 7,
  },
});
