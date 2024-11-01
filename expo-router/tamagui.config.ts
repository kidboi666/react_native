import { createTamagui } from "tamagui";
import { config } from "@tamagui/config/v3";

export const tamaguiConfig = createTamagui({
  ...config,
  tokens: {
    ...config.tokens,
    color: {
      primary500: "#72063c",
      primary600: "#640233",
      primary700: "#4e0329",
      primary800: "#3b021f",
      accent500: "#ddb52f",
    },
  },
});

export default tamaguiConfig;

export type Conf = typeof tamaguiConfig;

declare module "tamagui" {
  interface TamaguiCustomConfig extends Conf {}
}
