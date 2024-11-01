import { PropsWithChildren } from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";

export default function SafeAreaViewProvider({ children }: PropsWithChildren) {
  return (
    <SafeAreaProvider style={{ paddingHorizontal: 24, paddingTop: 64 }}>
      {children}
    </SafeAreaProvider>
  );
}
