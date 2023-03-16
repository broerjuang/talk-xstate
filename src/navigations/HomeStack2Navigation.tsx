import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
} from "@react-navigation/native-stack";

import { AddMoneyScreen } from "../screens/v2/AddMoneyScreen";
import { ContactScreen } from "../screens/v2/ContactScreen";
import { ErrorScreen } from "../screens/v2/ErrorScreen";
import { HomeScreen } from "../screens/v2/HomeScreen";
import { QRISScreen } from "../screens/v2/QRISScreen";
import { TransferScreen } from "../screens/v2/TransferScreen";

export type HomeStackParams = {
  "home screen v2": undefined;
  "transfer screen v2": undefined;
  "contact screen v2": undefined;
  "error screen v2": undefined;
  "qris screen v2": undefined;
  "add money screen v2": undefined;
};

export type NavigationV2 = NativeStackNavigationProp<
  HomeStackParams,
  "home screen v2"
>;

/**
 * Utilities for Back button
 */

const HomeStack = createNativeStackNavigator<HomeStackParams>();

export function HomeStackNavigation2() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name="home screen v2"
        component={HomeScreen}
        options={{ headerShown: false }}
      />
      <HomeStack.Screen
        name="transfer screen v2"
        component={TransferScreen}
        options={{ title: "Transfer v2" }}
      />
      <HomeStack.Screen
        name="contact screen v2"
        component={ContactScreen}
        options={{ title: "Contact v2" }}
      />
      <HomeStack.Screen
        name="error screen v2"
        component={ErrorScreen}
        options={{ title: "Error Screen v2" }}
      />
      <HomeStack.Screen
        name="qris screen v2"
        component={QRISScreen}
        options={{ title: "QRIS v2" }}
      />
      <HomeStack.Screen
        name="add money screen v2"
        component={AddMoneyScreen}
        options={{ title: "Add Money v2" }}
      />
    </HomeStack.Navigator>
  );
}
