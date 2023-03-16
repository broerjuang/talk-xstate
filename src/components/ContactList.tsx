import React from "react";
import { FlatList, StyleSheet } from "react-native";

import { Contact, ContactT } from "./Contact";

type Props = {
  contacts: Array<ContactT>;
  onSelectContact: (contact: ContactT) => void;
};
function ContactsList(props: Props) {
  const keyExtractor = (item, idx) => {
    return item?.name || idx.toString();
  };
  const renderItem = ({ item, index }) => {
    return <Contact contact={item} onSelectContact={props.onSelectContact} />;
  };
  return (
    <FlatList
      data={props.contacts}
      renderItem={renderItem}
      keyExtractor={keyExtractor}
      style={styles.list}
    />
  );
}
const styles = StyleSheet.create({
  list: {
    flex: 1,
  },
});
export default ContactsList;
