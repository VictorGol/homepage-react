import "./css/searchbar.css";

function SearchBar({ searchValue, onValueChange }) {
  function handleChange(e) {
    const val = e.target.value.replace(/\.\.$/, "");
    val !== "bgl" && document.getElementById("file")?.remove();
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
