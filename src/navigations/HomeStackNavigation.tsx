import { Ionicons } from "@expo/vector-icons";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useEffect } from "react";
import { BackHandler, TouchableOpacity } from "react-native";
import { useApp } from "../flows/application.provider";

import { AddMoneyScreen } from "../screens/AddMoneyScreen";
import { ErrorScreen } from "../screens/ErrorScreen";
import { HomeScreen } from "../screens/HomeScreen";
import { QRISScreen } from "../screens/QRISScreen";
import { TransferScreen } from "../screens/TransferScreen";

export type HomeStackParams = {
  "home screen": undefined;
  "transfer screen": undefined;
  "contact screen": undefined;
  "error screen": undefined;
  "qris screen": undefined;
  "add money screen": undefined;
};

/**
 * Utilities for Back button
 */

function BackButton() {
  let { send, state } = useApp();
  let handleBackButtonClick = () => {
    send({ type: "BACK" });
    return true;
  };
  // TODO: there's still bug
  useEffect(() => {
    BackHandler.addEventListener("hardwareBackPress", handleBackButtonClick);
    return () => {
      BackHandler.removeEventListener(
        "hardwareBackPress",
        handleBackButtonClick
      );
    };
  }, [state.context.navigation]);

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
        name="error screen"
        component={ErrorScreen}
        options={{ title: "Contact" }}
      />
      <HomeStack.Screen
        name="qris screen"
        component={QRISScreen}
        options={{ title: "QRIS" }}
      />
      <HomeStack.Screen
        name="add money screen"
        component={AddMoneyScreen}
        options={{ title: "Add Money" }}
      />
    </HomeStack.Navigator>
  );
}
