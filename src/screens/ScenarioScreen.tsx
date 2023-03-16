import { getSimplePaths } from "@xstate/graph";
import { ScrollView, Text, View } from "native-base";
import Tree from "react-native-json-tree";
import { applicationFlow } from "../flows/application.flow";
import { useApp } from "../flows/application.provider";

// import { applicationFlow } from "../../flows/application.flow";
// import { useApp } from "../../flows/application.provider";

// Taken from: https://codesandbox.io/s/xstate-checkout-app-example-cd168x?file=/src/index.js:858-962
let scenarios = getSimplePaths(applicationFlow, {
  events: {},
});

function findScenario(predicate) {
  return Object.values(scenarios).find(predicate);
}

let scenario = findScenario((scenario) => {
  return scenario.state.matches("idle");
});

export function ScenarioScreen() {
  let { state } = useApp();

  let arrivedAt =
    typeof scenario.state.value === "string"
      ? scenario.state.value
      : Object.values(scenario.state.value)[0] || ("" as string);

  return (
    <ScrollView>
      <View>
        <Tree
          data={{
            currentState: state.value,
            prevEvent: state.event,
            possibleEvent: state.nextEvents,
            context: state.context,
          }}
          hideRoot
        />
      </View>
      <View>
        {scenario.paths[0].segments.map((segment, id, segments) => {
          let state = Object.keys(segment.state.value)[0];

          let { transitions } = applicationFlow.transition(
            //@ts-ignore
            segment.state,
            segment.event
          );

          let transition = transitions[0];

          return (
            <View key={id}>
              <Text>
                on the {state}, {transition.eventType}{" "}
              </Text>
            </View>
          );
        })}
        <View>
          <Text>Then you will reach {arrivedAt as string}</Text>
        </View>
      </View>
    </ScrollView>
  );
}
