// This file was automatically generated. Edits will be overwritten

export interface Typegen0 {
  "@@xstate/typegen": true;
  internalEvents: {
    "done.invoke.application flow.loading:invocation[0]": {
      type: "done.invoke.application flow.loading:invocation[0]";
      data: unknown;
      __tip: "See the XState TS docs to learn how to strongly type this.";
    };
    "xstate.init": { type: "xstate.init" };
  };
  invokeSrcNameMap: {
    "get balance": "done.invoke.application flow.loading:invocation[0]";
  };
  missingImplementations: {
    actions: never;
    delays: never;
    guards: never;
    services: never;
  };
  eventsCausingActions: {
    "go back": "BACK";
    "set amount": "done.invoke.application flow.loading:invocation[0]";
    "set show balance": "TOGGLE_BALANCE";
    "set trasfer account number": "SELECT_CONTACT";
    "to add money screen": "CLICK_ADD_MONEY";
    "to home screen": "YES";
    "to qris screen": "CLICK_QRIS";
  };
  eventsCausingDelays: {};
  eventsCausingGuards: {};
  eventsCausingServices: {
    "get balance": "xstate.init";
  };
  matchesStates:
    | "add money screen"
    | "error screen"
    | "home screen"
    | "home screen.idle"
    | "loading"
    | "qris screen"
    | "transfer screen"
    | "transfer screen.alert"
    | "transfer screen.amount form"
    | "transfer screen.contact list"
    | {
        "home screen"?: "idle";
        "transfer screen"?: "alert" | "amount form" | "contact list";
      };
  tags: "loading";
}
