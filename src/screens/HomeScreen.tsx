import {
  Avatar,
  Box,
  Flex,
  Heading,
  HStack,
  IconButton,
  Spacer,
  VStack,
} from "native-base";
import { SafeAreaView, ScrollView, StatusBar, StyleSheet } from "react-native";

import { FontAwesome } from "@expo/vector-icons";
import { CardMenu } from "../components/CardMenu";

export function HomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollView}>
        <Flex flexDir={"row"}>
          <Avatar alignSelf={"left"} />
        </Flex>
        <VStack mt="10">
          <Heading size="md" fontWeight={"normal"}>
            Your Balance
          </Heading>
          <HStack mt="2" alignItems={"center"}>
            <Heading size="xl">$0</Heading>
            <Box alignItems="center">
              <IconButton
                onPress={() => {
                  // send({ type: "TOGGLE_BALANCE" });
                }}
                ml="1"
                icon={
                  // eye-slah for hiding
                  <FontAwesome name="eye" size={20} />
                }
              />
            </Box>
          </HStack>
        </VStack>
        <Spacer height="5" />
        <ScrollView horizontal style={{ marginVertical: 10 }}>
          <CardMenu
            name="wallet-plus-outline"
            onPress={() => {}}
            title="Add Money"
          />
          <Spacer width="5" />
          <CardMenu name="bank-transfer" onPress={() => {}} title="Transfer" />
          <Spacer width="5" />
          <CardMenu name="qrcode-scan" onPress={() => {}} title="QRIS" />
          <Spacer width="5" />
          <CardMenu name="graphql" onPress={() => {}} title="conference" />
        </ScrollView>
      </ScrollView>
    </SafeAreaView>
  );
}

let styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: StatusBar.currentHeight,
  },
  scrollView: {
    marginHorizontal: 20,
  },
  avatar: {},
  amount: {},
  menu: {},
  transactions: {},
});
