import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useMachine } from "@xstate/react";
import { createContext, useContext, useEffect } from "react";
import { Text } from "react-native";
import { HomeStackParams } from "../../navigations/HomeStackNavigation";
import { transactionMachine } from "./transaction.machine";

type TransactionProviderValue = {};

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

export function TransactionProvider(props: Props) {
  let navigation = useNavigation<Navigation>();
  let [state, send] = useMachine(transactionMachine, {
    actions: {
      "go to transfer screen": () => {
        navigation.navigate("transfer screen");
      },
    },
  });

  useEffect(() => {
    console.log("test");
    navigation.addListener("blur", (event) => {
      console.log("blur", event);
    });

    navigation.addListener("focus", (event) => {
      console.log("focus", event);
    });

    navigation.addListener("beforeRemove", (event) => {
      console.log("beforeRemove", event);
    });

    // return listener;
  }, []);

  //   useEffect(() => {
  //     let backButton = () => {
  //       send({ type: "BACK" });
  //       return true;
  //     };
  //     let subscibe = BackHandler.addEventListener(
  //       "hardwareBackPress",
  //       backButton
  //     );
  //     return () => subscibe.remove();
  //   });

  // useEffect(() => {
  //   navigation.addListener("beforeRemove", (event) => {
  //     event.preventDefault();
  //     console.log("test");
  //     send({ type: "BACK" });
  //   });
  // }, []);

  return (
    <TransactionProviderContext.Provider value={{ state, send }}>
      <Text style={{ marginTop: 50 }}>{JSON.stringify(state.value)}</Text>
      {props.children}
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
