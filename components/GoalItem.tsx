import {
  View,
  Text,
  Button,
  ListRenderItemInfo,
  StyleSheet,
  Pressable,
} from "react-native";

interface Props {
  goalItem: ListRenderItemInfo<string>;
  onDelete: (goalItem: string) => void;
}

export default function GoalItem({ goalItem, onDelete }: Props) {
  return (
    <View style={styles.goalItem}>
      <Pressable
        android_ripple={{ color: "#dddddd" }}
        style={({ pressed }) => pressed && styles.pressedItem}
        onPress={() => onDelete(goalItem.item)}
      >
        <Text style={styles.goalText}>{goalItem.item}</Text>
        {/* React Native는 스타일 상속이 없다. */}
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  goalItem: {
    margin: 8,
    borderRadius: 6,
    backgroundColor: "#5e0acc",
  },
  pressedItem: {
    opacity: 0.5,
  },
  goalText: {
    padding: 8,
    color: "#ffffff",
  },
});
