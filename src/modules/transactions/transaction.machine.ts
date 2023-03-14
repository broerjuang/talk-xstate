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
    }
  | {
      type: "GO TO CONTACT SCREEN";
    }
  | {
      type: "CREATE NEW CONTACT";
    }
  | {
      type: "CLOSE";
    }
  | {
      type: "CONTACT CHOOSEN";
    };

export let transactionMachine = createMachine(
  {
    /** @xstate-layout N4IgpgJg5mDOIC5QBcBOBDAdrdBjZAlgPaYAEAtngBYGZgB0VR5YpsuqYYmAxAMIAZAJJ8A0qQAqAJQCCAOQDKAMQCiUgNoAGALqJQAByKwChEnpAAPRACYALJvq2AHAGZrAdgBsn97Z8v3FwAaEABPRABaaycAVnonJ00ATgBGGPdUpKSnAF8ckLQsHHxiMkpcGjp6QuwAMzBUNg4uXgAhGTEtXSQQQ2NTTHMrBCj0+myvTWtNGNsUtJSQ8JGXJPpNFOskr1t3dyc0z01PPIKMbDwBimpaBhrYesb2Tm4eAHEAeUkvvg+5CQ6ElICj4UhUKjkXXMfRMpSGNhS7no0yStmsMRSSWsPkSMSWiE21noqxisU0Tlstmy6VOIHul1K1wqt3ouBIyEuTRebQ6oihPRhA3hK28jhcnhiMw8mj8eLCBLcyNccxinmVxxSJ3ydPOxSu5UqDDZmA5+C5LX4fwBfCBfAAEh8PgoIfyDEZYWYesNZnFNuSXHM7ClKU58Ss1hstjs9gdVcdafSSiQmYbWezOc8WmmTZyADYEWDIfhgmQSFSkOQqADqpF+-0Brt67qFXps9noMSxMuiUvF4rDAScyKS5MpMqO7hS4oTuoZyYNLONpuQ5u42eXFCIEHQuf4AidKkbgrhrYQLk0SMp4o2TgyIbly1l600ASpMWsLlmTm8eW1mC3cDmIm+o3HQ0LNieoDDBEcy2GKEpSu444PpEAQuMSiSpPYgS3liM5FHOZSgQwTAsKugwChBnpQahdgdlsIZouSHjfmGURqvQaTkr4LixLEVIuPhFxJkRzJVPcjzkeB-SQZYCIOL4kpTCkCQBh47hsVO6GbJ4U6aPpGxJO+MRCXqjILlUS4Zs03DSR6FE0QgMToVSThbFpwYXhethhtEayzBe7iSkhgRJFqZwESJKaLumZqZmuVlmvmhZ2S2jkpBsjjZO5LguJ5IUDns6z2AcY5uR+dimYR0WWbFK7xZg66cuQW47qlsnDG+4y7IEfiuO42ISoVSIyv6nZoR+lJVVFFl3LqkkNdU80NKQtREKg5DtdRckIOiQ6Kfp1gqcq6lsX49CeNiwZHTEzm3aSv45EAA */
    id: "transaction machine",
    predictableActionArguments: true,
    initial: "home screen",
    context: {},
    schema: {
      context: {} as Context,
      events: {} as Events,
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
          "GO TO CONTACT SCREEN": {
            target: "contact screen",
            actions: ["to contact screen"],
          },
        },

        states: {
          "transfer form": {},
        },

        initial: "transfer form",
      },

      "contact screen": {
        on: {
          BACK: {
            target: "home screen",
            actions: ["back to home"],
          },

          "CONTACT CHOOSEN": {
            target: "transfer screen",
            actions: ["to transaction screen"],
          },
        },
        initial: "contact list",
        states: {
          "contact list": {
            on: {
              "CREATE NEW CONTACT": "contact modal",
            },
          },

          "contact modal": {
            on: {
              CLOSE: "contact list",
            },
          },
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
      "to contact screen": (ctx) => {
        ctx?.navigation?.navigate("contact screen");
      },
      "go back": (ctx) => {
        ctx?.navigation?.goBack();
      },
      "to transaction screen": (ctx) => {
        ctx?.navigation?.navigate("transfer screen");
      },
      "back to home": (ctx) => {
        ctx?.navigation?.navigate("home screen");
      },
    },
  }
);
