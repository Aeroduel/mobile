import SettingsHeader from "@/components/SettingsHeader";
import SettingsOptions from "@/components/SettingsOptions";
import { LinearGradient } from "expo-linear-gradient";
import { useState } from "react";
import { ScrollView, StyleSheet, View, RefreshControl } from "react-native";

export default function TabTwoScreen() {
  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = () => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 1500)
  };

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
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={onRefresh}
            tintColor={'white'}
          />
        }
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
