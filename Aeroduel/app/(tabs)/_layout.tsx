import { HapticTab } from "@/components/haptic-tab";
import { Colors } from "@/constants/theme";
import { useColorScheme } from "@/hooks/use-color-scheme";
import { Tabs } from "expo-router";
import { Image } from "react-native";
const houseIcon = require("../../assets/images/house-icon-white.png");
const gearIcon = require("../../assets/images/settings-gear-white.png");
const graphIcon = require("../../assets/images/stats.png");
const userIcon = require("../../assets/images/user.png");

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? "light"].tint,
        headerShown: false,
        tabBarButton: HapticTab,
        tabBarStyle: {
          backgroundColor: "#000000ff",
          height: 120,
          paddingTop: 15,
          // borderTopLeftRadius: 25,
          // borderTopRightRadius: 25,
        },
        tabBarLabelStyle: {
          fontFamily: "Coolvetica-Regular",
          fontSize: 12,
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color }) => <Image source={houseIcon}></Image>,
        }}
      />
      <Tabs.Screen
        name="statistics"
        options={{
          title: "Statistics",
          tabBarIcon: ({ color }) => (
            <Image source={graphIcon} style={{ width: 25, height: 25 }}></Image>
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          tabBarIcon: ({ color }) => (
            <Image source={userIcon} style={{ width: 25, height: 25 }}></Image>
          ),
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          title: "Settings",
          tabBarIcon: ({ color }) => (
            <Image source={gearIcon} style={{ width: 25, height: 25 }}></Image>
          ),
        }}
      />
    </Tabs>
  );
}
