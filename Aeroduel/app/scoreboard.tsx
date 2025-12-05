import AeroduelHeader from "@/components/Headers/AeroduelHeader";
import ScoreboardHeaderCard from "@/components/ScoreboardHeaderCard";
import ScoreboardStats from "@/components/ScoreboardStats";
import { LinearGradient } from "expo-linear-gradient";
import * as SplashScreen from "expo-splash-screen";
import { ScrollView, StyleSheet, View } from "react-native";

SplashScreen.preventAutoHideAsync();

export default function ScoreboardPage() {
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
        <ScoreboardHeaderCard />
        <ScoreboardStats />
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
