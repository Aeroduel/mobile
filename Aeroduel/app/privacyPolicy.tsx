import AeroduelHeader from "@/components/AeroduelHeader";
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
        <AeroduelHeader />
        {/* MAIN CONTENT */}
        <View style={styles.aboutContainer}>
          <Text style={styles.aboutHeader}>Privacy Policy</Text>
        </View>
        <View style={styles.aboutTextContainer}>
          <Text style={styles.aboutText}>
            Cool privacy policy
          </Text>
          <Text style={styles.aboutText}>
            More text
          </Text>
          <Text style={styles.aboutText}>
            More text
          </Text>
        </View>
        <View style={styles.aboutContainer}>
          <Text style={styles.aboutHeader}>Our Team</Text>
        </View>
        <View style={styles.aboutTextContainer}>
          <Text style={styles.aboutText}>
            Aeroduel is being built by a team of 5 Full-Stack Developers from Atlas School in Tulsa, Oklahoma. We are currently working on our promotional website, desktop server app, and mobile app, in addition to building and testing our RC fighter jets. 🛩️
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
  aboutTextContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  aboutText: {
    color: 'white',
    textAlign: 'center',
    width: '80%',
    fontFamily: 'Coolvetica-Regular',
    lineHeight: 35,
    fontSize: 20,
  }
});
