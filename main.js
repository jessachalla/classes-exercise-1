//Create a class called "BankAccount"
//Properties: balance, interestRate 
//Methods: addInterest() - increases the balance by adding the appropriate interest
class BankAccount {
    constructor(balance, interestRate){
        this.balance = balance;
        this.interestRate = interestRate;
    }
    addInterest(){
        this.balance = this.balance + (this.balance * this.interestRate);
    }
}

//Create a subclass called "BankAccountWithFee"
//It inherits all the properties and methods 
//from BankAccount and adds the following. 
//Properties: fee - a fixed dollar amount fee 
//Methods: applyFee() - subtracts the fee from the balance
class BankAccountWithFee extends BankAccount {
    constructor(balance, interestRate, fee){
        super(balance, interestRate);
        this.fee = fee;
    }
    addInterest(){
        this.balance = this.balance + (this.balance * this.interestRate);
    }
    applyFee(){
        this.balance = this.balance - this.fee;
    }

}


//Create a few instances (a.k.a. objects) 
//of each class, and test them out 
//by calling the methods.
let jessaBankAccount = new BankAccount (1200, .02);
let mikeBankAccount = new BankAccountWithFee (5000, .07, 5);
jessaBankAccount.addInterest();
mikeBankAccount.addInterest();
mikeBankAccount.applyFee();
console.log(jessaBankAccount)
console.log(mikeBankAccount)