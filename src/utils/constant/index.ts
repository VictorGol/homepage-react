import { Command } from "./type";
import a from "./child/a";
import b from "./child/b";
import c from "./child/c";
import d from "./child/d";
import e from "./child/e";
import f from "./child/f";
import g from "./child/g";
import h from "./child/h";
import i from "./child/i";
import j from "./child/j";
import k from "./child/k";
import l from "./child/l";
import m from "./child/m";
import n from "./child/n";
import o from "./child/o";
import p from "./child/p";
import q from "./child/q";
import r from "./child/r";
import s from "./child/s";
import t from "./child/t";
import u from "./child/u";
import v from "./child/v";
import w from "./child/w";
// import x from "./child/x";
import y from "./child/y";
import z from "./child/z";
import zzz from "./child/zzz";

const commands: Command[] = [
  ...a,
  ...b,
  ...c,
  ...d,
  ...e,
  ...f,
  ...g,
  ...h,
  ...i,
  ...j,
  ...k,
  ...l,
  ...m,
  ...n,
  ...o,
  ...p,
  ...q,
  ...r,
  ...s,
  ...t,
  ...u,
  ...v,
  ...w,
  // ...x,
  ...y,
  ...z,
  ...zzz,
];

for (let i in commands) {
  commands[i].id = "c" + i;
}

export { commands };
