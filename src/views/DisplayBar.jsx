import { highLightStr } from "../utils/index.jsx";
import commands from "./js/constant.js";
import "./css/displaybar.css";

export default function DisplayBar({ searchValue }) {
  // 搜索值为空
  if (!searchValue) return <div className="displaybar"></div>;

  const x = searchValue.toLowerCase();

  const filterArr = commands.filter(({ name }) =>
    x === "*" ? true : name.toLowerCase().includes(x)
  );

  const itemName = (name, ind) =>
    x === "*" ? name : highLightStr(name, ind, x.length);

  const list = filterArr.map((v) => (
    <div
      className="displaylist"
      onClick={() => window.open(v.link)}
      key={v.name}
      item={v}
    >
      {itemName(v.name, v.name.toLowerCase().indexOf(x))}
    </div>
  ));

  return <div className="displaybar">{list}</div>;
}
