import SettingsHeader from "@/components/SettingsHeader";
import SettingsHeaderCard from "@/components/SettingsHeaderCard";
import SettingsOptions from "@/components/SettingsOptions";
import { LinearGradient } from "expo-linear-gradient";
import { ScrollView, StyleSheet, View } from "react-native";

export default function TabTwoScreen() {
  return (
    <View style={{ flex: 1 }}>
      <LinearGradient
        colors={["#000000", "#FF0000"]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={styles.backgroundGradient}
      ></LinearGradient>
      {/* PAGE HEADER */}
      <SettingsHeader />
      <ScrollView
        contentContainerStyle={{
          flexGrow: 1,
        }}
      >
        {/* MAIN CONTENT */}
        <View style={{ flex: 1 }}>
          <SettingsOptions />
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  backgroundGradient: {
    position: "absolute",
    width: "100%",
    height: "100%",
  },
});
