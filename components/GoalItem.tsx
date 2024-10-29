import {
  View,
  Text,
  Button,
  ListRenderItemInfo,
  StyleSheet,
} from "react-native";

interface Props {
  goalItem: ListRenderItemInfo<string>;
  onDelete: (goalItem: string) => void;
}

export default function GoalItem({ goalItem, onDelete }: Props) {
  return (
    <View style={styles.goalItem}>
      <Text style={styles.goalText}>{goalItem.item}</Text>
      {/* React Native는 스타일 상속이 없다. */}
      <Button
        color="#5e0acc"
        title="x"
        onPress={() => onDelete(goalItem.item)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
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
