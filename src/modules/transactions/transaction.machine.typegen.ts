// This file was automatically generated. Edits will be overwritten

export interface Typegen0 {
  "@@xstate/typegen": true;
  internalEvents: {
    "xstate.init": { type: "xstate.init" };
  };
  invokeSrcNameMap: {};
  missingImplementations: {
    actions: never;
    delays: never;
    guards: never;
    services: never;
  };
  eventsCausingActions: {
    "back to home": "BACK";
    "go back": "BACK";
    "to contact screen": "GO TO CONTACT SCREEN";
    "to transaction screen": "CONTACT CHOOSEN";
    "to transfer screen": "CLICK TRANSFER";
  };
  eventsCausingDelays: {};
  eventsCausingGuards: {};
  eventsCausingServices: {};
  matchesStates:
    | "contact screen"
    | "contact screen.contact list"
    | "contact screen.contact modal"
    | "home screen"
    | "transfer screen"
    | "transfer screen.transfer form"
    | {
        "contact screen"?: "contact list" | "contact modal";
        "transfer screen"?: "transfer form";
      };
  tags: never;
}
