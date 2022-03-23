import { View, Text, StyleSheet, TextInput, Button } from "react-native";
import React from "react";

export default function LoginScreen(props) {
  return (
    <View style={styles.loginContainer}>
      <View style={styles.loginTextContainer}>
        <Text style={styles.loginText}>Sign In</Text>
      </View>
      <View style={styles.loginInput}>
        <TextInput placeholder="Username" />
      </View>
      <View style={styles.loginInput}>
        <TextInput placeholder="Password" secureTextEntry={true}/>
      </View>
      <Button title="Login" onPress={() => props.navigation.navigate('Home')}/>
    </View>
  );
}

const styles = StyleSheet.create({
  loginContainer: {
    padding: 20,
    marginTop: 100,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 1,
    shadowOpacity: 0.16,
    borderRadius: 5,
    marginBottom: 30,
  },
  loginTextContainer:{
    marginBottom: 30,
  },
  loginText:{
    fontSize: 20,
  },
  loginInput: {
    width: "80%",
    borderColor: "black",
    padding: 10,
    elevation: 10,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 2,
    shadowOpacity: 0.26,
    backgroundColor: "white",
    borderRadius: 3,
    marginBottom: 30,
  },
});
