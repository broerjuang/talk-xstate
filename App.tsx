import { NavigationContainer } from "@react-navigation/native";
import { StyleSheet } from "react-native";
import { TransactionProvider } from "./src/modules/transactions";
import { RootNavigation } from "./src/navigations/RootNavigation";

export default function App() {
  return (
    <NavigationContainer>
      <TransactionProvider>
        <RootNavigation />
      </TransactionProvider>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
