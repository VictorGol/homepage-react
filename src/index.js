function getStorage() {
  return localStorage.getItem("homepage");
}

function setStorage(obj) {
  const str = JSON.stringify(obj);
  return localStorage.setItem("homepage", str);
}

export function updateStorage(updateElement) {
  const obj = JSON.parse(getStorage());
  const objNew = { ...obj, ...updateElement };
  setStorage(objNew);
}

export function inputFocus() {
  const input = document.getElementsByTagName("input")[0];
  input.focus();
}

export const searchEngine = {
  baidu: "https://www.baidu.com/s?wd=",
  bing: "https://www.bing.com/search?q=",
  google: "https://www.google.com/search?q=",
  fsou: "https://fsoufsou.com/search?q=",
  brave: "https://search.brave.com/search?q=",
  duckduckgo: "https://duckduckgo.com/?q=",
  sougou: "https://www.sogou.com/web?query=",
  petal: "https://petalsearch.com/search?query=",
};

export function init() {
  const str = getStorage();
  if (str) return JSON.parse(str);

  const obj = {
    img: "https://images.unsplash.com/photo-1680100612420-e57b14dd2c7e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2564&q=80",
    trp: 0,
    pos: "50,50",
    blur: 0,
  };
  setStorage(obj);
  return obj;
}
