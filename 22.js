//inheritance

class Animal{  //parent class
    constructor(name){
        this.name=name;
        
    }
    speak(){
        console.log(`${this.name} meow meow`)
    }

    sound(){
        console.log(`${this.name} tuntunk tunuk`)
    }

}


class Cat extends Animal{
    constructor(name,sound){
        super(name,sound) //super points at parent class
    }
    

}

class Cat2 extends Animal{
    constructor(name){
        super(name)
    }
    

}




let c= new Cat("tilli says");
c.speak();
c.sound();

let ca= new Cat2("billa says");
ca.speak();
ca.sound();
