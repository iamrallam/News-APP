import React from "react";
import AppNavigator from "../News-APP/src/Navigation/AppNavigator";
import { DarkModeProvider } from "../News-APP/src/Utils/DarkModeContext";
import "../News-APP/src/Utils/i18next";
const App = () => {
  return (
    <DarkModeProvider>
      <AppNavigator />
    </DarkModeProvider>
  );
};

export default App;
