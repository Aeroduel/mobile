import { Text, View, Image, StyleSheet } from "react-native";
import joinArrow from "../assets/images/arrow-right-white.png";
import PinInput from "../components/PinInput";

export default function PinJoin() {
  return (
    <View style={styles.pinContainer}>
      <View style={styles.topRow}>
        <View style={styles.blockText}>
          <Text style={styles.blockHeader}>Join By Pin</Text>
          <Text style={styles.blockSubtitle}>
            Enter your pin below to connect to a match
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
    justifyContent: 'space-between',
    flexDirection: "column",
    height: 220,
    marginTop: 5,
    marginBottom: 5,
    marginLeft: 10,
    marginRight: 10,
    paddingTop: 35,
    paddingLeft: 20,
    paddingRight: 20,
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
    marginLeft: 10,
  },
  pinInputBlock: {
    display: "flex",
    alignItems: "center",
  },
});
