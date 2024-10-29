import "react-native-reanimated";

import { StyleSheet, View, FlatList } from "react-native";
import { useState } from "react";
import GoalItem from "@/components/GoalItem";
import GoalInput from "@/components/GoalInput";

export default function RootLayout() {
  const [goals, setGoals] = useState<string[]>([]);

  const addGoalHandler = (goalItem: string) => {
    setGoals((prev) => [...prev, goalItem]);
  };

  const deleteGoalHandler = (goalItem: string) => {
    const nextTodos = goals.filter((goal) => goal !== goalItem);
    setGoals(nextTodos);
  };

  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <GoalInput onGoal={addGoalHandler} goals={goals} />
      </View>
      <View style={styles.goalsContainer}>
        <FlatList
          data={goals}
          renderItem={(itemData) => {
            return (
              <GoalItem goalItem={itemData} onDelete={deleteGoalHandler} />
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
  goalsContainer: {
    flex: 7,
  },
});

/**
 * ios에서는 Text 자체에 준 스타일링은 제대로 먹히지않는다. View 컴포넌트 안에 Text요소를 넣어 스타일링을 해야 함. 세세하게 ios와 android의 차이를 잡아줘야 함.
 */

/**
 * ScrollView는 내용이 바뀔때마다 모든게 리렌더링됨
 * FlatList는 화면에 나와있는 부분에 변화가 있을때만 리렌더링됨
 */
