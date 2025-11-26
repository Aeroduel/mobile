import { useState } from "react";
import { Text, View, Image, StyleSheet, useWindowDimensions, Pressable } from "react-native";
const whitePlaneIcon = require("../assets/images/aeroduel-plane-white.png");
const startButton = require("../assets/images/start-match.png");
const startingButton = require("../assets/images/starting-btn.png");
const joinButton = require("../assets/images/join-btn.png");
const joiningButton = require("../assets/images/joining-btn.png");
import * as Haptics from 'expo-haptics';
import { router } from "expo-router";


export default function DuelCard() {
  const { width } = useWindowDimensions();
  const biggerDevice = width >= 439;

  const [joining, setJoining] = useState(joinButton);
  const [isPressed, setIsPressed] = useState(false);

  const changeImage = () => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
    const image = !isPressed;
    setJoining(image ? joinButton : joiningButton);
    setIsPressed(image);
  };

  const viewScoreboard = () => {
    router.push('/scoreboard')
  }
  
  return (
    <View style={styles.duelContainer}>
      <View style={styles.duelContent}>
        <View style={styles.blockText}>
          <Text style={styles.blockHeader}>Join a Match</Text>
          <Text style={styles.blockSubtitle}>
            Challenge Friends, Win Glory. Join with up to 3 players.
          </Text>
        </View>
        <Pressable onPress={viewScoreboard}>
          <Image source={whitePlaneIcon} style={biggerDevice ? styles.largeScreen : styles.smallScreen} />
        </Pressable>
      </View>
      <Pressable style={styles.buttonContainer} onPress={changeImage}>
        <Image source={joining} style={styles.startButton} />
        {/* Join match button here */}
      </Pressable>
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
    height: 170,
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
    width: 200,
    marginLeft: 10,
  },
  blockHeader: {
    color: "#FFFFFF",
    fontSize: 30,
    fontFamily: "Coolvetica-Regular",
  },
  blockSubtitle: {
    color: "#FFFFFF",
    fontWeight: "700",
    fontSize: 13,
  },
  whitePlaneIcon: {
    width: 80,
    height: 75,
  },
  buttonContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  startButton: {
    width: 200,
    height: 46,
    marginBottom: 20,
  },
  largeScreen: {
    width: 75,
    height: 70,
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    marginTop: 13,
    marginLeft: 80,
  },
  smallScreen: {
    width: 80,
    height: 75,
    marginTop: 15,
    marginLeft: 35,
  },
})
