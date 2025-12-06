import FAQHeader from "@/components/Headers/FAQHeader";
import { LinearGradient } from "expo-linear-gradient";
import * as SplashScreen from "expo-splash-screen";
import { ScrollView, StyleSheet, Text, View } from "react-native";

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
        <FAQHeader />
        {/* MAIN CONTENT */}
        <View style={[styles.faqTextContainer, styles.firstTextContainer]}>
          <Text style={styles.faqQuestion}>
            Do the planes fly autonomously?
          </Text>
          <Text style={styles.faqText}>
            No. Humans are required to pilot the planes. This involves training
            and should not be attempted by someone who has never flown an RC
            plane before.
          </Text>
        </View>
        <View style={styles.faqTextContainer}>
          <Text style={[styles.faqQuestion, styles.justPlanes]}>
            Does it work with just planes?
          </Text>
          <Text style={styles.faqText}>
            While the goal is to work with RC planes, it should just as easily
            work on RC cars and other remote-controlled vehicles. You can even
            build your own equipment to improve on ours and, for example,
            simulate surface to air combat with custom-built turrets. The
            possibilities are endless.
          </Text>
        </View>
        <View style={styles.faqTextContainer}>
          <Text style={[styles.faqQuestion, styles.howItWorks]}>
            How does it work?
          </Text>
          <Text style={styles.faqText}>
            Onboard each plane is a computer vision camera, several LED lights,
            a LoRa WiFi receiver, and an ESP32 arduino. When the camera detects
            the color pattern of a participating plane, it locks on for several
            seconds.
          </Text>
        </View>
        <View style={styles.faqTextContainer}>
          <Text style={[styles.faqQuestion, styles.appPurpose]}>
            What is the mobile app for?
          </Text>
          <Text style={styles.faqText}>
            The Aeroduel mobile app allows users to register their planes
            equipped with Aeroduel equipment and etner dogfights by scanning a
            QR code or entering a game pin displayed on the host computer. This
            requires at least one player to have our desktop app installed and
            all players to have our mobile app installed, as well as the proper
            Aeroduel equipment installed on their plane of choice.
          </Text>
        </View>
        <View style={styles.faqTextContainer}>
          <Text style={[styles.faqQuestion, styles.gameRules]}>
            What are the rules of the game?
          </Text>
          <Text style={styles.faqText}>
            The match timer begins when all planes have taken off. Pilots then
            attempt to lock on to other planes by keeping them within view of
            the cockpit. When a solid lock is initiated, the game simulates a
            shot and logs a hit, giving the pilot 1 point. Though no physical
            shots are fired, accidents happen, even in normal every day flights.
            If a participating plane crashes, they are disqualified from the
            match, though this currently cannot be detected automatically, and
            that is up to the players to handle.
          </Text>
        </View>
        <View style={styles.faqTextContainer}>
          <Text style={[styles.faqQuestion, styles.justPlanes]}>
            What was this app built with?
          </Text>
          <Text style={styles.faqText}>
            The Aeroduel mobile app was built with React Native, Expo, Google
            Firebase, and a Firestore database.
          </Text>
        </View>
        <View style={[styles.faqTextContainer, styles.lastTextContainer]}>
          <Text style={[styles.faqQuestion, styles.askQuestion]}>
            Have a question?
          </Text>
          <Text style={[styles.faqText, styles.contactEmail]}>
            Contact us at:{" "}
            <Text style={styles.boldText}>contact@aeroduel.com</Text>
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
    color: "white",
    fontFamily: "Coolvetica-Regular",
    fontSize: 24,
    textAlign: "left",
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
    fontFamily: "Coolvetica-Light",
    lineHeight: 35,
    fontSize: 15,
    paddingBottom: 10,
    paddingHorizontal: 33,
  },
  justPlanes: {
    marginLeft: -25,
  },
  firstTextContainer: {
    marginTop: 20,
  },
  gameRules: {
    marginLeft: -10,
  },
  appPurpose: {
    marginLeft: -50,
  },
  howItWorks: {
    marginLeft: -140,
  },
  askQuestion: {
    marginLeft: -150,
  },
  contactEmail: {
    marginLeft: -90,
  },
  lastTextContainer: {
    paddingBottom: 50,
  },
  boldText: {
    fontFamily: 'Coolvetica-Regular',
  }
});
