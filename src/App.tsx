import SearchBar from "./views/SearchBar";
import DisplayBar from "./views/DisplayBar";
import "./App.css";
import React from "react";
import { useImmerReducer } from "use-immer";
import { Storage, setStorage, fileImport } from "./utils/common";
import { useApp } from "./utils/reducer";

export default function App() {
  const [state, dispatch] = useImmerReducer(useApp, {
    ...storage,
    searchValue: "",
  });
  const { searchValue, img, trp, posx, posy, blur } = state;

  const handleKeyDown: React.KeyboardEventHandler<HTMLDivElement> = (e) => {
    if (e.key === "Enter" && searchValue.trim() === "bgl") {
      const displaybar = document.querySelector(".displaybar") as HTMLElement;
      displaybar.innerHTML = `<input type="file" name="img" id="file" accept="image/jpeg,image/jpg,image/png">`;
      const file = document.getElementById("file") as HTMLElement;
      file.onchange = () =>
        fileImport((img: string) => dispatch({ type: "bgl", img }));
      return;
    }
    dispatch({ type: "keydown", key: e.key });
  };

  function handleClick() {
    const input = document.getElementsByTagName("input")[0];
    input.focus();
  }

  const bgStyle: React.CSSProperties = {
    backgroundImage: `url(${img})`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: `${posx}% ${posy}%`,
    backgroundSize: "cover",
    transition: "background-color .3s ease-in-out",
  };

  const bgWrap: React.CSSProperties = {
    backgroundColor: `rgba(0,0,0,${trp})`,
    backdropFilter: `blur(${blur}px)`,
  };

  return (
    <div
      className="app"
      style={bgStyle}
      onKeyDown={handleKeyDown}
      onClick={handleClick}
    >
      <div className="app-wrap" style={bgWrap}>
        <SearchBar searchValue={searchValue} dispatch={dispatch} />
        <DisplayBar searchValue={searchValue} />
      </div>
    </div>
  );
}

const storage = (function () {
  const str = localStorage.getItem("homepage") as string;
  if (str) return JSON.parse(str);
  const obj: Storage = {
    img: "https://images.unsplash.com/photo-1680100612420-e57b14dd2c7e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2564&q=80",
    trp: 0,
    posx: 50,
    posy: 50,
    blur: 0,
  };
  setStorage(obj);
  return obj;
})();
