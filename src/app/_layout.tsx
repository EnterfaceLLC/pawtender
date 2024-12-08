//* //
import { GestureHandlerRootView } from "react-native-gesture-handler";

//* EXPO ROUTER //
import { Stack } from "expo-router";

//* ROOT //
export default function RootLayout() {
  return (
    <GestureHandlerRootView>
      <Stack screenOptions={{ headerShown: false }} />
    </GestureHandlerRootView>
  );
}
