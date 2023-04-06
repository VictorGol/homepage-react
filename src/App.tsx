import SearchBar from "./views/SearchBar";
import DisplayBar from "./views/DisplayBar";
import "./App.css";
import React, { useState } from "react";
import { init, updateStorage, inputFocus, searchEngine } from "./utils/common";
import { fileImport } from "./utils/index.js";

export default function App() {
  const [searchValue, setSearchValue] = useState("");
  const [state, setState] = useState({
    img: data.img,
    trp: data.trp,
    posx: data.posx,
    posy: data.posy,
    blur: data.blur,
  });
  const { img, trp, posx, posy, blur } = state;

  const updateSetting = (key: string, value: any, upperLimit?: number) => {
    if (upperLimit) {
      value = parseFloat(value) || 0;
      value = value < 0 ? 0 : value > upperLimit ? upperLimit : value;
    }
    const obj = {};
    obj[key] = value;
    setState({ ...state, ...obj });
    updateStorage(obj);
  };

  const handleChange = () => {
    fileImport((img: string) => updateSetting("img", img));
  };

  const handleKeyDown: React.KeyboardEventHandler<HTMLDivElement> = (e) => {
    const x = searchValue.trim();

    const handleKeyAction = {
      ArrowUp: () => updateSetting("posy", posy - 1, 100),
      ArrowDown: () => updateSetting("posy", posy + 1, 100),
      ArrowLeft: () => updateSetting("posx", posx - 1, 100),
      ArrowRight: () => updateSetting("posx", posx + 1, 100),
      Enter: () => {
        if (x.startsWith("bg http")) {
          updateSetting("img", x.slice(3));
        } else if (x.startsWith("trp ") || x === "trp") {
          updateSetting("trp", x.slice(4), 1);
        } else if (x.startsWith("blur ") || x === "blur") {
          updateSetting("blur", x.slice(5), 100);
        } else if (x === "bgl") {
          const displaybar = document.querySelector(
            ".displaybar"
          ) as HTMLElement;
          displaybar.innerHTML = `<input type="file" name="img" id="file" accept="image/jpeg,image/jpg,image/png">`;
          const file = document.getElementById("file") as HTMLElement;
          file.onchange = handleChange;
        } else {
          const ind = x.indexOf(" ");
          const url =
            ind == -1
              ? searchEngine.bing + x
              : searchEngine[x.slice(0, ind)]
              ? searchEngine[x.slice(0, ind)] + x.slice(ind + 1)
              : searchEngine.bing + x;
          window.open(url);
        }
      },
    };

    const action = handleKeyAction[e.key];
    if (action) action();
  };

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
      onClick={inputFocus}
    >
      <div className="app-wrap" style={bgWrap}>
        <SearchBar searchValue={searchValue} onValueChange={setSearchValue} />
        <DisplayBar searchValue={searchValue} />
      </div>
    </div>
  );
}

const data = init();
