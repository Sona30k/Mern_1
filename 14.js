//constructor
//named. with capital letter first
//should be executed only with "new" operator

function User(name){
    if(!new.target){
        return new User(name);
    }
    this.name=name
}
//console.log(new User("tony"));
let fname= new User("jack");
console.log(fname.name);

//symbol

let ax = Symbol("id");
console.log(ax);
console.log(ax.toString);
console.log(ax.description);

let id=Symbol("id");
let obj={
    name:"jhon",
    //[id]:1,
    age: 90,

}

obj[id]=3;
console.log(obj);
console.log(obj.name);
console.log(obj[id]);
for(let key in obj){
    console.log(key)
}//symbol is hidden property