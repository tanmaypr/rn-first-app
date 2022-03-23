import { StyleSheet, View } from "react-native";
import React from "react";
import AppHeader from "../components/AppHeader";
import TotalBalance from "../components/TotalBalance";
import AppFooter from "../components/AppFooter";
import FriendsList from "../components/FriendsList";
const HomeScreen = (props) => {
  return (
    <View style={styles.container}>
      <AppHeader />
      <TotalBalance />
      <FriendsList />
      <AppFooter />
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#f2a456",
    },
  });

export default HomeScreen;