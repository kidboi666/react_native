import { useContext, useState } from "react";
import { Alert } from "react-native";
import { useRouter } from "expo-router";
import { Input, Text, XStack, YStack } from "tamagui";
import { useToastController } from "@tamagui/toast";
import { GameContext } from "context/useGame";
import BackgroundProvider from "providers/background_provider";
import SafeAreaViewProvider from "providers/safe_area_view_provider";
import { PrimaryButton } from "components/PrimaryButton";

export default function StartGameScreen() {
  const { answer, life, countLife, chosenNumbers, addChosenNumber } =
    useContext(GameContext);
  const [userNumber, setUserNumber] = useState("");
  const toast = useToastController();
  const router = useRouter();

  const changeNumber = (e: string) => setUserNumber(e);
  const handleReset = () => setUserNumber("");

  const handleLife = () => {
    countLife();
    addChosenNumber(parseInt(userNumber));

    toast.show("Incorrect!", {
      message: `You have ${life - 1} attempts remaining`,
      native: true,
    });
  };

  const handleSubmit = () => {
    const parseNumber = parseInt(userNumber);

    if (
      typeof parseNumber !== "number" ||
      isNaN(parseNumber) ||
      parseNumber <= 0
    ) {
      Alert.alert("Please Enter a Number from 1 to 99.", "", [
        { text: "Okay", style: "default", onPress: handleReset },
      ]);
    } else if (parseNumber === answer) {
      router.push("/win");
    } else if (life === 1) {
      router.push("/lose");
    } else {
      handleLife();
    }
  };

  console.log(answer);

  return (
    <BackgroundProvider>
      <SafeAreaViewProvider>
        <YStack
          padding="$4"
          alignItems="center"
          gap="$4"
          borderRadius="$4"
          backgroundColor="$color.primary700"
        >
          <Text color="$gray1">Life : {life}</Text>
          <Input
            value={userNumber}
            onChangeText={changeNumber}
            maxLength={2}
            keyboardType="number-pad"
            color="$color.accent500"
            fontSize="$9"
            width="$7"
            textAlign="center"
            borderWidth={0}
            borderRadius={0}
            borderBottomWidth="$1"
            borderBottomColor="$color.accent500"
            backgroundColor="$color.primary700"
          />
          <XStack gap="$4">
            <PrimaryButton onPress={handleReset}>Reset</PrimaryButton>
            <PrimaryButton onPress={handleSubmit}>Confirm</PrimaryButton>
          </XStack>
        </YStack>
        {chosenNumbers.length > 0 && (
          <XStack flexDirection="column" marginTop={24} gap="$4">
            {chosenNumbers.map((number, index) => (
              <XStack
                key={index}
                backgroundColor="$color.accent500"
                padding="$3"
                borderRadius="$4"
                alignItems="center"
                gap="$4"
              >
                <Text fontSize="$6" fontStyle="italic">
                  {number}
                </Text>
                <Text fontStyle="italic">
                  {number < answer
                    ? "The number is too low"
                    : "The number is too high"}
                </Text>
              </XStack>
            ))}
          </XStack>
        )}
      </SafeAreaViewProvider>
    </BackgroundProvider>
  );
}
