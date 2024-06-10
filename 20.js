//property flags and descriptors

let exe={};
exe.name="sonaa";
console.log(Object.getOwnPropertyDescriptors(exe,"name"))

Object.defineProperty(exe,"age", {
    value: 21,
    writable: false,
    configurable:true,
    enumerable:true
});
exe.age
console.log(Object.getOwnPropertyDescriptors(exe,"age"))

//proto

let obj={
    name:"chandu"
};
/*let obj2={
    lname:"lalu"
};

obj2.__proto__ =obj;*/


//console.log(obj2.name)
//console.log(obj2)

obj2 =Object.create(obj)
console.log(obj2.name)

//prototype

function Person(name,age){
    
    let person = Object.create(Person.prototype)
    person.name =name;
    person.age=age;
    return person 

}

Person.prototype.greet= function(){
    console.log(`suppp ${this.name}`)
    }

let user= Person("sona",19)
user.greet()
console.log(user)
console.log(Person.prototype)
