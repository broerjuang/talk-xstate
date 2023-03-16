import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export type ContactT = {
  name: string;
  accountNumber: string;
};

type ContactProps = {
  contact: ContactT;
  onSelectContact: (contact: ContactT) => void;
};

export function Contact(props: ContactProps) {
  return (
    <TouchableOpacity
      onPress={() => {
        props.onSelectContact(props.contact);
      }}
      style={styles.contactCon}
    >
      <View style={styles.imgCon}>
        <View style={styles.placeholder}>
          <Text style={styles.txt}>{props.contact.name[0].toUpperCase()}</Text>
        </View>
      </View>
      <View style={styles.contactDat}>
        <Text style={styles.name}>{props.contact.name}</Text>
        <Text style={styles.phoneNumber}>{props?.contact.accountNumber}</Text>
      </View>
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  contactCon: {
    flex: 1,
    flexDirection: "row",
    padding: 5,
    borderBottomWidth: 0.5,
    borderBottomColor: "#d9d9d9",
  },
  imgCon: {},
  placeholder: {
    width: 55,
    height: 55,
    borderRadius: 30,
    overflow: "hidden",
    backgroundColor: "#d9d9d9",
    alignItems: "center",
    justifyContent: "center",
  },
  contactDat: {
    flex: 1,
    justifyContent: "center",
    paddingLeft: 5,
  },
  txt: {
    fontSize: 18,
  },
  name: {
    fontSize: 16,
  },
  phoneNumber: {
    color: "#888",
  },
});
