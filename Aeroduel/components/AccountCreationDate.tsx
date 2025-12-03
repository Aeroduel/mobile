import {
  StyleSheet,
  Text,
  useWindowDimensions,
  View,
} from "react-native";
import { auth } from "../config/FirebaseConfig";

export default function AccountCreationDateCard() {
  // Declare window dimensions
  const { width } = useWindowDimensions();
  const biggerDevice = width >= 439;

  // Check if the current user does not exist
  if (!auth.currentUser) {
    return
  }

  // Set the user to the current user from auth to access properties
  const user = auth.currentUser;

  const accountCreated = user.metadata.creationTime;
  const createdAt = new Date(accountCreated || 'Account creation date not found...').toLocaleDateString();

  return (
    <View style={styles.duelContainer}>
      <View style={styles.duelContent}>
        <View style={styles.blockText}>
          <Text style={styles.blockHeader}>Active Since</Text>
          <Text style={styles.blockSubtitle}>
            You created your account on: { createdAt }
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
