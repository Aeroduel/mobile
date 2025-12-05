import AdvancedHeader from "@/components/Headers/AdvancedHeader";
import DeleteAccountCard from "@/components/Settings/Advanced/DeleteAccountCard";
import ResetPasswordCard from "@/components/Settings/Advanced/ResetPasswordCard";
import { auth } from "@/config/FirebaseConfig";
import { LinearGradient } from "expo-linear-gradient";
import { router } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { deleteUser, sendPasswordResetEmail } from "firebase/auth";
import { useState } from "react";
import {
  Alert,
  Pressable,
  RefreshControl,
  ScrollView,
  StyleSheet,
  View,
} from "react-native";

SplashScreen.preventAutoHideAsync();

export default function AdvancedSettings() {
  // State variables for RefreshControl
  const [refreshing, setRefreshing] = useState(false);

  // RefreshControl handler function
  const onRefresh = () => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 1500);
  };

  // Password reset handler function - sends password reset email to user's inbox
  // Not currently working
  const passwordReset = async () => {
    if (!auth.currentUser) {
      Alert.alert("Error", "No user found");
      return;
    }
    const email = auth.currentUser.email;
    if (!email) {
      Alert.alert("Error", "No email found...");
      return;
    }
    try {
      await sendPasswordResetEmail(auth, email);
      Alert.alert("Success!", "Check your inbox to reset your password");
    } catch (error) {
      console.error(error);
      Alert.alert(
        "There was an error resetting your password...",
        "Please try again"
      );
    }
  };

  // Delete user handler function - deletes a user from Firebase
  const deleteCurrentUser = async () => {
    const user = auth.currentUser;
    if (!user) {
      Alert.alert("Error", "No current user found...");
      return;
    }
    try {
      await deleteUser(user);
      router.replace("/register");
      Alert.alert(
        "Success!",
        "You've successfully deleted your account, and have been signed out"
      );
    } catch (error) {
      console.error(error);
      Alert.alert(
        "There was an error deleting your account...",
        "Please try again"
      );
    }
  };

  // Alert that cofirms that the user wants to delete their account
  const confirmDeletion = () => {
    Alert.alert(
      "Are you sure?", "We're sad to see you go, deleting your account is permanent.",
      [
        {
          text: "Yes",
          onPress: () => deleteCurrentUser(),
          style: "default"
        },
        {
          text: "No",
          onPress: () => console.log("No was pressed"),
          style: "default"
        },
      ],
      {
        cancelable: true
      }
    );
  };

  return (
    <View style={{ flex: 1 }}>
      <LinearGradient
        colors={["#000000", "#FF0000"]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={styles.backgroundGradient}
      ></LinearGradient>
      {/* PAGE HEADER */}
      <AdvancedHeader />
      <ScrollView
        contentContainerStyle={{
          flexGrow: 1,
          justifyContent: "flex-start",
          position: "relative",
        }}
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={onRefresh}
            tintColor={"#white"}
          />
        }
      >
        {/* MAIN CONTENT */}
        <View>
          <Pressable onPress={passwordReset}>
            <ResetPasswordCard />
          </Pressable>
          <Pressable onPress={confirmDeletion}>
            <DeleteAccountCard />
          </Pressable>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    position: "relative",
  },
  backgroundGradient: {
    position: "absolute",
    width: "100%",
    height: "100%",
  },
});
