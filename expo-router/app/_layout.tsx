import * as SplashScreen from "expo-splash-screen";
import { Stack } from "expo-router";
import { useFonts } from "expo-font";
import { StatusBar, useColorScheme } from "react-native";
import { useEffect } from "react";
import "../tamagui-web.css";
import TamaguiProvider from "providers/tamagui_provider";
import GameProvider from "context/useGame";
import { getToken } from "tamagui";

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded, error] = useFonts({
    Inter: require("@tamagui/font-inter/otf/Inter-Medium.otf"),
    InterBold: require("@tamagui/font-inter/otf/Inter-Bold.otf"),
  });
  const colorScheme = useColorScheme();

  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);

  if (!loaded && !error) {
    return null;
  }

  return (
    <TamaguiProvider colorScheme={colorScheme}>
      <GameProvider>
        <StatusBar
          barStyle={colorScheme === "dark" ? "light-content" : "dark-content"}
        />
        <Stack>
          <Stack.Screen
            name="index"
            options={{
              title: "Main",
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="lose"
            options={{
              title: "Lose",
              headerTransparent: true,
              headerTintColor: getToken("$color.accent500"),
              headerBackTitle: "retry",
            }}
          />
          <Stack.Screen
            name="win"
            options={{
              title: "win",
              headerTransparent: true,
              headerTintColor: getToken("$color.accent500"),
              headerBackTitle: "Go Back",
            }}
          />
        </Stack>
      </GameProvider>
    </TamaguiProvider>
  );
}

/**
 * View는 콘텐츠가 들어갈 만큼의 공간만 차지한다.
 */
