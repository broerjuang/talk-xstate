import { Text, TouchableOpacity } from "react-native";
import { useTransaction } from "../modules/transactions";
export function TransferScreen() {
  let { send } = useTransaction();
  return (
    <TouchableOpacity onPress={() => send({ type: "GO TO CONTACT SCREEN" })}>
      <Text>Go to contact screen</Text>
    </TouchableOpacity>
  );
}
