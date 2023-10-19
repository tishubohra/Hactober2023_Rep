class BankAccount {
  constructor(owner, balance = 0) {
    this.owner = owner;
    this.balance = balance;
  }

  deposit(amount) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (amount > 0) {
          this.balance += amount;
          resolve(`Deposited $${amount}. New balance: $${this.balance}`);
        } else {
          reject("Invalid deposit amount.");
        }
      }, 1000);
    });
  }

  withdraw(amount) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (amount > 0 && amount <= this.balance) {
          this.balance -= amount;
          resolve(`Withdrawn $${amount}. New balance: $${this.balance}`);
        } else {
          reject("Insufficient funds or invalid withdrawal amount.");
        }
      }, 1000);
    });
  }
}

async function performTransaction(account, depositAmount, withdrawAmount) {
  try {
    const depositResult = await account.deposit(depositAmount);
    console.log(depositResult);

    const withdrawResult = await account.withdraw(withdrawAmount);
    console.log(withdrawResult);
  } catch (error) {
    console.error(`Error: ${error}`);
  }
}

const userAccount = new BankAccount("John Doe", 1000);
performTransaction(userAccount, 500, 700);
