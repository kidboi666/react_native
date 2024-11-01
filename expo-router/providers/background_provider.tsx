import { LinearGradient } from "expo-linear-gradient";
import { PropsWithChildren } from "react";
import { ImageBackground } from "react-native";
import { getToken } from "tamagui";

export default function BackgroundProvider({ children }: PropsWithChildren) {
  return (
    <LinearGradient
      colors={[getToken("$color.primary500"), getToken("$color.accent500")]}
      style={{ flex: 1 }}
    >
      <ImageBackground
        source={require("../assets/images/dices.jpg")}
        resizeMode="cover"
        style={{ flex: 1 }}
        imageStyle={{ opacity: 0.15 }}
      >
        {children}
      </ImageBackground>
    </LinearGradient>
  );
}
