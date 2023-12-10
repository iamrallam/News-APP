import React from "react";
import AppNavigator from "../NewsReactApp/src/Navigation/AppNavigator";
import { DarkModeProvider } from "../NewsReactApp/src/Utils/DarkModeContext";
import "../NewsReactApp/src/Utils/i18next";
const App = () => {
  return (
    <DarkModeProvider>
      <AppNavigator />
    </DarkModeProvider>
  );
};

export default App;
