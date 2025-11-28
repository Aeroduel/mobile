import { Text, View, Pressable, StyleSheet, Image } from "react-native";
import { router } from "expo-router";
const whiteBackArrow = require("../assets/images/arrow-left-white.png");

export default function BackHeader() {
  const goBack = () => {
    router.replace('/settings')
  }

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
    justifyContent: 'space-between',
  },
  backText: {
    fontFamily: "Coolvetica-Regular",
    fontSize: 24,
    color: "white",
    marginLeft: 10,
  },
  backArrow: {
    width: 30,
    height: 30,
  },
  backContainer: {
    display: 'flex',
    flexDirection: 'row',
    marginLeft: 15,
  }
})