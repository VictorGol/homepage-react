import SearchBar from "./views/SearchBar";
import DisplayBar from "./views/DisplayBar";
import Bac from "./views/bac";
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
