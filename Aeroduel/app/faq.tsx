import BackHeader from "@/components/BackHeader";
import { LinearGradient } from "expo-linear-gradient";
// import { router } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { ScrollView, StyleSheet, View, Text } from "react-native";

SplashScreen.preventAutoHideAsync();

export default function FAQPage() {
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
        <View style={styles.faqContainer}>
          <Text style={styles.faqTitle}>FAQ</Text>
        </View>
        <View style={styles.faqTextContainer}>
          <Text style={styles.faqQuestion}>
            Do the planes fly autonomously?
          </Text>
          <Text style={styles.faqText}>
            No. Humans are required to pilot the planes. This involves training and should not be attempted by someone who has never flown an RC plane before.
          </Text>
        </View>
        <View style={styles.faqTextContainer}>
          <Text style={styles.faqQuestion}>
            What is the goal of this project?
          </Text>
          <Text style={styles.faqText}>
            Onboard each plane is a computer vision camera, several LED lights,
            a LoRa WiFi receiver, and an ESP32 arduino. When the camera detects
            the color pattern of a participating plane, it locks on for several
            seconds.
          </Text>
        </View>
        <View style={styles.faqTextContainer}>
          <Text style={[styles.faqQuestion, styles.justPlanes]}>
            Does it work with just planes?
          </Text>
          <Text style={styles.faqText}>
            While the goal is to work with RC planes, it should just as easily
            work on RC cars and other remote-controlled vehicles. You can even 
            build your own equipment to improve on ours and, for example, simulate
            surface to air combat with custom-built turrets. The possibilities are endless.
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
  faqContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 50,
  },
  faqQuestion: {
    color: 'white',
    fontFamily: 'Coolvetica-Regular',
    fontSize: 24,
    textAlign: 'left',
  },
  faqTitle: {
    fontWeight: "bold",
    color: "white",
    fontFamily: "Coolvetica-Regular",
    fontSize: 45,
    paddingBottom: 15,
  },
  faqTextContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    paddingBottom: 10,
  },
  faqText: {
    color: "white",
    textAlign: "left",
    fontFamily: "Coolvetica-Regular",
    lineHeight: 35,
    fontSize: 15,
    paddingBottom: 10,
    paddingHorizontal: 33,
  },
  howItWorks: {
    fontSize: 44,
  },
  justPlanes: {
    marginLeft: -25,
  }
});
