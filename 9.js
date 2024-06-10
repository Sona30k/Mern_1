//object
/*let obj={
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
}*/

//objects inside array

let are=[
    {user:1, name:"sona"},
    {user:2, name:"ashu"},
    {user:3, name:"dak"}
    ]
console.log(are[0]);
for(let i in are){
    console.log(are[i]);
    console.log(are[i.name])
}
let [a,b,{name}]=are;
console.log(a);
console.log(b);
console.log(name)
