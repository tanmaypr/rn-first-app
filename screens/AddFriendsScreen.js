import { View, Text, StyleSheet, TextInput, Button } from "react-native";

import Card from "../components/Card";
const AddFriendsScreen = (props) => {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.mainInnerContainer}>
        <Card>
          <View style={styles.textContainer}>
            <Text style={styles.addFriendText}>Add a Friend</Text>
          </View>
          <View style={styles.addFriendInput}>
            <TextInput placeholder="Name" />
          </View>
          <View style={styles.addFriendInput}>
            <TextInput placeholder="Email" />
          </View>
          <Button title="Add" />
        </Card>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: "#f2a456",
  },
  mainInnerContainer: {
    marginTop: 100,
  },
  textContainer: {
    marginBottom: 30,
  },
  addFriendText: {
    fontSize: 20,
  },
  addFriendInput: {
    width: "100%",
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

export default AddFriendsScreen;
