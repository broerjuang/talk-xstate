import { Ionicons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { PRIMARY_COLOR } from "../constants/colors";
import { SettingScreen } from "../screens/SettingScreen";
import { HomeStackNavigation } from "./HomeStackNavigation";

const Tab = createBottomTabNavigator();

export function RootNavigation() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarActiveTintColor: PRIMARY_COLOR,
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeStackNavigation}
        options={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarIcon: ({ color }) => {
            return <Ionicons name="home-outline" size={24} color={color} />;
          },
        }}
      />
      <Tab.Screen
        name="Settings"
        component={SettingScreen}
        options={{
          tabBarIcon: ({ color }) => {
            return <Ionicons name="settings-outline" size={24} color={color} />;
          },
        }}
      />
    </Tab.Navigator>
  );
}
