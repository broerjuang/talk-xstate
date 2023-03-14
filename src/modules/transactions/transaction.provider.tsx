import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useMachine } from "@xstate/react";
import { createContext, useContext } from "react";
import { InterpreterFrom, StateFrom } from "xstate";
import { HomeStackParams } from "../../navigations/HomeStackNavigation";
import { transactionMachine } from "./transaction.machine";

/**
 * This function helper is taken from
 * https://github.com/statelyai/xstate/blob/main/packages/xstate-react/src/useMachine.ts#L62
 */
export type Prop<T, K> = K extends keyof T ? T[K] : never;
type TMachine = typeof transactionMachine;
type TInterpreter = InterpreterFrom<TMachine>;
type Send = Prop<TInterpreter, "send">;

type TransactionProviderValue = {
  state: StateFrom<TMachine>;
  send: Send;
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
  let [state, send] = useMachine(transactionMachine, {
    context: {
      navigation,
    },
  });

  return (
    <TransactionProviderContext.Provider value={{ state, send }}>
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
