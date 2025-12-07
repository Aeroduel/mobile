import {
  StyleSheet,
  Text,
  useWindowDimensions,
  View,
} from "react-native";
import { auth } from "../../config/FirebaseConfig";

export default function AccountCreationDateCard() {
  // Declare window dimensions
  const { width } = useWindowDimensions();
  const biggerDevice = width >= 439;

  // Check if the current user does not exist
  if (!auth.currentUser) {
    return
  }

  // Last time that the current user logged in
  const loginDate = auth.currentUser.metadata.lastSignInTime;
  const formattedDate = new Date(loginDate || 'Last login date not found...').toLocaleDateString();

  return (
    <View style={styles.duelContainer}>
      <View style={styles.duelContent}>
        <View style={styles.blockText}>
          <Text style={styles.blockHeader}>Login History</Text>
          <Text style={styles.blockSubtitle}>You last logged in on: {formattedDate}</Text>
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
    width: 300,
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
    fontSize: 13,
    fontFamily: 'Coolvetica-Light',
  },
});
