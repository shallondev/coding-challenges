class BankAccount {
    constructor(accountHolder) {
      // Initialize accountNumber with a random 8-digit number
      this.accountNumber = Math.floor(10000000 + Math.random() * 90000000);
      
      // Initialize accountHolder and balance
      this.accountHolder = accountHolder;
      this.balance = 0;
      this.overdraftLimit = 0;
    }
  
    deposit(amount) {
      // Adds the specified amount to the balance
      this.balance += amount;
    }
  
    withdraw(amount) {
      // Subtracts the specified amount from the balance. Make sure the balance cannot go below 0.
      // Old code: this.balance = (this.balance - amount >= 0) ? this.balance - amount : this.balance;
      if (this.balance - amount >= 0 + this.overdraftLimit) {
        this.balance -= amount;
      }
      else {
        console.log("Insufficient funds :(");
      }
    }
  
    getBalance() {
      return this.balance;
    }

    setOverdraftLimit(limit) {
        this.overdraftLimit += limit;
    }

    transfer(accountRecipient, amount) {
        if (this.balance - amount >= 0 + this.overdraftLimit && accountRecipient instanceof BankAccount) {
            this.balance -= amount;
            accountRecipient.balance += amount;
          }
          else {
            console.log("Insufficient funds :(");
          }
    }
  }

class SavingsAccount extends BankAccount {
    constructor(accountHolder, interestRate) {
      // Call the constructor of the parent class (BankAccount)
      super(accountHolder);
  
      // Initialize the interestRate property
      this.interestRate = interestRate;
    }
  
    calculateInterest() {
      // Implement calculateInterest logic here
      const currentBalance = super.getBalance();
      this.interest = currentBalance * this.interestRate / 100;
    }
  }  
  
