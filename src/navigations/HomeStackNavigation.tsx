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
  Amount: undefined;
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
      <Ionicons name="caret-back" />
    </TouchableOpacity>
  );
}
const HomeStack = createNativeStackNavigator<HomeStackParams>();

export function HomeStackNavigation() {
  let { send } = useTransaction();
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
        options={{ title: "Select Contact" }}
      />
      <HomeStack.Screen
        name="Amount"
        component={ContactScreen}
        options={{ title: "Contact" }}
      />
    </HomeStack.Navigator>
  );
}
