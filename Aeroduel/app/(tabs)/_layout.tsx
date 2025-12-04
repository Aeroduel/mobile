import { HapticTab } from "@/components/haptic-tab";
import { Tabs } from "expo-router";
import { Image } from "react-native";
const houseIcon = require("../../assets/images/house-icon-white.png");
const gearIcon = require("../../assets/images/settings-gear-white.png");
const graphIcon = require("../../assets/images/stats.png");
const userIcon = require("../../assets/images/user.png");
const plusIcon = require("../../assets/images/plus.png")

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: '#ffffffff',
        headerShown: false,
        tabBarButton: HapticTab,
        tabBarStyle: {
          backgroundColor: "#000000ff",
          height: 120,
          paddingTop: 15,
        },
        tabBarLabelStyle: {
          fontFamily: 'Coolvetica-Light',
          fontSize: 13,
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
        name="link"
        options={{
          title: "Link",
          tabBarIcon: ({ color }) => (
            <Image source={plusIcon} style={{ width: 35, height: 35 }}></Image>
          ),
        }}
      />
      <Tabs.Screen
        name="account"
        options={{
          title: "Account",
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
