import { Ionicons } from "@expo/vector-icons";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { TouchableOpacity } from "react-native";
import { useTransaction } from "../modules/transactions";
import { ContactScreen } from "../screens/ContactScreen";
import { HomeScreen } from "../screens/HomeScreen";
import { TransferScreen } from "../screens/TransferScreen";

export type HomeStackParams = {
  "home screen": undefined;
  "transfer screen": undefined;
  "contact screen": undefined;
};

/**
 * Utilities for Back button
 */

function BackButton() {
  let { send } = useTransaction();
  return (
    <TouchableOpacity
      onPress={() => {
        send({ type: "BACK" });
      }}
    >
      <Ionicons
        name="chevron-back-outline"
        size={24}
        style={{ marginLeft: -10 }}
      />
    </TouchableOpacity>
  );
}
const HomeStack = createNativeStackNavigator<HomeStackParams>();

export function HomeStackNavigation() {
  return (
    <HomeStack.Navigator
      screenOptions={{
        headerLeft: BackButton,
      }}
    >
      <HomeStack.Screen
        name="home screen"
        component={HomeScreen}
        options={{ headerShown: false }}
      />
      <HomeStack.Screen
        name="transfer screen"
        component={TransferScreen}
        options={{ title: "Transfer" }}
      />
      <HomeStack.Screen
        name="contact screen"
        component={ContactScreen}
        options={{ title: "Contact" }}
      />
    </HomeStack.Navigator>
  );
}
