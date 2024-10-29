import "react-native-reanimated";

import { StyleSheet, View, FlatList, Button } from "react-native";
import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import GoalItem from "@/components/GoalItem";
import GoalInput from "@/components/GoalInput";

export default function RootLayout() {
  const [goals, setGoals] = useState<string[]>([]);
  const [modalIsVisible, setModalIsVisible] = useState(false);

  const addGoalHandler = (goalItem: string) => {
    setGoals((prev) => [...prev, goalItem]);
  };

  const deleteGoalHandler = (goalItem: string) => {
    const nextTodos = goals.filter((goal) => goal !== goalItem);
    setGoals(nextTodos);
  };

  const openModal = () => {
    setModalIsVisible(true);
  };

  const closeModal = () => {
    setModalIsVisible(false);
  };

  return (
    <>
      <StatusBar style="light" />
      <View style={styles.appContainer}>
        <Button title="Add New Goal" color="#bb8bf9" onPress={openModal} />
        <GoalInput
          onGoal={addGoalHandler}
          goals={goals}
          isVisible={modalIsVisible}
          closeModal={closeModal}
        />
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
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
  },

  goalsContainer: {
    marginTop: 16,
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
