import { PropsWithChildren } from "react";
import { Button, Text } from "tamagui";

interface Props {
  onPress: () => void;
}

export const PrimaryButton = ({
  children,
  onPress,
}: PropsWithChildren<Props>) => {
  return (
    <Button
      onPress={onPress}
      pressStyle={{
        backgroundColor: "$color.primary500",
        opacity: 0.75,
      }}
      borderRadius={24}
      flex={1}
      padding={8}
      backgroundColor="$color.primary500"
    >
      <Text fontWeight="bold" textAlign="center" color="#fff">
        {children}
      </Text>
    </Button>
  );
};
