import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import DarkModeContext from "../Utils/DarkModeContext";
import { useContext } from "react";

const DetailsScreen = ({ route }) => {
  const { item } = route.params;
  const { isDarkMode } = useContext(DarkModeContext);

  return (
    <View style={isDarkMode ? styles.containerBlack : styles.container}>
      <Image source={{ uri: item.urlToImage }} style={styles.image} />
      <Text style={isDarkMode ? styles.titleTextBlack : styles.titleText}>
        {item.title}
      </Text>
      <Text style={isDarkMode ? styles.descTextBlack : styles.descText}>
        {item.description}
      </Text>
    </View>
  );
};
const styles = StyleSheet.create({
  titleText: {
    fontSize: 20,
    fontWeight: "bold",
    paddingLeft: 6,
    justifyContent: "center",
    color: "black",
  },
  titleTextBlack: {
    fontSize: 20,
    fontWeight: "bold",
    paddingLeft: 6,
    justifyContent: "center",
    color: "white",
  },
  descText: {
    fontSize: 15,
    paddingLeft: 6,
    color: "black",
  },
  descTextBlack: {
    fontSize: 15,
    paddingLeft: 6,
    color: "white",
  },
  image: {
    width: 300,
    height: 300,
    borderRadius: 10,
    marginBottom: 10,
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
  },
  containerBlack: {
    flex: 1,
    justifyContent: "center",
    alignItems: "left",
    backgroundColor: "black",
  },
});

export default DetailsScreen;
