import { Text, View, StyleSheet } from "react-native";

const Card = (props) => {
  return <View style={styles.cardContainer}>{props.children}</View>;
};

const styles = StyleSheet.create({
  cardContainer: {
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

export default Card;
