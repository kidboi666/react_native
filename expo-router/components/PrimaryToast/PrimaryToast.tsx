import { Toast, useToastState } from "@tamagui/toast";
import { YStack, isWeb } from "tamagui";

export function PrimaryToast() {
  const currentToast = useToastState();

  if (!currentToast || currentToast.isHandledNatively) return null;

  return (
    <Toast
      key={currentToast.id}
      duration={currentToast.duration}
      viewportName={currentToast.viewportName}
      enterStyle={{ opacity: 0, scale: 0.5, y: -25 }}
      exitStyle={{ opacity: 0, scale: 1, y: -20 }}
      y={isWeb ? "$12" : 0}
      theme="purple"
      br="$6"
      animation="quick"
    >
      <YStack ai="center" p="$2" gap="$2">
        <Toast.Title fow="bold">{currentToast.title}</Toast.Title>
        {!!currentToast.message && (
          <Toast.Description>{currentToast.message}</Toast.Description>
        )}
      </YStack>
    </Toast>
  );
}
