/** 图片转base64 */
export function fileImport(imgProcess) {
  let file = document.getElementById("file").files[0];
  if (!file) return;
  const blob = new Blob([file], { type: file.type ?? "application/*" });
  // const blobUrl = window.URL.createObjectURL(blob)
  let reader = new FileReader();
  reader.onload = () => {
    file.size > 2097152
      ? compression(reader.result, imgProcess)
      : imgProcess(reader.result);
  };
  reader.readAsDataURL(blob);
}

/** 压缩图片 */
function compression(img, imgProcess) {
  let image = new Image();
  image.setAttribute("crossOrigin", "anonymous");
  image.src = img;
  let myCanvas = document.createElement("canvas");
  let ctx = myCanvas.getContext("2d");
  image.onload = () => {
    myCanvas.width = image.width;
    myCanvas.height = image.height;
    ctx.drawImage(image, 0, 0);
    const url = myCanvas.toDataURL("image/jpeg", 0.7);
    imgProcess(url);
  };
}

