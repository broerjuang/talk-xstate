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
import { CardMenu } from "../../components/CardMenu";
import { useApp } from "../../flows/application.provider";

export function HomeScreen() {
  let { send, state } = useApp();

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
            {state.matches("loading") && <Heading size="xl">loading</Heading>}
            {state.matches("home screen") && (
              <>
                <Heading size="xl">
                  {state.context.showBalance
                    ? "$ " + state.context.amount
                    : "********"}
                </Heading>
                <Box alignItems="center">
                  <IconButton
                    onPress={() => {
                      send({ type: "TOGGLE_BALANCE" });
                    }}
                    ml="1"
                    icon={
                      <FontAwesome
                        name={state.context.showBalance ? "eye" : "eye-slash"}
                        size={20}
                      />
                    }
                  />
                </Box>
              </>
            )}
          </HStack>
        </VStack>
        <Spacer height="5" />
        <ScrollView horizontal style={{ marginVertical: 10 }}>
          <CardMenu
            name="wallet-plus-outline"
            onPress={() => {
              send({ type: "CLICK_ADD_MONEY" });
            }}
            title="Add Money"
          />
          <Spacer width="5" />
          <CardMenu
            name="bank-transfer"
            onPress={() => {
              send({ type: "CLICK_TRANSFER" });
            }}
            title="Transfer"
          />
          <Spacer width="5" />
          <CardMenu
            name="qrcode-scan"
            onPress={() => {
              send({ type: "CLICK_QRIS" });
            }}
            title="QRIS"
          />
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
    // backgroundColor: BACKGROUND_COLOR,
  },
  scrollView: {
    marginHorizontal: 20,
  },
  avatar: {},
  amount: {},
  menu: {},
  transactions: {},
});
