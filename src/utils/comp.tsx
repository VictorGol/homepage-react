import React from "react";

/** 高亮 */
export const highLightStr = (
  text: string,
  index: number,
  length: number
) => (
  <>
    {text.slice(0, index)}
    <span>{text.slice(index, index + length)}</span>
    {text.slice(index + length)}
  </>
);
