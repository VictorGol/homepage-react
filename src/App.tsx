import SearchBar from "./views/SearchBar/SearchBar";
import DisplayBar from "./views/DisplayBar/DisplayBar";
import Bac from "./views/Bac/bac";
import React from "react";
import { AppProvider } from "./utils/context/appContext";

export default function App() {
  return (
    <AppProvider>
      <Bac>
        <SearchBar />
        <DisplayBar />
      </Bac>
    </AppProvider>
  );
}
