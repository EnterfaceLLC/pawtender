import FontAwesome from "@expo/vector-icons/FontAwesome";
import Ionicons from '@expo/vector-icons/Ionicons';
import { Tabs } from "expo-router";
import { colors } from "../theme/colors";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: colors.green,
        tabBarInactiveTintColor: colors.grey,
        tabBarStyle: { backgroundColor: colors.darker },
        headerStyle: { backgroundColor: colors.green },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          headerShown: false,
          title: "Home",
          tabBarIcon: ({ color }) => (
            <FontAwesome size={22} name="paw" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          title: "Menu",
          tabBarIcon: ({ color }) => (
            <Ionicons name="menu-sharp" size={22} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
