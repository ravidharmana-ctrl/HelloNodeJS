const fs = require("fs");
const { error } = require("node:console");
const https = require("node:https");

console.log("Hellopw world");

var a = 107869;
var b = 20986;

https.get("https:/dummyjson.com/products/1", (res)=>{
    console.log("Fetched Data Successfully");
});

setTimeout(()=>{
 console.log("set timeout called after 5 seconds");
},5000)

fs.readFileSync("./file.txt", "utf-8");
console.log("affter file read");

fs.readFile("./file.txt", "utf-8", (error, data)=>{
    console.log("file data:",data); 
})

function multiplyFunc(x,y){
    const result = a*b;
    return result;
}

var c = multiplyFunc(a,b);

console.log("Multiplication result is:" ,c);