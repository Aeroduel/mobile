import AeroduelHeader from "@/components/AeroduelHeader";
import BackHeader from "@/components/BackHeader";
import { LinearGradient } from "expo-linear-gradient";
import * as SplashScreen from "expo-splash-screen";
import { ScrollView, StyleSheet, View, Text } from "react-native";

SplashScreen.preventAutoHideAsync();

export default function PrivacyPolicy() {
  return (
    <View style={{ flex: 1 }}>
      <LinearGradient
        colors={["#000000", "#FF0000"]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={styles.backgroundGradient}
      ></LinearGradient>
      <ScrollView
        contentContainerStyle={{
          flexGrow: 1,
          justifyContent: "flex-start",
          position: "relative",
        }}
      >
        {/* PAGE HEADER */}
        <BackHeader />
        {/* MAIN CONTENT */}
        <View style={styles.aboutContainer}>
          <Text style={styles.privacyMainHeader}>Privacy Policy</Text>
        </View>
        <View style={styles.aboutTextContainer}>
          <Text style={styles.aboutText}>
            This Privacy policy describes how Aeroduel collects, uses, and discloses your information with your use of our mobile application.
            By accessing or using the Aeroduel mobile app, you agree to be bound by the terms and conditions of this Privacy Policy.
            We are committed to protecting the privacy of our users. This policy is to help you understand the data that we collect, why we collect it, and what we do with it.
          </Text>
        </View>
        <View style={styles.aboutContainer}>
          <Text style={styles.privacyHeader}>Collected Information</Text>
        </View>
        <View style={styles.aboutTextContainer}>
          <Text style={styles.aboutText}>
            This information is collected when you intentionally provide it, such as when you create an account.
          </Text>
          <Text style={styles.aboutText}>
            - Email Address
          </Text>
          <Text style={styles.aboutText}>
            - Username
          </Text>
          <Text style={styles.aboutText}>
            - Password
          </Text>
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
  aboutContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 50,
  },
  aboutHeader: {
    fontWeight: "bold",
    color: "white",
    fontFamily: "Coolvetica-Regular",
    fontSize: 50,
  },
  privacyMainHeader: {
    color: 'white',
    fontFamily: 'Coolvetica-Regular',
    fontSize: 50
  },
  aboutTextContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  aboutText: {
    color: 'white',
    textAlign: 'left',
    width: '80%',
    fontFamily: 'Coolvetica-Regular',
    lineHeight: 35,
    fontSize: 15,
  },
  privacyHeader: {
    fontSize: 36,
    color: 'white',
    fontFamily: 'Coolvetica-Regular',
  }
});
