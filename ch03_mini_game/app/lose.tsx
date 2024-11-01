import BackgroundProvider from "@/providers/background_provider";
import SafeAreaViewProvider from "@/providers/safe_area_view_provider";
import { Text } from "@tamagui/core";

export default function GameOver() {
  return (
    <BackgroundProvider>
      <SafeAreaViewProvider>
        <Text>게임오버</Text>
      </SafeAreaViewProvider>
    </BackgroundProvider>
  );
}
