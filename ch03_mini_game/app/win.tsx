import { GameContext } from "@/context/useGame";
import BackgroundProvider from "@/providers/background_provider";
import SafeAreaViewProvider from "@/providers/safe_area_view_provider";
import { useContext } from "react";
import { Text, YStack } from "tamagui";

export default function WinnerPage() {
  const { answer } = useContext(GameContext);

  return (
    <BackgroundProvider>
      <SafeAreaViewProvider>
        <YStack gap="$4">
          <Text>You Win!</Text>
          <Text>Answer is ... {answer}</Text>
        </YStack>
      </SafeAreaViewProvider>
    </BackgroundProvider>
  );
}
