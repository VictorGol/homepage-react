type ImgProcess = (img: string) => void;

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
