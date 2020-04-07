/* eslint-disable no-undef */
/* eslint-disable prettier/prettier */
// your class here
/*
  >>> Don't forget to use module.exports!
  What is that? Well, glad you asked.
  Read about it here: https://www.sitepoint.com/understanding-module-exports-exports-node-js/

The happy path should proceed as follows:

1.  Insert coins
1.  Select a row
1.  Select a column
1.  Dispense the product (log to console)
1.  Update the inventory
1.  Dispense change

## Acceptance criteria

1.  _Given_ that the balance is zero, _when_ a coin is inserted, _then_ the balance should rise _and_ types of coins should be stored
1.  _Given_ that no row is selected, _when_ a row is selected the letter should be saved and printed to the console
1.  _Given_ that a row is selected, _when_ there is sufficient balance and inventory and a column is selected
    1.  _then_ the row and column should be logged to the console
    1.  _and_ a message should be logged stating "Here is your [item name]"
    1.  _and_ the item inventory should decrease by 1
    1.  _and_ the correct change should be returned (log type and number of coins to console)
1.  _Given_ that a row and column are selected, _when_ there is no inventory at that column, _then_ an error message should be logged.
1.  _Given_ that a row and column are selected, _when_ the balance is insufficient to purchase the selected item, _then_ an error message should be printed
1.  _Given_ that the program has just started, _when_ the balance is read, _then_ it should read zero

**_Please note: you must track both the types of coins and number of coins to compute the balance and return change_**

*/

class VendingMachine {
  constructor() {
    this.balance = 0;
    this.till = {
      "10": 0,
      "50": 0,
      "100": 0,
      "500": 0,
    };
    this.selected = {
      selectedRow: undefined,
      selectedColumn: undefined,
    };
    this.inventory;
  }

  insertCoin(insertedCoin) {
    this.balance += insertedCoin;
    this.till[`${insertedCoin}`]++;
  }

  selectRow(row) {
    this.selected.selectedRow = row;
  }

  selectColumn(column) {
    this.selected.selectedColumn = column;
  }

  soldOut(drink) {
    console.log(`Sorry ${drink} is Sold Out!`);
  }

  returnChange(balance) {
    let bal = balance;
    let fiveHundreds = 0;
    let oneHundreds = 0;
    let fiftys = 0;
    let tens = 0;

    if (bal === 0) {
      return console.log("No change needed");
    }
    while (bal >= 500) {
      bal -= 500;
      fiveHundreds++;
    }
    while (bal >= 100) {
      bal -= 100;
      oneHundreds++;
    }
    while (bal >= 50) {
      bal -= 50;
      fiftys++;
    }
    while (bal >= 10) {
      bal -= 10;
      tens++;
    }

    console.log(
      "Your change is " +
        balance +
        ". You get:" +
        fiveHundreds +
        " 500 coins, " +
        oneHundreds +
        " 100 coins, " +
        fiftys +
        " 50 coins, and " +
        tens +
        " 10 coins"
    );
  }

  successfulSale(drink) {
    console.log(`Here is your ${drink}`);
  }

  notEnoughBalance(drink, difference) {
    console.log(
      `Not enough money for ${drink}. Please insert ${difference} more.`
    );
  }

  purchase() {
    const drink = this.inventory[this.selected.selectedRow][
      this.selected.selectedColumn
    ];
    // If enough money but not enough inventory then soldOut()
    if (drink.count === 0 && this.balance >= drink.price) {
      this.soldOut(drink.name);
      this.selected.selectedRow = undefined;
      this.selected.selectedColumn = undefined;
    }
    // If not enough money
    if (this.balance < drink.price) {
      let difference = drink.price - this.balance;
      this.notEnoughBalance(drink.name, difference);
      this.selected.selectedRow = undefined;
      this.selected.selectedColumn = undefined;
    }
    // If enough money and enough inventory then successful purchase
    if (drink.count > 0 && this.balance >= drink.price) {
      if (
        this.selected.selectedRow !== undefined &&
        this.selected.selectedColumn !== undefined
      ) {
        this.balance -= drink.price;
        drink.count--;
        this.successfulSale(drink.name);
        this.returnChange(this.balance);
      }
      this.selected.selectedRow = undefined;
      this.selected.selectedColumn = undefined;
    }
  }
}

module.exports = VendingMachine;
