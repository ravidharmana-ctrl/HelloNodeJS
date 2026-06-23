require("./XYZ.JS");
// const { x,calculateSum} = require("./calculate/Sum.js");
// import "./xYz.js";

// import {x,calculateSum} from "./Sum.js";

const {calculateSum, calculateMultiple} = require("./calculate");
const data = require("./data.json");
var a = 10;
var b = 20;
// var x=300;
calculateSum(a,b);
// console.log(x);
calculateMultiple(a,b);
console.log(JSON.stringify(data));
console.log(module.exports);
