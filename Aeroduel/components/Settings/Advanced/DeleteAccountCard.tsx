import { StyleSheet, Text, useWindowDimensions, View, Image } from "react-native";
import { auth } from "../../../config/FirebaseConfig";
const brokenHeart = require("../../../assets/images/broken-heart.png");

export default function DeleteAccountCard() {
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
          <Text style={styles.blockHeader}>Delete Account</Text>
          <Text style={styles.blockSubtitle}>
            Delete your Aeroduel account
          </Text>
        </View>
        <View style={styles.blockText}>
          <Image source={brokenHeart} style={styles.brokenHeart}></Image>
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
    fontSize: 24,
    width: 260,
    fontFamily: "Coolvetica-Regular",
  },
  blockSubtitle: {
    color: "#FFFFFF",
    fontWeight: 300,
    fontSize: 13,
    fontFamily: "Coolvetica-Light",
  },
  brokenHeart: {
    height: 40,
    width: 40,
    marginTop: 3,
  }
});
