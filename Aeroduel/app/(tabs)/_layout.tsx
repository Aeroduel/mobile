import { Tabs } from 'expo-router';
import { Image } from 'react-native';
import { HapticTab } from '@/components/haptic-tab';
import { Colors } from '@/constants/theme';
import { useColorScheme } from '@/hooks/use-color-scheme';
const houseIcon = require("../../assets/images/house-icon-white.png");
const crosshairIcon = require("../../assets/images/crosshair-white.png");
const eyeIcon = require("../../assets/images/scan-eye-quarter-white.png");
const gearIcon = require("../../assets/images/settings-gear-white.png");

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        headerShown: false,
        tabBarButton: HapticTab,
        tabBarStyle: {
          backgroundColor: '#000000ff',
          height: 120,
          paddingTop: 15,
          // borderTopLeftRadius: 25,
          // borderTopRightRadius: 25,
        },
        tabBarLabelStyle: {
          fontFamily: 'Coolvetica-Regular',
          fontSize: 12,
        }
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color }) => <Image source={houseIcon}></Image>,
        }}
      />
      <Tabs.Screen
        name="duel"
        options={{
          title: 'Duel',
          tabBarIcon: ({ color }) => <Image source={crosshairIcon}></Image>,
        }}
      />
      <Tabs.Screen
        name="scoreboard"
        options={{
          title: 'Scoreboard',
          tabBarIcon: ({ color }) => <Image source={eyeIcon}></Image>,
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          title: 'Settings',
          tabBarIcon: ({ color }) => <Image source={gearIcon} style={{ width: 25, height: 25 }}></Image>,
        }}
      />
    </Tabs>
  );
}