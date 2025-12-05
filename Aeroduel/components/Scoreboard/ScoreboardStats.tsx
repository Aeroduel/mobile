import { Image, StyleSheet, Text, View } from "react-native";

export default function ScoreboardStats() {
  return (
    <View>
      <View style={styles.spectateContainer}>
        <View style={styles.matchLengthContainer}>
          <Text style={styles.matchLength}>00:00:00</Text>
        </View>
      </View>
      <View style={styles.playerContainer}>
        <View style={styles.player1}>
          <Text style={styles.playerTitle}>[ Player Name ]</Text>
        </View>
        <View style={styles.player2}>
          <Text style={styles.playerTitle}>[ Player Name ]</Text>
        </View>
      </View>
      <View style={styles.statsContainer}>
        <View style={styles.player1Stats}>
          <View>
            <Image></Image>
            <Text style={styles.statsText}>[ Hits ]</Text>
          </View>
          <View>
            <Image></Image>
            <Text style={styles.statsText}>[ Lives ]</Text>
          </View>
          <View>
            <Image></Image>
            <Text style={styles.statsText}>[ Points ]</Text>
          </View>
        </View>
        <View style={styles.player2Stats}>
          <View>
            <Image></Image>
            <Text style={styles.statsText}>[ Hits ]</Text>
          </View>
          <View>
            <Image></Image>
            <Text style={styles.statsText}>[ Lives ]</Text>
          </View>
          <View>
            <Image></Image>
            <Text style={styles.statsText}>[ Points ]</Text>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  spectateContainer: {
    backgroundColor: "rgba(145, 72, 72, 0.5)", // rgba to set opacity for background
    marginHorizontal: 10,
    marginVertical: 5,
    paddingHorizontal: 20,
    height: 80,
    borderRadius: 15,
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    paddingTop: 0,
    // Need to play with the shadow colors
    // shadowColor: '#512929ff',
    // shadowOffset: { width: 10, height: 10 },
    // shadowOpacity: 10,
    // shadowRadius: 5,
  },
  matchLengthContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  matchLength: {
    color: "white",
    fontWeight: "bold",
    fontSize: 36,
  },
  playerContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-evenly",
    flexDirection: "row",
    paddingTop: 5,
  },
  player1: {
    backgroundColor: "rgba(145, 72, 72, 0.5)", // rgba to set opacity for background
    paddingHorizontal: 41,
    paddingVertical: 24,
    borderRadius: 15,
    width: 180,
  },
  player2: {
    backgroundColor: "rgba(145, 72, 72, 0.5)", // rgba to set opacity for background
    paddingHorizontal: 41,
    paddingVertical: 24,
    borderRadius: 15,
    width: 180,
  },
  playerTitle: {
    color: "white",
    fontFamily: "Coolvetica-Regular",
    fontSize: 15,
    justifyContent: "center",
    alignItems: "center",
  },
  statsContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
    paddingTop: 10,
  },
  player1Stats: {
    backgroundColor: "rgba(145, 72, 72, 0.5)", // rgba to set opacity for background
    width: 180,
    height: 180,
    borderRadius: 15,
    flexDirection: "column",
    justifyContent: "space-evenly",
    paddingLeft: 15,
  },
  player2Stats: {
    backgroundColor: "rgba(145, 72, 72, 0.5)", // rgba to set opacity for background
    width: 180,
    height: 180,
    borderRadius: 15,
    flexDirection: "column",
    justifyContent: "space-evenly",
    paddingLeft: 15,
  },
  statsText: {
    color: "white",
    fontFamily: "Coolvetica-Regular",
    fontSize: 25,
  },
});
