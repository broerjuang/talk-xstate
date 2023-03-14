import { Text, View } from "react-native";

type Props = {
  title: string;
};
export function Header(props: Props) {
  return (
    <View>
      <Text>Back</Text>
      <Text>Title</Text>
    </View>
  );
}
