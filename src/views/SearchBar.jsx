import "./css/searchbar.css";

function SearchBar({ searchValue, onValueChange }) {
  return (
    <input
      type="text"
      value={searchValue}
      onChange={(e) => onValueChange(e.target.value)}
    />
  );
}

export default SearchBar;
