import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useMachine } from "@xstate/react";
import { createContext, useContext } from "react";
import { Text } from "react-native";
import { HomeStackParams } from "../../navigations/HomeStackNavigation";
import { Context, Events, transactionMachine } from "./transaction.machine";

type TransactionProviderValue = {
  context: Context;
  send: (event: Events) => void;
};

let TransactionProviderContext = createContext<
  TransactionProviderValue | undefined
>(undefined);

type Navigation = NativeStackNavigationProp<
  HomeStackParams,
  "home screen"
> & {};
type Props = {
  children: React.ReactNode;
};

export function TransactionProvider({ children }: Props) {
  let navigation = useNavigation<Navigation>();
  let [{ context, value }, send] = useMachine(transactionMachine, {
    context: {
      navigation,
    },
  });

  return (
    <TransactionProviderContext.Provider value={{ context, send }}>
      <Text style={{ marginTop: 50 }}>{JSON.stringify(value)}</Text>
      {children}
    </TransactionProviderContext.Provider>
  );
}

export function useTransaction() {
  let context = useContext(TransactionProviderContext);
  if (!context) {
    throw new Error(
      "use Transaction only can be used inside the dashboard provider"
    );
  }

  return context;
}
