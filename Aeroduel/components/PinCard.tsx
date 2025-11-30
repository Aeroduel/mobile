import { Image, StyleSheet, Text, View } from "react-native";
import PinInput from "../components/PinInput";
const joinArrow = require("../assets/images/arrow-right-white.png");

export default function PinJoin() {
  return (
    <View style={styles.pinContainer}>
      <View style={styles.topRow}>
        <View style={styles.blockText}>
          <Text style={styles.blockHeader}>Join By Pin</Text>
          <Text style={styles.blockSubtitle}>
            Enter your pin to connect to a match
          </Text>
        </View>
        <Image source={joinArrow} style={styles.joinArrows}></Image>
      </View>
      <View style={styles.pinInputBlock}>
        <PinInput />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  pinContainer: {
    backgroundColor: "rgba(145, 72, 72, 0.5)", // rgba to set opacity for background
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "column",
    height: 220,
    marginVertical: 5,
    marginHorizontal: 10,
    paddingHorizontal: 20,
    paddingTop: 35,
    borderRadius: 15,
    // Need to play with the shadow colors
    // shadowColor: '#512929ff',
    // shadowOffset: { width: 10, height: 10 },
    // shadowOpacity: 10,
    // shadowRadius: 5,
  },
  topRow: {
    flexDirection: "row",
  },
  blockText: {
    paddingTop: 10,
  },
  blockHeader: {
    color: "#FFFFFF",
    fontSize: 40,
    fontFamily: "Coolvetica-Regular",
  },
  blockSubtitle: {
    color: "#FFFFFF",
    fontWeight: "700",
  },
  joinArrows: {
    transform: [{ scale: 0.6 }],
    marginLeft: 20,
  },
  pinInputBlock: {
    display: "flex",
    alignItems: "center",
  },
});
