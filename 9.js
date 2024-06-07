//object
let obj={
    //name:"sona",
    age:19,
    //"last name":"kerketta",
    fun : function() {
        console.log("yeaaahhh");
    },
    arr:[20,30,40,50]

}
console.log(obj.name);
console.log(obj["age"]);
console.log(obj["last name"]);
//console.log(obj.fun());
console.log(obj.arr);
let a="key2";
obj[a]="burgerrr"
obj.key="pizzaa"
console.log(obj);
for(i in obj){
    console.log(obj);
    console.log(obj[i])
}
for(let j of Object.keys(obj)){
    
    console.log(obj[j])
}