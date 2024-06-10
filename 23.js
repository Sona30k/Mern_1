//static Static methods are called directly on the class



class Animal{  
    constructor(name){
        this.name=name;
        
    }
    speak(){
        console.log(`${this.name} meow meow`)
    }

    static sound(name){
        console.log(`${name} tuntunk tunuk`)
    }

}

let c="tilli says"
//let c= new Animal("tilli says");
Animal.sound();
Animal.sound(c);



class Game{
    static score=100;
    constructor(){
        this.play=false;
    }
    start(){
        this.play=true;
        console.log("game has started")
    }
    end(){
        this.play=false;
        console.log("game has ended")
        Game.updatescore()
    }
    static updatescore(){
        Game.score++;
        console.log(`score: ${Game.score}`)
    }
}

let game= new Game();
game.start();
game.end();
game.end();
game.end();
