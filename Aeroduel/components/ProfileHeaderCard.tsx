import { auth } from "../config/FirebaseConfig";
import {
  Image,
  StyleSheet,
  Text,
  useWindowDimensions,
  View,
} from "react-native";
const userPlaceholder = require("../assets/images/user-round-white.png");

export default function StatisticsCard() {
  // Declare window dimensions
  const { width } = useWindowDimensions();
  const biggerDevice = width >= 439;

  // Check if the current user does not exist
  if (!auth.currentUser) {
    return
  }

  // Set the user to the current user from auth
  const user = auth.currentUser;

  return (
    <View style={styles.duelContainer}>
      <View style={styles.duelContent}>
        <View style={styles.blockText}>
          <Text style={styles.blockHeader}>{auth.currentUser.displayName}</Text>
          <Text style={styles.blockSubtitle}>
            {user.email}
          </Text>
        </View>
        <View>
          <Image
            source={userPlaceholder}
            style={biggerDevice ? styles.largeScreen : styles.smallScreen}
          />
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
    height: 110,
    borderRadius: 15,
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
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
    width: 220,
    marginLeft: 10,
  },
  blockHeader: {
    color: "#FFFFFF",
    fontSize: 30,
    fontFamily: "Coolvetica-Regular",
  },
  blockSubtitle: {
    color: "#FFFFFF",
    fontWeight: 200,
    fontSize: 12,
    paddingTop: 3,
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
  largeScreen: {
    width: 65,
    height: 60,
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "flex-end",
    marginTop: 13,
    marginLeft: 80,
  },
  smallScreen: {
    width: 70,
    height: 65,
    marginLeft: 20,
  },
});
