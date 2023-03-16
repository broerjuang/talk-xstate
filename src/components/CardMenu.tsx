import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Box, Icon, Text } from "native-base";
import { TouchableOpacity } from "react-native";

type CardMenuProps = {
  onPress: () => void;
  name: string;
  title: string;
};

export function CardMenu(props: CardMenuProps) {
  return (
    <TouchableOpacity
      onPress={props.onPress}
      activeOpacity={0.8}
      style={{ paddingBottom: 20 }}
    >
      <Box
        borderRadius={"lg"}
        width="20"
        height="20"
        bg={"gray.100"}
        flex={1}
        justifyContent="center"
        alignItems={"center"}
      >
        <Icon
          as={MaterialCommunityIcons}
          name={props.name}
          size={12}
          color="blue.600"
        />
      </Box>
      <Text>{props.title}</Text>
    </TouchableOpacity>
  );
}
