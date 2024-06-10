//class


class Person {
    constructor(name,age){
        this.name=name;
        this.age=age;
    }
    greet(){
        console.log(`hello ${this.name}`)
    }
}
let user= new Person("sona",90);
user.greet();
console.log(user);

class User{
    constructor(fname){
        this.fname=fname
    }
    sayhiii (){
        console.log(`hippee ${this.fname}`)
    }
}
let user1= new User("asss");
console.log(user1);
user1.sayhiii();


let user2= new User("bitchh");
console.log(user2);
user2.sayhiii();

let user3= new User("dumbb");
console.log(user3);
user1.sayhiii();

console.log(typeof User)
console.log(User.prototype.sayhiii)


