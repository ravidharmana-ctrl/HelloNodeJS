const crypto = require("crypto");

console.log("Hellopw world");

var a = 107869;
var b = 20986;
// Password based key derative function
crypto.pbkdf2Sync("password", "salt" ,5000000, 50, "sha512");
console.log("first key is generated");

crypto.pbkdf2("password", "salt" ,500000, 50, "sha512" , (err, key)=>{
console.log("key is generated");
});
function multiplyFunc(x,y){
    const result = a*b;
    return result;
}

var c = multiplyFunc(a,b);

console.log("Multiplication result is:" ,c);