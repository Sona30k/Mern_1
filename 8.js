//copy and spread
/*let a1=["sona",19,true];
let a2=a1;
a1.push("hey")
console.log(a1);
console.log(a2)*/

let ar1=["mango",50,"tasty"]
let ar2=[...ar1]//spread operator
//let ar2=ar1.slice(0).concat("ooppss");
ar2.push("fuckyou");
console.log(ar1);
console.log(ar2);