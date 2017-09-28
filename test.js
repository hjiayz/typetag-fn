let t = new (require("typetag"))(true);
let i = t.index;
t.load(require("./index.js"));
t.raw((o) => Number.isInteger(o)).define("int");
let inc = t.fn(i.int, i.int, (a) => a + 1);
if (inc(1) != 2) throw new Error("bad result");