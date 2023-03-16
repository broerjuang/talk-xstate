import BottomSheet from "@gorhom/bottom-sheet";
import { useRef } from "react";
import { StyleSheet, View } from "react-native";
import { useApp } from "../flows/application.provider";
// import ContactsList from "../../components/ContactList";
// import { useApp } from "../../flows/application.provider";

export function TransferScreen() {
  let { state, send } = useApp();
  const bottomSheetRef = useRef<BottomSheet>(null);

  return (
    <View style={styles.container}>
      {/* {state.matches({ "transfer screen": "alert" }) && (
        <Box>
          <Text>Do you want to cancel the transfer?</Text>
          <Button onPress={() => send({ type: "YES" })}>Yes</Button>
          <Button onPress={() => send({ type: "NO" })}>No</Button>
        </Box>
      )}
      {state.matches({ "transfer screen": "contact list" }) && (
        <ContactsList
          contacts={[
            { name: "Juang", accountNumber: "12344567" },
            { name: "Ariya", accountNumber: "23445678" },
          ]}
          onSelectContact={(contact) => {
            send({ type: "SELECT_CONTACT", payload: contact });
          }}
        />
      )}

      {state.matches({ "transfer screen": "amount form" }) && (
        <Box>
          <Heading>Transfer Form</Heading>
          <Text>{state.context?.transferTo?.name || ""}</Text>
          <Input mx="3" placeholder="Input" w="100%" />
          <Button>Submit</Button>
        </Box>
      )} */}
    </View>
  );
}

let styles = StyleSheet.create({
  container: {
    flex: 1,

    marginHorizontal: 10,
  },
});
