import { Text, StyleSheet, View, Image } from "react-native";
import React from "react";
import { SvgUri } from 'react-native-svg';
const TotalBalance = (props) => {
  return (
    <React.Fragment>
      <Text style={styles.headerText}> Friends </Text>
      <View style={styles.balanceContainer}>
        <View style={styles.container}>
          
          <SvgUri width="50" height="50" uri="https://www.svgrepo.com/show/5125/avatar.svg"/>
          <View style={styles.totalBalanceContainer}>
            <Text>Total Balance</Text>
            <Text style={styles.totalAmountText}>You Owe $224.02</Text>
          </View>
        </View>
      </View>
    </React.Fragment>
  );
};

const styles = StyleSheet.create({
  headerText:{
    fontSize: 30,
    paddingLeft: 15,
  },

  totalAmountText: {
    fontSize: 15,
    fontStyle: "italic",
    fontWeight: "bold",
    color: "orange",
  },

  totalBalanceContainer: {
    marginLeft: 15,
  },

  container: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "flex-start",
  },

  balanceContainer: {
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
  },
});

export default TotalBalance;
