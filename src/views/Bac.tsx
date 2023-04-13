import "./css/bac.css";
import React from "react";
import { fileImport } from "../utils/common";
import { useAppState, useAppDispatch } from "../utils/context/appContext";

export default function Bac({ children }) {
  const { searchValue, img, trp, posx, posy, blur } = useAppState();
  const dispatch = useAppDispatch();

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
        {children}
      </div>
    </div>
  );
}
