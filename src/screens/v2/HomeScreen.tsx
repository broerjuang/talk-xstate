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
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { CardMenu } from "../../components/CardMenu";
import { NavigationV2 } from "../../navigations/HomeStack2Navigation";

export function HomeScreen() {
  let [amount, setAmount] = useState(0);
  let [showBalance, setShowBalance] = useState(true);
  let navigation = useNavigation<NavigationV2>();
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
            <Heading size="xl">
              {showBalance ? "$ " + amount : "********"}
            </Heading>
            <Box alignItems="center">
              <IconButton
                onPress={() => {
                  setShowBalance((showBalance) => !showBalance);
                }}
                ml="1"
                icon={
                  <FontAwesome
                    name={showBalance ? "eye" : "eye-slash"}
                    size={20}
                  />
                }
              />
            </Box>
          </HStack>
        </VStack>
        <Spacer height="5" />
        <ScrollView horizontal style={{ marginVertical: 10 }}>
          <CardMenu
            name="wallet-plus-outline"
            onPress={() => {
              navigation.navigate("add money screen v2");
            }}
            title="Add Money"
          />
          <Spacer width="5" />
          <CardMenu name="bank-transfer" onPress={() => {}} title="Transfer" />
          <Spacer width="5" />
          <CardMenu
            name="qrcode-scan"
            onPress={() => {
              navigation.navigate("qris screen v2");
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
