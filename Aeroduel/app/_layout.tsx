import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import "react-native-reanimated";

import { useColorScheme } from "@/hooks/use-color-scheme";

export const unstable_settings = {
  anchor: "(tabs)",
};

export default function RootLayout() {
  const colorScheme = useColorScheme();

  return (
    <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
      <Stack>
        <Stack.Screen name="login" options={{ headerShown: false }} />
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="modal" options={{ presentation: "modal", title: "Modal", animation: "fade" }} />
        <Stack.Screen name="register" options={{ headerShown: false }} />
        <Stack.Screen name="qrEntry" options={{ headerShown: false }} />
        <Stack.Screen name="about" options={{ headerShown: false }} />
        <Stack.Screen name="privacyPolicy" options={{ headerShown: false }} />
        <Stack.Screen name="scoreboard" options={{ headerShown: false }} />
        <Stack.Screen name="faq" options={{ headerShown: false }} />
      </Stack>
    </ThemeProvider>
  );
}
