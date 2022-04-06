import { Text, View, StyleSheet, Button } from "react-native";
import React, { Component } from "react";
import {useNavigation} from '@react-navigation/native';

function AppHeader() {
  const navigation = useNavigation();

  const addFriendsHandler = () =>{
    navigation.navigate('AddFriends');
  }

  return (
    <View style={styles.header}>
      <Text>Search</Text>
      <Button title="Add friends" onPress={addFriendsHandler}/>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingTop: 20,
    paddingLeft: 20,
    paddingRight: 20,
  },
});

export default AppHeader;
