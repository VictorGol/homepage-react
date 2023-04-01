import "./css/searchbar.css";

function SearchBar({ searchValue, onValueChange }) {
  function handleChange(e) {
    let val = e.target.value;
    if (val !== "bgl") document.getElementById("file")?.remove();
    if (/\.\.$/.test(val)) val = "";
    onValueChange(val);
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
