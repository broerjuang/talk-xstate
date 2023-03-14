import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { ContactScreen } from "../screens/ContactScreen";
import { HomeScreen } from "../screens/HomeScreen";
import { TransferScreen } from "../screens/TransferScreen";

export type HomeStackParams = {
  "home screen": undefined;
  "transfer screen": undefined;
  Amount: undefined;
};

const HomeStack = createNativeStackNavigator<HomeStackParams>();

export function HomeStackNavigation() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name="home screen"
        component={HomeScreen}
        options={{ headerShown: false }}
        // initialParams={{ machine: transferMachine.initialState }}
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
