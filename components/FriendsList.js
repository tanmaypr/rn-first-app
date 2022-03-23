import { View, Text, StyleSheet, FlatList } from "react-native";
import React from "react";
import { SvgUri } from "react-native-svg";

export default function FriendsList() {
  const DUMMY_FRIENDS = [
    {
      id: "0",
      avatar: "",
      firstName: "John",
      lastName: "",
      moneyOwed: 100,
      youOwe: 0,
    },
    {
      id: "1",
      avatar: "",
      firstName: "Will",
      lastName: "",
      moneyOwed: 0,
      youOwe: 0,
    },
    {
      id: "2",
      avatar: "",
      firstName: "Harry",
      lastName: "",
      moneyOwed: 0,
      youOwe: 0,
    },
    {
      id: "3",
      avatar: "",
      firstName: "Larry",
      lastName: "",
      moneyOwed: 0,
      youOwe: 0,
    },
    {
      id: "4",
      avatar: "",
      firstName: "Sally",
      lastName: "",
      moneyOwed: 0,
      youOwe: 100,
    },
  ];

  const Item = ({ firstName, amountText, amountTextColor, amount }) => (
    <View>
      <View style={styles.listItem}>
        <SvgUri
          width="50"
          height="50"
          uri="https://www.svgrepo.com/show/5125/avatar.svg"
        />
        <View style={styles.listItemName}>
          <Text>{firstName}</Text>
        </View>
        <View style={styles.listItemAmount}>
          <Text style={amountTextColor}>{amountText}</Text>
          {amount > 0 && <Text style={amountTextColor}>${amount}</Text>}
        </View>
      </View>
    </View>
  );

  const renderItem = ({ item }) => {
    let amountTextColor = "";
    let amountText = "";
    let amount = 0;

    if (item.moneyOwed > item.youOwe) {
      amountTextColor = {
        color: "green",
        fontWeight: "bold",
      };
      amountText = "owes you";
      amount = item.moneyOwed - item.youOwe;
    } else if (item.moneyOwed < item.youOwe) {
      amountTextColor = {
        color: "red",
        fontWeight: "bold",
      };
      amountText = "you owe";
      amount = item.youOwe - item.moneyOwed;
    } else {
      amountTextColor = {
        color: "grey",
        fontWeight: "bold",
      };
      amountText = "settled up";
    }

    return (
      <Item
        firstName={item.firstName}
        amountText={amountText}
        amountTextColor={amountTextColor}
        amount={amount}
      />
    );
  };

  return (
    <View style={styles.listContainer}>
      <FlatList
        data={DUMMY_FRIENDS}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  listContainer: {
    marginTop: 10,
    marginLeft: 20,
    width: "90%",
    maxWidth: "99%",
    padding: 20,
    elevation: 10,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.26,
    backgroundColor: "white",
    borderRadius: 10,
    flex: 10,
  },
  listItem: {
    padding: 5,
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    borderBottomColor: 'grey',
    borderBottomWidth: 0.3,
  },
  listItemAmount: {
    flex: 2,
    justifyContent: "center",
    alignItems: "flex-end",
  },
  listItemName: {
    marginLeft: 15,
    flex: 3,
  },
});
