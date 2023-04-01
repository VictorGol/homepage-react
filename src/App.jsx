import SearchBar from "./views/SearchBar";
import DisplayBar from "./views/DisplayBar";
import { init, updateStorage, inputFocus, searchEngine } from "./index.js";
import { fileImport } from "./utils/index.js";
import { useState } from "react";
import "./App.css";

export default function App() {
  const [searchValue, setSearchValue] = useState("");
  const [img, setImg] = useState(data.img);
  const [trp, setTrp] = useState(data.trp);
  const [pos, setPos] = useState(data.pos);

  const posIndex = pos.indexOf(",");
  const posFormat = `${pos.slice(0, posIndex)}% ${pos.slice(posIndex + 1)}%`;

  function updateImg(img) {
    setImg(img);
    updateStorage({ img });
  }

  function updateTrp(trp) {
    trp = parseFloat(trp) || 0;
    setTrp(trp);
    updateStorage({ trp });
  }

  function updatePos(dx, dy) {
    const [posx, posy] = pos.split(",");
    let x = parseInt(posx) + dx;
    let y = parseInt(posy) + dy;
    x = x < 0 ? 0 : x > 100 ? 100 : x;
    y = y < 0 ? 0 : y > 100 ? 100 : y;
    const val = `${x},${y}`;
    setPos(val);
    updateStorage({ pos: val });
  }

  function handleKeyDown(e) {
    // console.log(e.key);
    const x = searchValue.trim();

    const handleKeyAction = {
      ArrowUp: () => updatePos(0, -1),
      ArrowDown: () => updatePos(0, 1),
      ArrowLeft: () => updatePos(-1, 0),
      ArrowRight: () => updatePos(1, 0),
      Enter: () => {
        if (x.startsWith("bg http")) {
          updateImg(x.slice(3));
        } else if (x.startsWith("trp ") || x === "trp") {
          updateTrp(x.slice(4));
        } else if (x === "bgl") {
          const displaybar = document.querySelector(".displaybar");
          displaybar.innerHTML = `<input type="file" name="img" id="file" accept="image/jpeg,image/jpg,image/png">`;
          document.getElementById("file").onchange = () =>
            fileImport(updateImg);
        } else {
          const ind = x.indexOf(" ");
          const url =
            ind == -1
              ? searchEngine.brave + x
              : searchEngine[x.slice(0, ind)]
              ? searchEngine[x.slice(0, ind)] + x.slice(ind + 1)
              : searchEngine.brave + x;
          window.open(url);
        }
      },
    };

    const action = handleKeyAction[e.key];
    if(action) action();
  }

  const bgStyle = {
    backgroundImage: `url(${img})`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: posFormat,
    backgroundSize: "cover",
    transition: "background-color .3s ease-in-out",
  };

  const bgWrap = {
    backgroundColor: `rgba(0,0,0,${trp})`,
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
