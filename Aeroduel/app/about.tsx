import AeroduelHeader from "@/components/AeroduelHeader";
import DuelCard from "@/components/DuelCard";
import NewsCard from "@/components/NewsCard";
import SpectateCard from "@/components/SpectateCard";
import { LinearGradient } from "expo-linear-gradient";
import * as SplashScreen from "expo-splash-screen";
import { ScrollView, StyleSheet, View, Text } from "react-native";

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
        <AeroduelHeader />
        {/* MAIN CONTENT */}
        <View style={styles.aboutContainer}>
          <Text style={styles.aboutHeader}>About Aeroduel</Text>
        </View>
        <View style={styles.aboutTextContainer}>
          <Text style={styles.aboutText}>
            Aeroduel merges cutting-edge software engineering with RC model
            aircraft to create the an advanced aerial combat system for RC
            aircraft.
          </Text>
          <Text style={styles.aboutText}>
            We&apos;re equipping high-performance RC fighter jets with camera
            systems that automatically detect targets equipped with Aeroduel
            detection lights. This allows aircraft to use advanced computer
            vision to lock onto targets and simulate aerial combat, keeping
            score via a Wi-Fi connection to the host server back on the ground.
            Add FPV cameras and pilots can get a true cockpit experience and aim
            like a pro.
          </Text>
          <Text style={styles.aboutText}>
            Our mobile app will allow users to register their planes equipped
            with Aeroduel equipment and enter dogfights by scanning a QR code or
            entering a game pin displayed on the host computer. This requires at
            least one player to have our desktop app installed and all players
            to have our mobile app installed, as well as the proper Aeroduel
            equipment installed on their plane of choice.
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
