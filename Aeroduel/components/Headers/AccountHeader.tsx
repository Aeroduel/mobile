import { router } from "expo-router";
import { Pressable, StyleSheet, Text, View } from "react-native";
import LogoutElement from "./LogoutElement";
import { signOut } from "firebase/auth";
import { auth } from "../../config/FirebaseConfig";

export default function ProfileHeader() {
  // Sign out of Aeroduel
  const handleSignOut = async () => {
    if (!auth.currentUser) {
      console.error("No user was founc");
      return;
    }
    if (!auth.currentUser.email) {
      console.error("There is no email associated that user");
      return;
    }
    const currentUserEmail = auth.currentUser.email;
    try {
      console.log(`${currentUserEmail}: is attempting to log out`);
      await signOut(auth);
      console.log(`${currentUserEmail}: has successfully been logged out`);
      router.replace('/login');
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <View style={styles.aeroduelHeader}>
      <Pressable>
        <Text style={styles.headerText}>Account</Text>
      </Pressable>
      <Pressable onPress={handleSignOut}>
        <LogoutElement />
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  aeroduelHeader: {
    display: "flex",
    flexDirection: "row",
    marginTop: 80,
    justifyContent: "space-between",
  },
  headerText: {
    fontFamily: "Xirod",
    fontSize: 24,
    color: "#FFFFFF",
    marginLeft: 20,
    marginTop: 7,
  },
});
