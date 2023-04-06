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

  const filterArr: Command[] = [];
  for (let v of commands) {
    if (x === "*" || v.name.toLowerCase().includes(x)) {
      filterArr.push(v);
      continue;
    }
    for (let a of v.tag) {
      if (!a.toLowerCase().includes(x)) continue;
      const obj: Command = { ...v, name: v.name + `[${a}]` };
      filterArr.push(obj);
      break;
    }
  }

  const itemName = (name: string, ind: number): string | JSX.Element =>
    x === "*" ? name : highLightStr(name, ind, x.length);

  const list: JSX.Element[] = filterArr.map((v) => (
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
