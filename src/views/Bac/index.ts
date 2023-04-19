import { useEffect, useState } from "react";
import { fileImport } from "../../utils/common";
import { AppAction, AppState } from "../../utils/context/appContext";

function getCssStyle({ img, trp, posx, posy, blur }: AppState) {
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
  return [bgStyle, bgWrap];
}

function generateInputElement(dispatch: React.Dispatch<AppAction>) {
  const displaybar = document.querySelector(".displaybar") as HTMLElement;
  displaybar.innerHTML = `<input type="file" name="img" id="file" accept="image/jpeg,image/jpg,image/png">`;
  const file = document.getElementById("file") as HTMLInputElement;
  file.onchange = () =>
    fileImport((img: string) => dispatch({ type: "bgl", img }));
}

function useInput(): HTMLInputElement | null {
  const [input, setInput] = useState<HTMLInputElement | null>(null);
  useEffect(() => {
    !input && setInput(document.getElementsByTagName("input")[0]);
  }, []);
  return input;
}

export { getCssStyle, generateInputElement, useInput };
