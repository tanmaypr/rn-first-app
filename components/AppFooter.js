import { View, Text, StyleSheet, TouchableHighlight } from "react-native";
import React from "react";
import { SvgUri } from "react-native-svg";
export default function AppFooter() {
  const tabs = [
    { text: "Friends", img: "" },
    { text: "Groups", img: "" },
    { text: "Add", img: "" },
    { text: "Activity", img: "" },
    { text: "Account", img: "" },
  ];

  {
    /*<SvgUri
              width="50"
              height="50"
              uri="https://www.svgrepo.com/show/5125/avatar.svg"
  />*/
  }

  return (
    <View style={styles.footerContainer}>
      <View style={styles.iconTabContainer}>
        {tabs.map((item) => {
          return (
            <TouchableHighlight
              key={item.text}
              activeOpacity={0.2}
              underlayColor="#DDDDDD"
              onPress={() => alert("Pressed")}
            >
              <View>
                <Text>{item.text}</Text>
              </View>
            </TouchableHighlight>
          );
        })}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  footerContainer: {
    flex: 2,
    marginTop: 10,
    width: "100%",
    padding: 20,
    elevation: 10,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.26,
    backgroundColor: "white",
    borderRadius: 10,
    position: 'relative',
  },

  iconTabContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
});
