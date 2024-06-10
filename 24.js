//private

class Account{
    #balance=1000;
    deposit(amount){
        this.#balance += amount;
        console.log(`deposited ${amount}, new balance is ${this.#balance}`);

    }
    withdraw(amount){
        if (amount> this.#balance){
            console.log("insfficient amount")
        }
        else{
            this.balance -= amount;
            console.log(`withdraw ${amount} new balance is${this.#balance}`)
        }
    }
    fun(){
        console.log(this.#balance)
    }
}

let account= new Account ();
account.deposit(5000);
account.withdraw(300);
console.log(account.balance)
account.fun()
//console.log(account.fun())