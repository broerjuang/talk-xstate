import { NavigationContainer } from "@react-navigation/native";
import { NativeBaseProvider } from "native-base";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { AppProvider } from "./src/flows/application.provider";

import { RootNavigation } from "./src/navigations/RootNavigation";

export default function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <NativeBaseProvider>
        <NavigationContainer>
          <AppProvider>
            <RootNavigation />
          </AppProvider>
        </NavigationContainer>
      </NativeBaseProvider>
    </GestureHandlerRootView>
  );
}
