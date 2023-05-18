import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";

export default function App() {
  return (
    <View className="bg-zinc-950 flex-1 items-center justify-center text-zinc-50">
      <Text className="font-bold text-5xl">
        Open up App.js to start working on your app!
      </Text>
      <StatusBar style="auto" />
    </View>
  );
}
