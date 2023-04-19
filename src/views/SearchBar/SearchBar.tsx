import "./searchbar.css";
import React from "react";
import { useAppState, useAppDispatch } from "../../utils/context/appContext";
import { onSearchValueChange } from ".";

function SearchBar() {
  const { searchValue } = useAppState();
  const dispatch = useAppDispatch();

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const val = onSearchValueChange(e.target.value);
    dispatch({ type: "searchValueChange", searchValue: val });
  }

  return (
    <input
      type="text"
      value={searchValue}
      onChange={handleChange}
      spellCheck={false}
    />
  );
}

export default SearchBar;
