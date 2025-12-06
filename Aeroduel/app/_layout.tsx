import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { useFonts } from "expo-font";
import { SplashScreen, Stack } from "expo-router";
import "react-native-reanimated";

import { useColorScheme } from "@/hooks/use-color-scheme";
import { useEffect } from "react";

export const unstable_settings = {
  anchor: "(tabs)",
};

export default function RootLayout() {
  const colorScheme = useColorScheme();

  // Load the custom fonts
  const [fontsLoaded] = useFonts({
    "Coolvetica-Regular": require("../assets/fonts/coolvetica-regular.otf"),
    "Coolvetica-Light": require("../assets/fonts/coolvetica-light.ttf"),
    "Xirod": require("../assets/fonts/xirod.otf"),
  });

  // Check if the fonts are loaded
  useEffect(() => {
    if (fontsLoaded) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
      <Stack>
        <Stack.Screen name="login" options={{ headerShown: false }} />
        <Stack.Screen name="forgotPassword" options={{ headerShown: false }} />
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen
          name="modal"
          options={{ presentation: "modal", title: "Modal", animation: "fade" }}
        />
        <Stack.Screen name="register" options={{ headerShown: false }} />
        <Stack.Screen name="qrEntry" options={{ headerShown: false }} />
        <Stack.Screen name="about" options={{ headerShown: false }} />
        <Stack.Screen name="privacyPolicy" options={{ headerShown: false }} />
        <Stack.Screen name="scoreboard" options={{ headerShown: false }} />
        <Stack.Screen name="faq" options={{ headerShown: false }} />
        <Stack.Screen name="appAppearance" options={{ headerShown: false }} />
        <Stack.Screen name="advancedSettings" options={{ headerShown: false }} />
        <Stack.Screen name="availablePlanes" options={{ headerShown: false }} />
        <Stack.Screen name="join" options={{ headerShown: false }} />
      </Stack>
    </ThemeProvider>
  );
}
