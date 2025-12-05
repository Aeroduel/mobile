import { StyleSheet, Text, useWindowDimensions, View } from "react-native";
import { auth } from "../config/FirebaseConfig";

export default function LinkHeaderCard() {
  // Declare window dimensions
  const { width } = useWindowDimensions();
  const biggerDevice = width >= 439;

  // Check if the current user does not exist
  if (!auth.currentUser) {
    return;
  }

  if (!auth.currentUser.displayName) {
    return;
  }

  // Set the user to the current user from auth to access properties
  const userName = auth.currentUser.displayName.split(" ")[0];

  return (
    <View style={styles.duelContainer}>
      <View style={styles.duelContent}>
        <View style={styles.blockText}>
          <Text style={styles.blockHeader}>
            View the statistics of past matches.
          </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  duelContainer: {
    backgroundColor: "rgba(145, 72, 72, 0.5)", // rgba to set opacity for background
    marginHorizontal: 10,
    marginBottom: 5,
    marginTop: 10,
    paddingLeft: 20,
    paddingVertical: 20,
    borderRadius: 15,
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
  },
  duelContent: {
    flexDirection: "row",
  },
  blockText: {
    marginLeft: 10,
  },
  blockHeader: {
    color: "#FFFFFF",
    fontSize: 18,
    fontFamily: "Coolvetica-Light",
  },
  blockSubtitle: {
    color: "#FFFFFF",
    fontWeight: 300,
    fontSize: 13,
    fontFamily: "Coolvetica-Light",
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
