import "react-native-reanimated";

import { Button, StyleSheet, Text, View } from "react-native";

export default function RootLayout() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Hello world!</Text>
      <Text style={styles.text}>Another piece of text!</Text>
      <Button color="black" title="Tap me!" />
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
  text: {
    margin: 16,
    borderWidth: 2,
    borderColor: "red",
    padding: 16,
  },
  button: {
    backgroundColor: "black",
    color: "#fff",
  },
});

/**
 * React Native 에서 View 컴포넌트는 컴포넌트를 담는 데 사용하는 유일한 컨테이너 컴포넌트다.
 * View, Text, Image, TextInput, ScrollView, StyleSheet, Button, Switch
 */

/**
 * React Native는 css를 제공하지 않는다. 대신 두가지 방법으로 스타일을 정의함.
 * 1. 별도의 객체를 정의해서 프로퍼티로 전달
 * 2. 인라인 스타일을 추가해서 스타일 객체를 프로퍼티로 전달
 */
