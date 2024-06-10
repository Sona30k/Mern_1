//sets
const arr=[10,20,30,40,50,20]
console.log(arr);

const s=new Set([2,3,5,2]); //only unique values
s.add(70);
s.add("hey");

length=0;
for (let element of s){
    length++;
}
console.log(length);
console.log(s);

//map

var map1= new Map([[1,"id"],
    ["name","sona"],
    ["number",[1,2,3,4,5]]])

console.log(map1);
console.log(map1.get("name"));
var key=map1.keys();
for(let i of key){
    console.log(i);
}


var map2=new Map()
map2.set("fname","cat")
console.log(map2);
