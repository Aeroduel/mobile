import { useState } from "react";
import {
  Alert,
  Image,
  Pressable,
  StyleSheet,
  Text,
  useWindowDimensions,
  View,
} from "react-native";
import { auth } from "../config/FirebaseConfig";
const userPlaceholder = require("../assets/images/user.png");

export default function StatisticsCard() {
  // Declare window dimensions
  const { width } = useWindowDimensions();
  const biggerDevice = width >= 439;

  const [profilePicture, setProfilePicture] = useState(userPlaceholder);

  // Check if the current user does not exist
  if (!auth.currentUser) {
    return;
  }

  const alertImage = () => {
    Alert.alert(
      "Open Camera Roll",
      "Camera roll needs to open to select an image (needs implemented)"
    );
  };

  // Set the user to the current user from auth to access properties
  const user = auth.currentUser;

  return (
    <View style={styles.duelContainer}>
      <View style={styles.duelContent}>
        <View style={styles.blockText}>
          <Text style={styles.blockHeader}>{auth.currentUser.displayName}</Text>
          <Text style={styles.blockSubtitle}>{user.email}</Text>
          <View style={styles.onlineStatus}>
            <View style={styles.userStatus}></View>
            <Text style={styles.onlineText}>Online</Text>
          </View>
        </View>
        <View style={styles.imageContainer}>
          <Pressable onPress={alertImage}>
            <Image source={profilePicture} style={styles.userImage} />
          </Pressable>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  duelContainer: {
    backgroundColor: "rgba(145, 72, 72, 0.5)", // rgba to set opacity for background
    marginHorizontal: 10,
    marginVertical: 5,
    paddingHorizontal: 20,
    height: 110,
    borderRadius: 15,
    display: "flex",
    justifyContent: "center",
  },
  duelContent: {
    flexDirection: "row",
  },
  blockText: {
    width: 220,
    marginLeft: 10,
    paddingBottom: 10,
  },
  blockHeader: {
    color: "#FFFFFF",
    fontSize: 30,
    fontFamily: "Coolvetica-Regular",
  },
  blockSubtitle: {
    color: "#FFFFFF",
    fontWeight: 200,
    fontSize: 13,
    paddingTop: 3,
    fontFamily: "Coolvetica-Light",
  },
  onlineText: {
    color: "#FFFFFF",
    fontWeight: 200,
    fontSize: 13,
    paddingTop: 2,
    fontFamily: "Coolvetica-Light",
  },
  whitePlaneIcon: {
    width: 80,
    height: 75,
  },
  startButton: {
    width: 200,
    height: 46,
    marginBottom: 20,
  },
  onlineStatus: {
    display: "flex",
    flexDirection: "row",
    gap: 5,
    paddingTop: 5,
  },
  userStatus: {
    backgroundColor: "#1aff00ff",
    height: 8,
    width: 8,
    borderRadius: "100%",
    marginTop: 6,
  },
  userImage: {
    width: 60,
    height: 60,
    marginLeft: 30,
  },
  imageContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
});
