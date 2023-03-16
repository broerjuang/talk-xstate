import { TextInput, View } from "react-native";

export function TransferScreen() {
  return (
    <View>
      <TextInput
        keyboardType="number-pad"
        onChangeText={(text) => {
          // send({ type: "INPUT AMOUNT", payload: text });
        }}
      />
      {/* <TouchableOpacity onPress={() => send({ type: "GO TO CONTACT SCREEN" })}>
        <Text>Go to contact screen</Text>
      </TouchableOpacity> */}
    </View>
  );
}
