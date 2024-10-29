import "react-native-reanimated";

import { Button, StyleSheet, Text, View } from "react-native";

export default function RootLayout() {
  return (
    <View style={styles.container}>
      <Text>Hello world!</Text>
      <Text>Another piece of text!</Text>
      <Button title="Tap me!" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

/**
 * React Native 에서 View 컴포넌트는 컴포넌트를 담는 데 사용하는 유일한 컨테이너 컴포넌트다.
 * View, Text, Image, TextInput, ScrollView, StyleSheet, Button, Switch
 */
