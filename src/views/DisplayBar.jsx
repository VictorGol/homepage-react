import commands from "./js/constant.js";
import "./css/displaybar.css";

const listItem = (item, itemName) => (
  <div
    className="displaylist"
    onClick={() => window.open(item.link)}
    key={item.name}
  >
    {itemName}
  </div>
);

function DisplayBar({ searchValue }) {
  // 搜索值为空
  if (!searchValue) return;
  const list = [];

  // 搜索值为*
  if (searchValue === "*") {
    for (let item of commands) {
      list.push(listItem(item, item.name));
    }
    return <div className="displaybar">{list}</div>;
  }

  // 一般情况
  const sliceName = (name, index) => (
    <>
      {name.slice(0, index)}
      <span>{name.slice(index, index + searchValue.length)}</span>
      {name.slice(index + searchValue.length)}
    </>
  );
  for (let item of commands) {
    const name = item.name;
    const ind = name.toLowerCase().indexOf(searchValue);
    if (ind < 0) continue;
    list.push(listItem(item, sliceName(name, ind)));
  }
  return <div className="displaybar">{list}</div>;
}

export default DisplayBar;
