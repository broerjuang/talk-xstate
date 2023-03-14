import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useTransaction } from "../modules/transactions";

export function ContactScreen() {
  let { state, send } = useTransaction();

  return (
    <View style={styles.container}>
      <Text>{JSON.stringify(state.value, null, 2)}</Text>
      <TouchableOpacity onPress={() => send({ type: "CONTACT CHOOSEN" })}>
        <Text>Contact Choosen</Text>
      </TouchableOpacity>
      {state.matches({ "contact screen": "contact list" }) && (
        <View>
          <Text>Contact List</Text>
          <TouchableOpacity
            onPress={() => {
              send({ type: "CREATE NEW CONTACT" });
            }}
          >
            <Text>Open Modal</Text>
          </TouchableOpacity>
        </View>
      )}

      {state.matches({ "contact screen": "contact modal" }) && (
        <View>
          <Text>Contact Modal</Text>
          <TouchableOpacity
            onPress={() => {
              send({ type: "CLOSE" });
            }}
          >
            <Text>Close</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
}

let styles = StyleSheet.create({
  container: {
    flex: 1,

    marginHorizontal: 10,
  },
});
