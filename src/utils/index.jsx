/** 高亮 */
export const highLightStr = (text, index, length) => (
  <>
    {text.slice(0, index)}
    <span>{text.slice(index, index + length)}</span>
    {text.slice(index + length)}
  </>
);