import { createMachine } from "xstate";

export let transactionMachine = createMachine({
  /** @xstate-layout N4IgpgJg5mDOIC5QBcBOBDAdrdBjZAlgPaYAEAtngBYGZgB0VR5YpsuqYYmAxAMIAZAJJ8A0qQAqAJQCCAOQDKAMQCiUgNoAGALqJQAByKwChEnpAAPRAEYALACZ6AZgAc9l9fsBWADQgAnogAtLbW9JouXgCcTgDsXgC+CX5oWDj4xGSUuDR09KnYAGZgqGwcXJj5GNh4pmSFRKjkPAoAqgBCALJCElq6SCCGxnXmVgi2E-T21i7xfoEI1tZR9F4AbGu2mmveSckgmEQQcOYF6XUU1LRg5kMmmaPBsS7OcwHBni9ekTHxSSnVc6ZS45a6MZisdicbi3Iz3MwDMZBJyaV6+d4IEJhCLROKJfZnWrA7K5BhnYqlKEVWHDB6IxBOLy2egeTbbbzzYJOFaaJlrWb4gFpIkkEGkqppCllaGVQkZUUNJo0+GYR7jTSOVlbHboha2WL0CZeJyeQUgOUXElg8klaUVej6VBEXBwYyYKCkG2oZUjenjawG9m6xD2TTMuxBvYJIA */
  id: "transaction machine",
  initial: "home screen",
  states: {
    "home screen": {
      on: {
        "CLICK TRANSFER": {
          target: "transfer screen",
          actions: ["go to transfer screen"],
        },
      },
    },

    "transfer screen": {
      on: {
        BACK: "home screen",
      },
    },
  },
});
