import {
  Alert,
  Pressable,
  StyleSheet,
  Text,
  useWindowDimensions,
  View,
  Image,
} from "react-native";
import { auth } from "../../../config/FirebaseConfig";
import { sendPasswordResetEmail } from "firebase/auth";
const pinIcon = require("../../../assets/images/pin.png");

export default function StatisticsHeaderCard() {
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

  return (
    <Pressable style={styles.duelContainer}>
      <View style={styles.duelContent}>
        <View style={styles.blockText}>
          <Text style={styles.blockHeader}>Reset Password</Text>
          <Text style={styles.blockSubtitle}>
            Verify your details, and reset your password
          </Text>
        </View>
        <View>
          <Image source={pinIcon} style={styles.pinIcon}></Image>
        </View>
      </View>
    </Pressable>
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
    fontFamily: "Coolvetica-Regular",
  },
  blockSubtitle: {
    color: "#FFFFFF",
    fontWeight: 300,
    width: 270,
    fontSize: 13,
    fontFamily: "Coolvetica-Light",
  },
  pinIcon: {
    width: 40,
    height: 40,
    marginTop: 3,
  }
});
