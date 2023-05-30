import "./bac.css";
import React from "react";
import { useAppState, useAppDispatch } from "../../utils/context/appContext";
import { generateInputElement, getCssStyle, useInput } from ".";

export default function Bac({ children }) {
  const input = useInput();
  const state = useAppState();
  const dispatch = useAppDispatch();

  const { searchValue } = state;

  const handleKeyDown: React.KeyboardEventHandler<HTMLDivElement> = (e) => {
    if (e.key === "Enter" && searchValue.trim() === "bgl") {
      generateInputElement(dispatch);
    } else dispatch({ type: "keydown", key: e.key });
  };

  const [bgStyle, bgWrap] = getCssStyle(state);

  return (
    <div
      className="app"
      style={bgStyle}
      onKeyDown={handleKeyDown}
      onClick={() => input?.focus()}
    >
      <div className="app-wrap" style={bgWrap}>
        {children}
      </div>
    </div>
  );
}
