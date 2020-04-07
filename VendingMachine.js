/* eslint-disable no-undef */
/* eslint-disable prettier/prettier */
// your class here
/*
  >>> Don't forget to use module.exports!
  What is that? Well, glad you asked.
  Read about it here: https://www.sitepoint.com/understanding-module-exports-exports-node-js/
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
      fivehundreds++;
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

  purchase() {
    const drink = this.inventory[this.selected.selectedRow][
      this.selected.selectedColumn
    ];
    if (drink.count > 0 || this.balance > drink.price) {
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
    } else {
      this.soldOut(drink.name);
    }
  }
}

module.exports = VendingMachine;
