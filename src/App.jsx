import SearchBar from "./views/SearchBar";
import DisplayBar from "./views/DisplayBar";
import BgSet from "./views/BgSet";
import { useState } from "react";
import "./App.css";

function getStorage() {
  return localStorage.getItem("");
}

function App() {
  const [searchValue, setSearchValue] = useState("");
  const [imgLink, setImgLink] = useState(
    "https://images.unsplash.com/photo-1680003210401-08fa173ee905?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80"
  );
  const [trp, setTrp] = useState(0);
  const bgStyle = {
    backgroundImage: `url(${imgLink})`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "50% 50%",
    backgroundSize: "cover",
    transition: "all 1s ease-in-out",
  };
  const bgWrap = {
    backgroundColor: `rgba(0,0,0,${trp})`,
  };
  return (
    <div className="app" style={bgStyle}>
      <div className="app-wrap" style={bgWrap}>
        <SearchBar
          searchValue={searchValue}
          onValueChange={setSearchValue}
        />
        <DisplayBar searchValue={searchValue} />
        <BgSet />
      </div>
    </div>
  );
}

export default App;
