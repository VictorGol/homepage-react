import "./css/searchbar.css";
import React from "react";

function SearchBar({ searchValue, onValueChange }) {
  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    let val = e.target.value;
    if (val !== "bgl") document.getElementById("file")?.remove();
    if (/\.\.$/.test(val)) val = "";
    title.innerHTML = val || "⚪";
    onValueChange(val);
  };

  return (
    <input
      type="text"
      value={searchValue}
      onChange={handleChange}
      spellCheck={false}
    />
  );
}

const title = document.getElementsByTagName("title")[0];

export default SearchBar;
