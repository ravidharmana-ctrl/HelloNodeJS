console.log("Hellopw world");

var a = 107869;
var b = 20986;

setTimeout(()=>{
    console.log("call me right now");
},0); // Trust issues with setTimeout

setTimeout(()=>{
    console.log("call me after 3 seconds");
},3000);

function multiplyFunc(x,y){
    const result = a*b;
    return result;
}

var c = multiplyFunc(a,b);

console.log("Multiplication result is:" ,c);