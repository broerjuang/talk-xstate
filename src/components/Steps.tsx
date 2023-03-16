// import { Text, View } from "react-native";
// import { applicationFlow } from "../application.flow";
// import { useApp } from "../application.provider";

// import {
//   contactModalPath,
//   contactModalScenario,
//   getMeta,
// } from "../scenarios/transfer.scenario";

// type Props = {
//   paths: any;
//   scenario: any;
// };

// export function Steps() {
//   let { state } = useApp();
//   return (
//     <View>
//       <View>
//         <Text>{state.context.amount}</Text>
//       </View>
//       {contactModalPath[0].segments.map((segment, id, segments) => {
//         let { description } = getMeta(segment.state);
//         let { transitions } = applicationFlow.transition(
//           // @ts-ignore
//           segment.state,
//           segment.event
//         );
//         const sameState = segment.state.matches(segments[id - 1]?.state.value);
//         const transition = transitions[0];
//         return (
//           <View key={id}>
//             {!sameState && (
//               <View>
//                 <Text>on the {description},</Text>
//               </View>
//             )}
//             <View>
//               {sameState && <span>... and then </span>}
//               {(transition.meta?.description && (
//                 <Text>{transition.meta.description}</Text>
//               )) || (
//                 <>
//                   Execute event <Text>{transition.eventType}</Text>
//                 </>
//               )}
//               {/* <Text>
//                 {transition.cond?.meta?.description
//                   ? ` (${transition.cond?.meta?.description})`
//                   : ""}
//               </Text> */}
//             </View>
//           </View>
//         );
//       })}
//       <View>
//         Then you will reach{" "}
//         <Text>{getMeta(contactModalScenario.state).description}</Text>
//       </View>
//     </View>
//   );
// }
