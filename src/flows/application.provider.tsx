import { useNavigation } from "@react-navigation/native";
import { useMachine } from "@xstate/react";
import { createContext, useContext } from "react";
import { applicationFlow, Navigation, Send, State } from "./application.flow";

type ContextValue = {
  send: Send;
  state: State;
};

const ApplicationContext = createContext<ContextValue | undefined>(undefined);

export function AppProvider(props: { children: React.ReactNode }) {
  let navigation = useNavigation<Navigation>();
  let [state, send] = useMachine(applicationFlow, {
    context: {
      navigation,
    },
  });
  return (
    <ApplicationContext.Provider value={{ state, send }}>
      {props.children}
    </ApplicationContext.Provider>
  );
}

export function useApp() {
  let context = useContext(ApplicationContext);
  if (!context) {
    throw new Error("useApp should be used inside ApplicationProvider");
  }
  return context;
}
