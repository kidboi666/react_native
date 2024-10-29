import { SetStateAction, useState } from "react";
import {
  Button,
  Image,
  Modal,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";

interface Props {
  onGoal: (goalItem: string) => void;
  goals: string[];
  isVisible: boolean;
  closeModal: () => void;
}

const INIT_ERROR_STATE = {
  isError: false,
  message: "",
};

export default function GoalInput({
  onGoal,
  goals,
  isVisible,
  closeModal,
}: Props) {
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
    <Modal
      visible={isVisible}
      animationType="slide"
      presentationStyle="formSheet"
    >
      <View style={styles.inputContainer}>
        <Image
          source={require("../assets/images/flag.png")}
          style={styles.image}
        />
        <TextInput
          style={styles.textInput}
          placeholder="your course goal!"
          value={goal}
          onChangeText={goalInputHandler}
        />
        {error.isError && <Text>{error.message}</Text>}
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title="Add Goal" onPress={addGoalHandler} color="#6418c7" />
          </View>
          <View style={styles.button}>
            <Button title="Cancel" onPress={closeModal} color="#f31282" />
          </View>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
    gap: 8,
    backgroundColor: "#311b6b",
  },
  image: {
    width: 100,
    height: 100,
    margin: 20,
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#e4d0ff",
    backgroundColor: "#e4d0ff",
    borderRadius: 6,
    width: "100%",
    padding: 8,
  },
  buttonContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
    width: "100%",
  },
  button: {
    flex: 1,
    borderRadius: 6,
  },
});
