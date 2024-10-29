import "react-native-reanimated";

import {
  Button,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
  FlatList,
} from "react-native";
import { useEffect, useState } from "react";

const INIT_ERROR_STATE = {
  isError: false,
  message: "",
};

export default function RootLayout() {
  const [todos, setTodos] = useState<string[]>([]);
  const [text, setText] = useState("");
  const [error, setError] = useState(INIT_ERROR_STATE);

  const goalInputHandler = (e) => {
    setText(e);
  };

  const addGoalHandler = () => {
    const isEqual = todos.find((todo) => text === todo);
    if (!isEqual) {
      setTodos((prev) => [...prev, text]);
      setError(INIT_ERROR_STATE);
    } else {
      setError({ isError: true, message: "중복되는 할일이 있습니다." });
    }
  };

  const deleteGoalHandler = (selectedTodo) => {
    const nextTodos = todos.filter((todo) => todo !== selectedTodo);
    setTodos(nextTodos);
  };

  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <View style={styles.inputBox}>
          <TextInput
            style={styles.textInput}
            placeholder="your course goal!"
            value={text}
            onChangeText={goalInputHandler}
          />
          <Button title="add goal" onPress={addGoalHandler} />
        </View>
        {error.isError && <Text>{error.message}</Text>}
      </View>
      <View style={styles.goalsContainer}>
        <FlatList
          data={todos}
          renderItem={(itemData) => {
            return (
              <View style={styles.goalItem}>
                <Text style={styles.goalText}>{itemData.item}</Text>
                {/* React Native는 스타일 상속이 없다. */}
                <Button
                  color="#5e0acc"
                  title="x"
                  onPress={() => deleteGoalHandler(itemData.item)}
                />
              </View>
            );
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
  },
  inputContainer: {
    flex: 1,
    marginBottom: 12,
    borderBottomWidth: 1,
    borderBottomColor: "#cccccc",
  },
  inputBox: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#cccccc",
    width: "80%",
    marginRight: 8,
    padding: 8,
  },
  goalsContainer: {
    flex: 7,
  },
  goalItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    margin: 8,
    padding: 4,
    paddingHorizontal: 8,
    borderRadius: 6,
    backgroundColor: "#5e0acc",
  },
  goalText: {
    color: "#ffffff",
  },
});

/**
 * ios에서는 Text 자체에 준 스타일링은 제대로 먹히지않는다. View 컴포넌트 안에 Text요소를 넣어 스타일링을 해야 함. 세세하게 ios와 android의 차이를 잡아줘야 함.
 */

/**
 * ScrollView는 내용이 바뀔때마다 모든게 리렌더링됨
 * FlatList는 화면에 나와있는 부분에 변화가 있을때만 리렌더링됨
 */
