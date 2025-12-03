import { router } from "expo-router";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";
const whiteBackArrow = require("../assets/images/arrow-left-white.png");

export default function BackHeader() {
  // Route back to settings page
  const goBack = () => {
    router.replace("/settings");
  };

  return (
    <View style={styles.aeroduelHeader}>
      <Pressable onPress={goBack}>
        <View style={styles.backContainer}>
          <Image source={whiteBackArrow} style={styles.backArrow}></Image>
          <Text style={styles.backText}>Go Back</Text>
        </View>
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
  backText: {
    fontFamily: "Coolvetica-Light",
    fontSize: 24,
    color: "white",
    marginLeft: 10,
  },
  backArrow: {
    width: 30,
    height: 30,
  },
  backContainer: {
    display: "flex",
    flexDirection: "row",
    marginLeft: 15,
  },
});
