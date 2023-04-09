import { highLightStr } from "../utils/comp";
import { commands, Command } from "./js/constant";
import "./css/displaybar.css";
import React from "react";

interface Prop {
  searchValue: string;
}

function DisplayBar({ searchValue }: Prop) {
  if (!searchValue) {
    return <div className="displaybar"></div>;
  }

  const x: string = searchValue.toLowerCase();

  const filterArr: Command[] = commands
    .map((item) => ({ ...item, tag: [...item.tag] }))
    .filter((v) => {
      if (x === "*" || v.name.toLowerCase().includes(x)) return true;
      return v.tag.some((a) => {
        if (!a.toLowerCase().includes(x)) return false;
        v.name += `[${a}]`;
        return true;
      });
    });

  const itemName = (name: string, ind: number) =>
    x === "*" ? <>{name}</> : highLightStr(name, ind, x.length);

  const list = filterArr.map((v) => (
    <div
      className="displaylist"
      onClick={() => window.open(v.link)}
      key={v.id}
      title={v.desc}
    >
      {itemName(v.name, v.name.toLowerCase().indexOf(x))}
    </div>
  ));

  return <div className="displaybar">{list}</div>;
}

export default DisplayBar;
