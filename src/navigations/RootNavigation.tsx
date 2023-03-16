import { Ionicons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { PRIMARY_COLOR } from "../constants/colors";
import { ScenarioScreen } from "../screens/ScenarioScreen";
import { HomeStackNavigation } from "./HomeStackNavigation";

const Tab = createBottomTabNavigator();

export function RootNavigation() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: PRIMARY_COLOR,
      }}
    >
      <Tab.Screen
        name="Home 1"
        component={HomeStackNavigation}
        options={{
          headerShown: false,
          tabBarIcon: ({ color }) => {
            return <Ionicons name="home-outline" size={24} color={color} />;
          },
        }}
      />
      <Tab.Screen
        name="scenarios"
        component={ScenarioScreen}
        options={{
          tabBarIcon: ({ color }) => {
            return <Ionicons name="settings" size={24} color={color} />;
          },
        }}
      />
    </Tab.Navigator>
  );
}
