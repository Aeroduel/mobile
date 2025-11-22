import { Tabs } from 'expo-router';
import React from 'react';
import { StyleSheet, Image } from 'react-native';
import { HapticTab } from '@/components/haptic-tab';
import { IconSymbol } from '@/components/ui/icon-symbol';
import { Colors } from '@/constants/theme';
import { useColorScheme } from '@/hooks/use-color-scheme';
import houseIcon from "../../assets/images/house-icon-white.png";
import crosshairIcon from "../../assets/images/crosshair-white.png";
import eyeIcon from "../../assets/images/scan-eye-quarter-white.png";
import gearIcon from "../../assets/images/settings-gear-white.png"; 

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        headerShown: false,
        tabBarButton: HapticTab,
        tabBarStyle: {
          backgroundColor: '#000000',
          height: 120,
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
        name="spectate"
        options={{
          title: 'Spectate',
          tabBarIcon: ({ color }) => <Image source={eyeIcon}></Image>,
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          title: 'Settings',
          tabBarIcon: ({ color }) => <Image source={gearIcon}></Image>,
        }}
      />
    </Tabs>
  );
}

const styles = StyleSheet.create({
})
