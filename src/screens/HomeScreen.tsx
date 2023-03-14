import { MaterialCommunityIcons } from "@expo/vector-icons";
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { BACKGROUND_COLOR } from "../constants/colors";
import { useTransaction } from "../modules/transactions";

export function HomeScreen() {
  let { send } = useTransaction();

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollView}>
        <View style={styles.card}>
          <Text>Amount</Text>
        </View>
        <View style={styles.card}>
          <View>
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={() => {
                send({ type: "CLICK TRANSFER" });
              }}
              style={styles.card}
            >
              <MaterialCommunityIcons
                name="bank-transfer-out"
                size={32}
                color="black"
              />
              <Text>Transfer</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

let styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: StatusBar.currentHeight,
    backgroundColor: BACKGROUND_COLOR,
  },
  scrollView: {
    marginHorizontal: 10,
  },
  card: {
    backgroundColor: BACKGROUND_COLOR,
    borderRadius: 10,
    margin: 20,
    padding: 20,
    shadowColor: "#000000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
});
