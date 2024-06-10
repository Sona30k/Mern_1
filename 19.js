//set-interval



/*setInterval(fun,2000)
function fun(){
    let date = new Date().toLocaleTimeString();
    //console.log(date);
    console.log(date);
}
setTimeout(()=>{
    clearInterval();
},6000)*/


//call bind apply

function fun (age,gender){
    console.log(this.name,age,gender)
}

var obj1={
    name:"sona",
    

}
 var obj2={
    name:"baby",
    
    
 }
 fun.call(obj2,18,"transgender");
 fun.apply(obj2,[18,"transgender"]);
  var a=fun.bind(obj2,[18,"transgender"]);
  console.log(typeof a)
    


