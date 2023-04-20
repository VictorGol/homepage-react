const title = document.getElementsByTagName("title")[0];

// searchValue变化时产生的影响
function onSearchValueChange(val: string): string {
  if (val !== "bgl") document.getElementById("file")?.remove();
  if (/\.\.$/.test(val)) val = "";
  title.innerHTML = val || "⚪";
  return val;
}

export { onSearchValueChange };
