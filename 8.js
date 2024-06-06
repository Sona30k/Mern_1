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

//array destructing

let are1=["sde","google",25,"soon","goal"]
let item1=are1[0];
let item2=are1[1];
let item3=are1[2];
console.log(item1);
console.log(item2);
console.log(item3);

let[ a,b,c,...d]=are1;
console.log(a);
console.log(b);
console.log(c);
console.log(d);