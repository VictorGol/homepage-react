export interface Storage {
  img: string;
  trp: number;
  posx: number;
  posy: number;
  blur: number;
}

interface Obj {
  [key: string]: any;
}

type ImgProcess = (img: string) => void;

export function getStorage() {
  return localStorage.getItem("homepage") as string;
}

export function setStorage(obj: Storage) {
  const str = JSON.stringify(obj);
  return localStorage.setItem("homepage", str);
}

export function updateStorage(updateElement: Obj) {
  const obj: Storage = JSON.parse(getStorage());
  const objNew: Storage = { ...obj, ...updateElement };
  setStorage(objNew);
}

export function updateSetting(key: string, value: any, upperLimit?: number) {
  if (upperLimit) {
    value = parseFloat(value) || 0;
    value = value < 0 ? 0 : value > upperLimit ? upperLimit : value;
  }
  const obj = {};
  obj[key] = value;
  updateStorage(obj);
  return value;
}

export const searchEngine: Obj = {
  baidu: "https://www.baidu.com/s?wd=",
  bing: "https://www.bing.com/search?q=",
  google: "https://www.google.com/search?q=",
  fsou: "https://fsoufsou.com/search?q=",
  brave: "https://search.brave.com/search?q=",
  duckduckgo: "https://duckduckgo.com/?q=",
  sougou: "https://www.sogou.com/web?query=",
  petal: "https://petalsearch.com/search?query=",
};

/** 图片转base64 */
export function fileImport(imgProcess: ImgProcess): void {
  const fileInput = document.getElementById("file") as HTMLInputElement;
  if (!fileInput || !fileInput.files?.[0]) return;

  const file = fileInput.files[0];
  const blob = new Blob([file], { type: file.type ?? "application/*" });
  // const blobUrl = window.URL.createObjectURL(blob)
  let reader = new FileReader();
  reader.onload = () => {
    const img = reader.result as string;
    file?.size > 2097152 ? compression(img, imgProcess) : imgProcess(img);
  };
  reader.readAsDataURL(blob);
}

/** 压缩图片 */
function compression(img: string, imgProcess: ImgProcess): void {
  let image = new Image();
  image.setAttribute("crossOrigin", "anonymous");
  image.src = img;
  let myCanvas = document.createElement("canvas");
  let ctx = myCanvas.getContext("2d");
  image.onload = () => {
    myCanvas.width = image.width;
    myCanvas.height = image.height;
    ctx?.drawImage(image, 0, 0);
    const url = myCanvas.toDataURL("image/jpeg", 0.7);
    imgProcess(url);
  };
}
