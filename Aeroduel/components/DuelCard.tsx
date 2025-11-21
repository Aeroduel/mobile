import { Text, View, Image, StyleSheet } from "react-native";
import whitePlaneIcon from "../assets/images/aeroduel-plane-white.png"
import MatchButtons from "./MatchButtons";

export default function DuelCard() {
  return (
    <View style={styles.duelContainer}>
      <View style={styles.topRow}>
        <View style={styles.blockText}>
          <Text style={styles.blockHeader}>Enter a Duel</Text>
          <Text style={styles.blockSubtitle}>
            Join with a QR code, or start a new match
          </Text>
        </View>
        <Image source={whitePlaneIcon} style={styles.whitePlaneIcon}></Image>
      </View>
      <View>
        <MatchButtons />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  duelContainer: {
    backgroundColor: "rgba(145, 72, 72, 0.5)", // rgba to set opacity for background
    marginLeft: 10,
    marginRight: 10,
    marginTop: 5,
    marginBottom: 5,
    paddingLeft: 20,
    paddingRight: 20,
    height: 220,
    borderRadius: 15,
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "column",
    paddingTop: 35,
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
  whitePlaneIcon: {
    width: 90,
    height: 90,
  },
})
