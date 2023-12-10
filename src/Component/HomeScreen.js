import React, { useState, useEffect, useContext } from "react";
import {
  View,
  Text,
  FlatList,
  TextInput,
  Image,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import filter from "lodash.filter";
import axios from "axios";
import DarkModeContext from "../Utils/DarkModeContext";

const HomeScreen = () => {
  const apiUrl =
    "https://newsapi.org/v2/top-headlines?country=us&apiKey=2c62f0dc183349e3989098377ef2429c";
  const navigation = useNavigation();
  const [searchQuery, setSearchQuery] = useState("");
  const [dataSource, setDataSource] = useState([]);
  const [fullData, setFullData] = useState([]);
  const [error, setError] = useState(null);
  const { isDarkMode } = useContext(DarkModeContext);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(apiUrl);
        setDataSource(response.data.articles);
        setFullData(response.data.articles);
      } catch (err) {
        setError(err);
      }
    };

    fetchData();
  }, [apiUrl]);

  const handlePress = (item) => {
    navigation.navigate("Details Screen", { item });
  };
  const handleSearchText = (text) => {
    setSearchQuery(text);
    const formatedText = text.toLowerCase();
    const filteredArr = filter(fullData, (item) => {
      return contains(item, formatedText);
    });
    setDataSource(filteredArr);
  };
  const contains = (item, queryText) => {
    if (item.title.includes(queryText)) {
      return true;
    }
    return false;
  };
  return (
    <View style={isDarkMode ? styles.parentViewBlack : styles.parentView}>
      <View style={isDarkMode ? styles.containerBlack : styles.container}>
        <TextInput
          style={styles.searchBox}
          placeholder="Search by title"
          value={searchQuery}
          onChangeText={(text) => handleSearchText(text)}
          clearButtonMode="always"
          autoCorrect={false}
          autoCapitalize="none"
        />
      </View>

      {error && <Text>Error fetching data</Text>}
      {dataSource && (
        <FlatList
          data={dataSource}
          keyExtractor={(item) => item.title}
          renderItem={({ item }) => (
            <TouchableOpacity onPress={() => handlePress(item)}>
              <View style={styles.flatListContainer}>
                <Image
                  source={{ uri: item.urlToImage }}
                  style={{ height: 100, width: "100%" }}
                />
                <Text style={styles.text}>{item.title}</Text>
              </View>
            </TouchableOpacity>
          )}
          ItemSeparatorComponent={() => <View style={styles.separator}></View>}
        />
      )}
    </View>
  );
};
const styles = StyleSheet.create({
  flatListContainer: {
    backgroundColor: "#70a1ff",
    marginVertical: 10,
    marginHorizontal: 16,
    paddingBottom: 32,
    borderRadius: 6,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 20,
    paddingTop: 6,
  },
  separator: {
    height: 1,
    backgroundColor: "#f1f2f6",
  },
  container: {
    padding: 16,
    marginBottom: 50,
    flex: 1,
    backgroundColor: "white",
  },
  containerBlack: {
    padding: 16,
    marginBottom: 50,
    flex: 1,
    backgroundColor: "black",
  },
  searchBox: {
    height: 50,
    borderColor: "black",
    borderWidth: 1,
    marginBottom: 16,
    padding: 8,
    backgroundColor: "white",
  },
  parentView: {
    backgroundColor: "white",
  },
  parentViewBlack: {
    backgroundColor: "black",
  },
});
export default HomeScreen;
