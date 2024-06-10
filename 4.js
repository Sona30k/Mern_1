//functions

/*function name(a, b,c){
    console.log(a+b+c) ;
}
let x=9;
let y=3;

name( x,y,20);*

function name(a, b,c){
    return a+b+c;
}
let x=9;
let y=3;
let add= name(x,y,70);
console.log(add);*/

//local vairable

let a=5//global
function local(){
    let b=3;//local
    console.log(a);
}
local();
 

//anonymous function

let fun= function(){
    console.log("pizzzaaa");
}
fun();

//invkoed self func
( function(){
    console.log("pizzzaaa");
})();

//arrow func

let x= (a,b)=> console.log(a+b);
x(2,4);
