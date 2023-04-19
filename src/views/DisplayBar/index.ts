import { Command } from "../../utils/constant";

function processCommands(commands: Command[], x: string) {
  return commands
    .map((item) => ({ ...item, tag: [...item.tag] }))
    .filter((v) => {
      if (x === "*" || v.name.toLowerCase().includes(x)) return true;
      return v.tag.some((a) => {
        if (!a.toLowerCase().includes(x)) return false;
        v.name += `[${a}]`;
        return true;
      });
    });
}

export { processCommands };