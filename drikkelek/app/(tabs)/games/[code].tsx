import { ThemedText } from "@/components/ThemedText";
import { useLocalSearchParams } from "expo-router";
import { View, Text, StyleSheet } from "react-native";

export default function DetailsScreen() {
  const { code } = useLocalSearchParams();

  return (
    <View style={styles.container}>
      <ThemedText>Details of user {code} </ThemedText>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
