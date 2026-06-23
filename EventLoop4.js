const fs = require("fs")

setImmediate(() => console.log("setimmediate"));
setTimeout(() => console.log("settimeout"),0);
Promise.resolve("Promise").then(console.log);

fs.readFile("./file.txt", "utf-8", (err, data) => {
    console.log(data);
})

process.nextTick(() => {
    process.nextTick(() => console.log("inner nexttick"));
    console.log("process.nexttick")
})

console.log("last line of program");

/**
 * Last line of the proram
 * Process.nextTick
 * inner nextTick
 * promise
 * setTimeout
 * setIntermediate
 * file date
 */