import React from "react";
import AppNavigator from "./src/Navigation/AppNavigator";
import { DarkModeProvider } from "./src/Utils/DarkModeContext";
import "./src/Utils/i18next";
const App = () => {
  return (
    <DarkModeProvider>
      <AppNavigator />
    </DarkModeProvider>
  );
};

export default App;
