// import * as Haptics from 'expo-haptics';
// import { useState } from "react";
import {
  Image,
  StyleSheet,
  Text,
  useWindowDimensions,
  View,
} from "react-native";
const whitePlaneIcon = require("../assets/images/plane-white.png");

export default function StatisticsCard() {
  // Declare window dimensions
  const { width } = useWindowDimensions();
  const biggerDevice = width >= 439;

  return (
    <View style={styles.duelContainer}>
      <View style={styles.duelContent}>
        <View style={styles.blockText}>
          <Text style={styles.blockHeader}>Match Statistics</Text>
          <Text style={styles.blockSubtitle}>
            View the statistics of your past matches.
          </Text>
        </View>
        {/* <View>
          <Image
            source={whitePlaneIcon}
            style={biggerDevice ? styles.largeScreen : styles.smallScreen}
          />
        </View> */}
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
    height: 110,
    borderRadius: 15,
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
  },
  duelContent: {
    flexDirection: "row",
  },
  blockText: {
    width: 300,
    marginLeft: 10,
  },
  blockHeader: {
    color: "#FFFFFF",
    fontSize: 30,
    fontFamily: "Coolvetica-Regular",
  },
  blockSubtitle: {
    color: "#FFFFFF",
    fontWeight: 300,
    fontSize: 13,
    marginBottom: 10,
  },
  // largeScreen: {
  //   width: 75,
  //   height: 70,
  //   display: "flex",
  //   justifyContent: "flex-end",
  //   alignItems: "flex-end",
  //   marginTop: 13,
  //   marginLeft: 80,
  // },
  // smallScreen: {
  //   width: 80,
  //   height: 75,
  //   marginTop: 15,
  //   marginLeft: 15,
  // },
});
