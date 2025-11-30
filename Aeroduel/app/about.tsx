import BackHeader from "@/components/BackHeader";
import { LinearGradient } from "expo-linear-gradient";
import * as SplashScreen from "expo-splash-screen";
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
const animatedAeroduelLogo = require("../assets/gifs/aeroduel-logo-animated.gif");
const arduino = require("../assets/images/arduino-circle.png");
const camera = require("../assets/images/camera-circle.png");
const lora = require("../assets/images/lora-receiver-circle.png");

SplashScreen.preventAutoHideAsync();

export default function AboutPage() {
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
        <View style={styles.gifContainer}>
          <Image source={animatedAeroduelLogo} style={styles.animatedAeroduel} resizeMode="contain"></Image>
        </View>
        <View style={styles.aboutContainer}>
          <Text style={styles.aboutHeader}>What is Aeroduel?</Text>
        </View>
        <View style={styles.aboutTextContainer}>
          <Text style={styles.aboutText}>
            Aeroduel merges cutting-edge software engineering with RC model
            aircraft to create the an advanced aerial combat system for RC
            aircraft.
          </Text>
          <Text style={styles.aboutText}>
            We&apos;re equipping high-performance RC fighter jets with camera
            systems that automatically detect targets equipped with
            detection lights. This allows aircraft to use advanced computer
            vision to lock onto targets and simulate aerial combat, keeping
            score via a Wi-Fi connection to the host server back on the ground.
            Add FPV cameras and pilots can get a cockpit experience and aim
            like a pro.
          </Text>
          <Text style={styles.aboutText}>
            Our mobile app allows users to register their planes equipped with
            Aeroduel equipment and enter dogfights by scanning a QR code or
            entering a game pin displayed on the host computer. This requires at
            least one player to have our desktop app installed and all players
            to have our mobile app installed, as well as the proper Aeroduel
            equipment installed on their plane of choice.
          </Text>
        </View>
        <View style={styles.aboutContainer}>
          <Text style={styles.aboutHeader}>How It Works</Text>
        </View>
        <View style={styles.imagesContainer}>
          <Image source={camera} style={[styles.techImage, styles.biggerTechImage]} resizeMode="contain"></Image>
          <Image source={lora} style={styles.techImage} resizeMode="contain"></Image>
          <Image source={arduino} style={[styles.techImage, styles.biggerTechImage]} resizeMode="contain"></Image>
        </View>
        <View style={styles.imageDescriptionContainer}>
          <Text style={styles.descriptionText}>Vision Camera</Text>
          <Text style={styles.descriptionText}>LoRa Receiver</Text>
          <Text style={styles.descriptionText}>ESP32 Arduino</Text>
        </View>
        <View style={styles.aboutTextContainer}>
          <Text style={styles.aboutText}>
            Onboard each plane is a computer vision camera, several LED lights,
            a LoRa WiFi receiver, and an ESP32 arduino. When the camera detects
            the color pattern of a participating plane, it locks on for several
            seconds.
          </Text>
          <Text style={styles.aboutText}>
            If it can maintain that lock for several seconds, it registers a
            hit, sending a signal to the server, which then sends an updated
            score to the mobile app. The planes, server, and mobile apps
            communicate with each other via a WebSocket connection, allowing for
            low-latency communication between the entire system during the
            match.
          </Text>
        </View>
        <View style={styles.aboutContainer}>
          <Text style={styles.aboutHeader}>About Our Team</Text>
        </View>
        <View style={styles.aboutTextContainer}>
          <Text style={[styles.aboutText, styles.lastText]}>
            Aeroduel is being built by a team of 5 Full-Stack Developers from
            Atlas School in Tulsa, Oklahoma. We are currently working on our
            promotional website, desktop server app, and mobile app, in addition
            to building and testing our RC fighter jets. 🛩️
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
    marginTop: 20,
  },
  aboutHeader: {
    fontWeight: "bold",
    color: "white",
    fontFamily: "Coolvetica-Regular",
    fontSize: 45,
  },
  aboutTextContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  aboutText: {
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
  gifContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 20,
  },
  animatedAeroduel: {
    width: 350,
    height: 40,
  },
  imagesContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10,
  },
  techImage: {
    width: 100,
    height: 100,
  },
  biggerTechImage: {
    width: 120,
    height: 120,
  },
  imageDescriptionContainer: {
    display: 'flex',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    flexDirection: 'row',
    paddingVertical: 20,
  },
  descriptionText: {
    fontFamily: 'Coolvetica-Regular',
    color: 'white',
    fontSize: 16,
  },
  lastText: {
    paddingBottom: 60,
  }
});
