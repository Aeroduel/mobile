import { router } from "expo-router";
import { Pressable, StyleSheet, Text, View, Image } from "react-native";
const backArrow = require("../../assets/images/arrow-left-white.png");

export default function AdvancedHeader() {

  // Back to the settings page
  const goBack = () => {
    router.replace('/settings');
  }

  return (
    <View style={styles.aeroduelHeader}>
      <Pressable onPress={goBack}>
        <Image source={backArrow} style={styles.backArrow}></Image>
      </Pressable>
      <Pressable>
        <Text style={styles.headerText}>Appearance</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  aeroduelHeader: {
    display: "flex",
    flexDirection: "row",
    marginTop: 80,
    justifyContent: "flex-start",
  },
  headerText: {
    fontFamily: "Xirod",
    fontSize: 24,
    color: "#FFFFFF",
    marginLeft: 10,
    marginTop: 7,
  },
  backArrow: {
    width: 35,
    height: 35,
    marginTop: 3,
    marginLeft: 10,
  }
});
