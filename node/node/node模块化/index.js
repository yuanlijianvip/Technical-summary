//AMD sea.js  CMD require.js
console.log("我是index.js");
let Ma = require("./Ma.js");
console.log(Ma.a);
let cai = new Ma.Person();
cai.hobby();