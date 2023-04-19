import "./displaybar.css";
import React, { useMemo } from "react";
import { useAppState } from "../../utils/context/appContext";
import { highLightStr } from "../../utils/comp";
import { commands, Command } from "../../utils/constant";
import { processCommands } from ".";

function DisplayBar(): JSX.Element {
  const { searchValue } = useAppState();

  const x: string = searchValue.toLowerCase();

  const filterArr: Command[] = searchValue ? processCommands(commands, x) : [];

  const list: JSX.Element[] = filterArr.map((v) => (
    <div
      className="displaylist"
      onClick={() => window.open(v.link)}
      key={v.id}
      title={v.desc}
    >
      {x === "*"
        ? v.name
        : highLightStr(v.name, v.name.toLowerCase().indexOf(x), x.length)}
    </div>
  ));

  return <div className="displaybar">{list}</div>;
}

export default DisplayBar;
