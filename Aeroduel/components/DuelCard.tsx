import * as Haptics from "expo-haptics";
import { router } from "expo-router";
import { useState } from "react";
import {
  Image,
  Pressable,
  StyleSheet,
  Text,
  useWindowDimensions,
  View,
} from "react-native";
const joinButton = require("../assets/images/join-btn.png");
const joiningButton = require("../assets/images/joining-btn.png");
const whiteCrosshair = require("../assets/images/crosshair-white.png");

export default function DuelCard() {
  // Declare window dimensions
  const { width } = useWindowDimensions();
  const biggerDevice = width >= 439;

  const [joining, setJoining] = useState(joinButton);
  const [isPressed, setIsPressed] = useState(false);

  // const changeImage = () => {
  //   Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
  //   const image = !isPressed;
  //   setJoining(image ? joinButton : joiningButton);
  //   setIsPressed(image);
  // };

  const viewScoreboard = () => {
    router.push("/scoreboard");
  };

  return (
    <View style={styles.duelContainer}>
      <View style={styles.duelContent}>
        <View style={styles.blockText}>
          <Text style={styles.blockHeader}>Join a Match</Text>
          <Text style={styles.blockSubtitle}>
            The next generation of flight combat
          </Text>
          <Text style={[styles.blockSubtitle, styles.partySize]}>
            Join with your friends, or enemies.
          </Text>
        </View>
        <View style={styles.crosshairContainer}>
          <Image source={whiteCrosshair}></Image>
        </View>
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
    height: 115,
    borderRadius: 15,
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "column",
    paddingTop: 0,
    // Need to play with the shadow colors
    // shadowColor: '#512929ff',
    // shadowOffset: { width: 10, height: 10 },
    // shadowOpacity: 10,
    // shadowRadius: 5,
  },
  duelContent: {
    flexDirection: "row",
  },
  blockText: {
    paddingTop: 15,
    width: 270,
    marginLeft: 10,
  },
  blockHeader: {
    color: "#FFFFFF",
    fontSize: 30,
    fontFamily: "Coolvetica-Regular",
  },
  blockSubtitle: {
    color: "#FFFFFF",
    fontFamily: 'Coolvetica-Light',
    fontSize: 15,
  },
  // whitePlaneIcon: {
  //   width: 80,
  //   height: 75,
  // },
  buttonContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  startButton: {
    width: 200,
    height: 46,
    marginBottom: 15,
  },
  partySize: {
    paddingTop: 2,
  },
  largeScreen: {
    width: 75,
    height: 70,
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "flex-end",
    marginTop: 13,
    marginLeft: 80,
  },
  smallScreen: {
    width: 80,
    height: 75,
    marginTop: 15,
    marginLeft: 35,
  },
  crosshairContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  }
});
