import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { assign, createMachine, InterpreterFrom, StateFrom } from "xstate";
import { ContactT } from "../components/Contact";
import { HomeStackParams } from "../navigations/HomeStackNavigation";

type TMachine = typeof applicationFlow;
type TInterpreter = InterpreterFrom<TMachine>;
export type Prop<T, K> = K extends keyof T ? T[K] : never;
export type Send = Prop<TInterpreter, "send">;
export type State = StateFrom<TMachine>;
export type Navigation = NativeStackNavigationProp<
  HomeStackParams,
  "home screen"
>;

type Context = {
  amount: number;
  navigation?: Navigation;
  showBalance: boolean;
  transferTo?: ContactT;
};

type Events =
  | {
      type: "CLICK_ADD_MONEY";
    }
  | {
      type: "CLICK_TRANSFER";
    }
  | {
      type: "CLICK_QRIS";
    }
  | {
      type: "BACK";
    }
  | {
      type: "TOGGLE_BALANCE";
    }
  | { type: "SEARCH CONTACT"; payload: string }
  | {
      type: "SELECT_CONTACT";
      payload: ContactT;
    }
  | {
      type: "FILL_AMOUNT";
      payload: number;
    }
  | {
      type: "CANCEL";
    }
  | { type: "YES" }
  | {
      type: "NO";
    };

export let applicationFlow = createMachine(
  {
    /** @xstate-layout N4IgpgJg5mDOIC5QEMAOqA2BLAxsgLlgPYB2ABAGYZEDuAdNchFiVAMQSlh0sBuRAa25pMuAsXJVaDIkxZQEfInkKkA2gAYAupq2JQqIrCyqS+kAA9EAJgAsAVjoB2ABwBGOxtvf792xqcAGhAAT0Q3ADY3OgBOF1sAZhiIhySNGOsAX0zgkWwVCUpqekZmVjYwACdKokq6TAIKWoBbOjyxUyLpUvlFEn4C9W1dc0NjU3MrBDtHVw9-bwc-AOCwhATrDViI9JcnJwiXCL8I7Nz0fPFSLvoACyJmsDJYHEqwMBI2AGEAGQBJL4AaQA+gBBAAi4OBAFkAPIAOQAogBNEZIEBjEwSSaICIxLZONzpWwRHbWJwxfarRD2TZ0ay0nbHYmJU45EDtQaSYp0e6PZ6vd6fX4AkEARQASn8AMpogxGLGkHEIJx0wnE0kacmUoKhcL7WL2BIeaxxCIzBIuM4ci4dQpSO4PJ4vN4fb7-IHAgAqEtB8OlADFERK5RiFRN0VMXNZrPTjrYid5SQmEtTpjFohE5m4Elr-MkYrZrZyrtzpHznYKPjwIBgwGwvbCAOJNn6I4EAIVBPz9X0RocxEdAUx8dGNTi1ROZvlTevW0XJ9gCSTcFKctlNbPOoi5NzaEAgZGaXBCAtdny7QIH4exkcQE4JRMLmu1VLnG4Szhihej9jcHg0BIi3ZEtOgdOgAEdKiwWAzyFNhL0Ba9xlvYd7zVJ8STJNddTWdw6Fsb9vxcOIXA0DQ-xiYtbV3cD8EqZASFgCgqjgt1EOQxUzDvBA3FsFwXAIrxSRcGd9m8NNrGiI1vwSBJVSzSk5OondSz3ejGOY1iXXgji3D0dFB1Qyxwn4wSFhEsT11sNN-y2QDZLcATyPcDMVMuMCeQ0piWMqNiSDoHBSHwZAcHwMhsFgfA2GlRFQQlL4AAkyC+BEvVBL4vU4ocTN4qTYwo5JfG8VcgMkil6W-WkEnsZI9g0K0QJotS6IYnztKrAKgpIEKwoimDotittMuBVL4XSzLsuMqYPEpMc9hqxSAn-XDEH4xwNH-FISVzKJCKcdy7WuVrNN8-y2mPABXHrKBab5e0RH4pqVHi3FpaIyNXDNvH2AtJMOWINHNP8jmjfwc0O2ivLarS-J06tkCum6mkqZo2ADP4fh+ME4QAVXG57uLQ3jXLoSIgPklwaoaii03zel-DxI0StVPxIZa6HTo688LqIa7wpRtGOO0UYbxe4m3BiexBIyCjRPk81bCcWc1iV6J1yBqWgITVngO3Dz7U59q4c6to60qaL4VhQnlRzBIIjoPMAnNdx1rcWzC1iDJ7HVcm9gZdnPOkbzYfO5Bzei5FEVlEXDLFoncqJLwGeOWkjgOc0IjTKJYjIzYjSSawyTcbJ2RIIgIDgcxQMN2hRZQ8XcoAWizucm8iaSN0OGJ7c16wjkD2uSlkMooHrrjlQ3Wz12cTDtSlmTB+OnkK388ecqmJInDHVdJyBpcZzTJuZ68IuMzen2nD8BIl7LR1+XhgKsFrMB1+mmktToY5DncKT9s2FW4QNjOH7lJASlJqoUVvnuJgh5jwkDAKeR+b9G5THxFsUSb1PAiTiIAhASwxy1XkvxOqok9Y2lUkHegVQagm3PCghOI4i5kylqaTab1+ITlWusDcsR5IyT4krVm0DwJQRgmvOODdGGIGco7AIv8r4BAODEWyOZHa1RIlTLMDgsz2BEUbUOyDJET1epEWw6iip+B1mVOcMY6AyR7v+JylJDglyapQoedAQ5nUfoFYKoVwqRXwAw22dhPybATFTWSmxjhpjkuYikz5Cw9wZBkA67iDbL2DjDHxptEZ82Ri0EJr1CSxh7uaIkCs7DKzpt+AiPd5LGiiHsPY+jslczoUKM2VRgnGI3kApWY5vBJBqsaaWfhbKJC9mk0+PtTSWjaffSsPMEE0GeCFfATw3DFOJuMug8Q5K+E2GEoGtlPwOFVLJMiPtz5smyEAA */
    id: "application flow",
    predictableActionArguments: true,
    tsTypes: {} as import("./application.flow.typegen").Typegen0,
    schema: {
      context: {} as Context,
      events: {} as Events,
      services: {} as {
        "get balance": {
          data: {
            data: {
              amount: number;
            };
          };
        };
      },
    },
    context: {
      amount: 0,
      showBalance: true,
    },
    initial: "loading",
    states: {
      loading: {
        tags: "loading",
        invoke: {
          src: "get balance",
          onDone: {
            target: "home screen",
            actions: ["set amount"],
          },
          onError: {
            target: "error screen",
            actions: [(ctx) => ctx?.navigation?.navigate("error screen")],
          },
        },
      },

      "home screen": {
        on: {
          CLICK_ADD_MONEY: {
            target: "add money screen",
            actions: ["to add money screen"],
          },

          CLICK_QRIS: {
            target: "qris screen",
            actions: ["to qris screen"],
          },

          CLICK_TRANSFER: {
            target: "transfer screen",
            actions: [(ctx) => ctx?.navigation?.navigate("transfer screen")],
          },
        },

        states: {
          idle: {
            on: {
              TOGGLE_BALANCE: {
                target: "idle",
                internal: true,
                actions: "set show balance",
              },
            },
          },
        },

        initial: "idle",
      },

      "add money screen": {
        on: {
          BACK: {
            target: "home screen",
            actions: ["go back"],
          },
        },
      },

      "error screen": {},

      "qris screen": {
        on: {
          BACK: {
            target: "home screen",
            actions: ["go back"],
          },
        },
      },

      "transfer screen": {
        states: {
          "contact list": {
            on: {
              "SEARCH CONTACT": {
                target: "contact list",
                internal: true,
              },

              SELECT_CONTACT: {
                target: "amount form",
                actions: ["set trasfer account number"],
              },
            },
          },

          "amount form": {
            on: {
              CANCEL: {
                target: "contact list",
                internal: true,
              },

              FILL_AMOUNT: {
                target: "amount form",
                internal: true,
              },
              BACK: {
                target: "contact list",
                internal: true,
              },
            },
          },

          alert: {
            on: {
              NO: "contact list",
              YES: {
                target: "#application flow.home screen.idle",
                actions: [
                  (ctx) => {
                    ctx.transferTo = undefined;
                  },
                  "to home screen",
                ],
              },
            },
          },
        },

        initial: "contact list",

        on: {
          BACK: [
            {
              target: "home screen",
              cond: (ctx) => typeof ctx.transferTo === "undefined",
              actions: ["go back"],
            },
            ".alert",
          ],
        },
      },
    },
  },
  {
    actions: {
      "set amount": assign((_ctx, event) => ({
        // This is a fallback to check the steps
        amount: event.data?.data?.amount || 0,
      })),
      "to qris screen": (ctx) => {
        ctx?.navigation?.navigate("qris screen");
      },
      "set show balance": assign((ctx) => {
        return {
          showBalance: !ctx.showBalance,
        };
      }),
      "to add money screen": (ctx) => {
        ctx?.navigation?.navigate("add money screen");
      },
      "go back": (ctx) => {
        ctx?.navigation?.goBack();
      },
      "set trasfer account number": assign((ctx, event) => {
        return {
          transferTo: event.payload,
        };
      }),
      "to home screen": (ctx) => {
        ctx?.navigation?.navigate("home screen");
      },
    },
    services: {
      "get balance": (context, event) => {
        return new Promise((resolve, reject) =>
          setTimeout(resolve, 2000, {
            data: {
              amount: 2000,
            },
          })
        );
      },
    },
  }
);
