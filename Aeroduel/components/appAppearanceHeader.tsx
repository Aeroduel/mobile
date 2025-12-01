import {
  Image,
  StyleSheet,
  Text,
  useWindowDimensions,
  View,
} from "react-native";
const eyedropper = require("../assets/images/eyedropper.png")

export default function AppAppearanceHeader() {
  // Declare window dimensions
  const { width } = useWindowDimensions();
  const biggerDevice = width >= 439;

  return (
    <View style={styles.duelContainer}>
      <View style={styles.duelContent}>
        <View style={styles.blockText}>
          <Text style={styles.blockHeader}>App Appearance</Text>
          <Text style={styles.blockSubtitle}>
            Control the colors and theme of your Aeroduel app
          </Text>
        </View>
        <View>
          <Image
            source={eyedropper}
            style={biggerDevice ? styles.largeScreen : styles.smallScreen}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  duelContainer: {
    backgroundColor: "rgba(145, 72, 72, 0.5)", // rgba to set opacity for background
    marginLeft: 10,
    marginRight: 10,
    marginTop: 5,
    marginBottom: 5,
    paddingLeft: 20,
    paddingRight: 20,
    height: 110,
    borderRadius: 15,
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "column",
    paddingTop: 0,
    // Need to play with the shadow colors
    // shadowColor: '#512929ff',
    // shadowOffset: { width: 10, height: 10 },
    // shadowOpacity: 10,
    // shadowRadius: 5,
  },
  duelContent: {
    flexDirection: "row",
  },
  blockText: {
    paddingTop: 15,
    width: 220,
    marginLeft: 10,
  },
  blockHeader: {
    color: "#FFFFFF",
    fontSize: 30,
    fontFamily: "Coolvetica-Regular",
  },
  blockSubtitle: {
    color: "#FFFFFF",
    fontWeight: "700",
    fontSize: 13,
  },
  whitePlaneIcon: {
    width: 80,
    height: 75,
  },
  startButton: {
    width: 200,
    height: 46,
    marginBottom: 20,
  },
  largeScreen: {
    width: 75,
    height: 70,
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "flex-end",
    marginTop: 13,
    marginLeft: 80,
  },
  smallScreen: {
    width: 60,
    height: 60,
    marginTop: 25,
    marginLeft: 30,
  },
});
