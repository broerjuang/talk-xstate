import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { createMachine } from "xstate";
import { HomeStackParams } from "../../navigations/HomeStackNavigation";

type Navigation = NativeStackNavigationProp<HomeStackParams, "home screen">;

export type Context = {
  navigation?: Navigation;
};

export type Events =
  | {
      type: "CLICK TRANSFER";
    }
  | {
      type: "BACK";
    };

export let transactionMachine = createMachine(
  {
    /** @xstate-layout N4IgpgJg5mDOIC5QBcBOBDAdrdBjZAlgPaYAEAtngBYGZgB0VR5YpsuqYYmAxAMIAZAJJ8A0qQAqAJQCCAOQDKAMQCiUgNoAGALqJQAByKwChEnpAAPRACYAzADZ6ARgDsADhcBWe54Asvp2sATjdfABoQAE9EAFpreyD6X3igoNs0zWtvFwBfHIi0LBx8YjJKXBo6ekLsADMwVDYOLl4AIRkxLV0kEENjU0xzKwQYoMcPNyDfT08gl0CZtwjokdCk+18QhxDJtz88-JBMIgg4cxrigYpqWjBzPpNSodinTxd6MY8gp3trazdQstYrZvB8UqEgsFrL5JrY8gUMNg8FdypUGEwWE1ONx7kZHmYesMYk5NIlPi5vr9-qFNE4gSMsr56KT-LZbIFNJ4nKlcocLsjStcKrdqojYPVGuxsYMeg8Bs8EPEmXsYdZXPYSUFNEsorE-PR3L4Ka8HHsvgcckA */
    id: "transaction machine",
    predictableActionArguments: true,
    initial: "home screen",
    context: {},
    schema: {
      events: {} as Events,
      context: {} as Context,
    },
    tsTypes: {} as import("./transaction.machine.typegen").Typegen0,
    states: {
      "home screen": {
        on: {
          "CLICK TRANSFER": {
            target: "transfer screen",
            actions: ["to transfer screen"],
          },
        },
      },

      "transfer screen": {
        on: {
          BACK: { target: "home screen", actions: ["go back"] },
        },
      },
    },
  },
  {
    actions: {
      "to transfer screen": (ctx) => {
        if (ctx.navigation) {
          ctx.navigation.navigate("transfer screen");
        }
      },
      "go back": (ctx) => {
        ctx?.navigation?.goBack();
      },
    },
  }
);
