import BackHeader from "@/components/BackHeader";
import { LinearGradient } from "expo-linear-gradient";
import * as SplashScreen from "expo-splash-screen";
import { ScrollView, StyleSheet, Text, View } from "react-native";

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
        <View style={styles.dateContainer}>
          <Text style={[styles.aboutText, styles.dateText]}>Effective: December 11th, 2025</Text>
        </View>
        <View style={styles.aboutTextContainer}>
          <Text style={styles.aboutText}>
            This Privacy policy describes how Aeroduel collects, uses, and
            discloses your information with your use of our mobile application.
            By accessing or using the Aeroduel mobile app, you agree to be bound
            by the terms and conditions of this Privacy Policy. We are committed
            to protecting the privacy of our users. This policy is to help you
            understand the data that we collect, why we collect it, and what we
            do with it.
          </Text>
        </View>
        <View style={styles.aboutContainer}>
          <Text style={styles.privacyHeader}>Collected Information</Text>
        </View>
        <View style={styles.aboutTextContainer}>
          <Text style={styles.aboutText}>
            Your name, email address, and password are collected when you intentionally provide it,
            such as when you create an account, or log into your account.
          </Text>
        </View>
        <View style={styles.aboutContainer}>
          <Text style={[styles.privacyHeader, styles.informationUse]}>Use of Your Information</Text>
        </View>
        <View style={styles.aboutTextContainer}>
          <Text style={styles.aboutText}>
            We do not sell your personal data. We use the information we collect for the following purposes:
          </Text>
          <Text style={styles.aboutText}>1. To Provide and Maintain the Services</Text>
          <Text style={styles.aboutText}>2. Security and Fraud Prevention</Text>
          <Text style={styles.aboutText}>3. To Improve the App</Text>
        </View>
        <View style={styles.aboutContainer}>
          <Text style={[styles.privacyHeader, styles.policyChanges]}>Changes to this Policy</Text>
        </View>
        <View style={styles.aboutTextContainer}>
          <Text style={styles.aboutText}>
            We may update our Privacy Policy from time to time. We will notify you of any chnages by posting the new Privacy Policy in the app and updagint the &quot;Effective Date&quot; at the top of this policy.
          </Text>
        </View>
        <View style={styles.aboutContainer}>
          <Text style={[styles.privacyHeader, styles.policyChanges]}>Contact Us</Text>
        </View>
        <View style={styles.aboutTextContainer}>
          <Text style={styles.aboutText}>
            If you have any questions about this Privacy Policy, please contact us at: contact@aeroduel.com
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
    flexDirection: "column",
    justifyContent: "center",
    alignItems: 'center',
    marginTop: 50,
  },
  aboutHeader: {
    fontWeight: "bold",
    color: "white",
    fontFamily: "Coolvetica-Regular",
    fontSize: 50,
  },
  dateContainer: {
    alignItems: 'center',
  },
  dateText: {
    textAlign: 'center',
  },
  privacyMainHeader: {
    color: "white",
    fontFamily: "Coolvetica-Regular",
    fontSize: 50,
  },
  aboutTextContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  aboutText: {
    color: "white",
    textAlign: "left",
    width: "80%",
    fontFamily: "Coolvetica-Light",
    lineHeight: 35,
    fontSize: 15,
  },
  privacyHeader: {
    fontSize: 36,
    color: "white",
    fontFamily: "Coolvetica-Regular",
  },
  privacyContainer: {
    display: "flex",
    flexDirection: "row",
  },
  informationUse: {
    fontSize: 33,
  },
  policyChanges: {
    fontSize: 34,
  }
});
