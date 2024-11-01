import { TamaguiProvider as Provider } from "tamagui";
import appConfig from "../tamagui.config";
import { ToastProvider, ToastViewport } from "@tamagui/toast";
import { PropsWithChildren } from "react";
import { ColorSchemeName } from "react-native";
import { PrimaryToast } from "components/PrimaryToast";

interface Props {
  colorScheme: ColorSchemeName;
}

export default function TamaguiProvider({
  children,
  colorScheme,
}: PropsWithChildren<Props>) {
  return (
    <Provider config={appConfig} defaultTheme={colorScheme!}>
      <ToastProvider
        swipeDirection="horizontal"
        duration={6000}
        native={["mobile"]}
      >
        {children}
        <PrimaryToast />
        <ToastViewport top="$8" left={0} right={0} />
      </ToastProvider>
    </Provider>
  );
}
