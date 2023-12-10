import React, { useState, useContext } from "react";
import { View, Switch, StyleSheet, Text } from "react-native";
import DarkModeContext from "../Utils/DarkModeContext";
import { useTranslation } from "react-i18next";
const SettingsScreen = () => {
  const { isDarkMode, toggleDarkMode } = useContext(DarkModeContext);
  const { t, i18n } = useTranslation();
  const handleLanguageToggle = () => {
    if (i18n.language === "en") {
      i18n.changeLanguage("ar");
    } else {
      i18n.changeLanguage("en");
    }
  };
  const handleDarkModeToggle = () => {
    toggleDarkMode();
  };

  return (
    <View style={isDarkMode ? styles.containerBlack : styles.container}>
      <Switch value={true} onValueChange={handleLanguageToggle} />
      <Text style={isDarkMode ? styles.textBlack : styles.text}>
        {t("change-launguage")}
      </Text>
      <Switch value={isDarkMode} onValueChange={handleDarkModeToggle} />
      <Text style={isDarkMode ? styles.textBlack : styles.text}>
        {t("change-darkMode")}
      </Text>
    </View>
  );
};

export default SettingsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "left",
    backgroundColor: "white",
  },
  containerBlack: {
    flex: 1,
    justifyContent: "center",
    alignItems: "left",
    backgroundColor: "black",
  },
  textBlack: {
    color: "white",
    fontSize: 20,
    paddingTop: 6,
  },
  text: {
    color: "black",
    fontSize: 20,
    paddingTop: 6,
  },
});
