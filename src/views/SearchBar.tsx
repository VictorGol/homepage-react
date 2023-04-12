import "./css/searchbar.css";
import React from "react";

function SearchBar({ searchValue, dispatch }) {
  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    let val = e.target.value;
    if (val !== "bgl") document.getElementById("file")?.remove();
    if (/\.\.$/.test(val)) val = "";
    title.innerHTML = val || "⚪";
    dispatch({ type: "searchValueChange", searchValue: val });
  };

  const input = (
    <input
      type="text"
      value={searchValue}
      onChange={handleChange}
      spellCheck={false}
    />
  );

  return input;
}

const title = document.getElementsByTagName("title")[0];

export default SearchBar;
