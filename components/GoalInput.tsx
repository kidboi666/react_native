import { SetStateAction, useState } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";

interface Props {
  onGoal: (goalItem: string) => void;
  goals: string[];
}

const INIT_ERROR_STATE = {
  isError: false,
  message: "",
};

export default function GoalInput({ onGoal, goals }: Props) {
  const [goal, setGoal] = useState("");
  const [error, setError] = useState(INIT_ERROR_STATE);

  const goalInputHandler = (e: SetStateAction<string>) => {
    setGoal(e);
  };

  const addGoalHandler = () => {
    const isEqual = goals.find((currentGoal) => currentGoal === goal);
    if (isEqual) {
      setError({
        isError: true,
        message: "중복된 할일이 있습니다.",
      });
    } else {
      onGoal(goal);
      setGoal("");
    }
  };
  return (
    <>
      <View style={styles.inputBox}>
        <TextInput
          style={styles.textInput}
          placeholder="your course goal!"
          value={goal}
          onChangeText={goalInputHandler}
        />
        <Button title="add goal" onPress={addGoalHandler} />
      </View>
      {error.isError && <Text>{error.message}</Text>}
    </>
  );
}

const styles = StyleSheet.create({
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
});
