import { router } from "expo-router";
import { Pressable, StyleSheet, Text, View, Image } from "react-native";
const mailIcon = require("../../assets/images/mail-icon-white.png")

export default function NewsCard() {
  // Route to the about page
  const aboutRedirect = () => {
    router.push("/about");
  };

  return (
    <View style={styles.newsContainer}>
      <View style={styles.topRow}>
        <View style={styles.blockText}>
          <Text style={styles.blockHeader}>
            Latest News
          </Text>
          <Text style={styles.blockSubtitle}>
            Great features are on the way! We&apos;re committed to building a reliable
            application that you&apos;ll love, and we can&apos;t wait for you to see
            the final product. Press on the icon to the right to learn more about Aeroduel,
            our team, and our vision with this project.
          </Text>
          <Text style={styles.blockSubtitle}>
            Updated: December 5th, 2025
          </Text>
        </View>
        <Pressable style={[styles.blockText, styles.mailContainer]} onPress={aboutRedirect}>
          <Image source={mailIcon} style={styles.mail}></Image>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  newsContainer: {
    backgroundColor: "rgba(145, 72, 72, 0.5)", // rgba to set opacity for background
    marginHorizontal: 10,
    marginVertical: 5,
    paddingHorizontal: 20,
    borderRadius: 15,
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "row",
    paddingBottom: 15,
    // Need to play with the shadow colors
    // shadowColor: '#512929ff',
    // shadowOffset: { width: 10, height: 10 },
    // shadowOpacity: 10,
    // shadowRadius: 5,
  },
  topRow: {
    flexDirection: "row",
    gap: 20,
  },
  blockText: {
    paddingTop: 15,
    width: 200,
    marginLeft: 10,
  },
  blockHeader: {
    color: "#FFFFFF",
    fontSize: 30,
    fontFamily: "Coolvetica-Regular",
  },
  blockSubtitle: {
    color: "#FFFFFF",
    fontWeight: 400,
    fontSize: 13,
    width: 230,
    marginVertical: 10,
    fontFamily: 'Coolvetica-Light',
  },
  appStatus: {
    width: 330,
    fontSize: 10,
    marginBottom: 8,
  },
  bottomRow: {
    display: "flex",
    flexDirection: "row",
    gap: 7,
    justifyContent: "center",
    paddingBottom: 10,
  },
  qrButton: {
    backgroundColor: "#333333ff",
    paddingHorizontal: 35,
    paddingVertical: 20,
    borderBottomLeftRadius: 15,
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 20,
  },
  eyeIcon: {
    width: 60,
    height: 60,
  },
  buttonContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    bottom: 45,
  },
  qrCodeButton: {
    width: 200,
    height: 64,
    transform: [{ scale: 0.7 }],
    position: "absolute",
    left: -20,
  },
  pinButton: {
    width: 200,
    height: 64,
    transform: [{ scale: 0.7 }],
    position: "absolute",
    right: -20,
  },
  linkText: {
    fontFamily: 'Coolvetica-Regular',
  },
  mailContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  mail: {
    width: 40,
    height: 40,
    marginLeft: 40,
  }
});
