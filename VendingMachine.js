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
  purchase() {
    const drink = this.inventory[this.selected.selectedRow][
      this.selected.selectedColumn
    ];
    if (drink.count > 0 || this.balance > drink.price) {
      console.log("CCCCCCCCCCCC", drink.count);
      console.log(
        "DDDDDDDDDD",
        this.selected.selectedRow,
        this.selected.selectedColumn
      );
      if (
        this.selected.selectedRow !== undefined &&
        this.selected.selectedColumn !== undefined
      ) {
        this.balance -= drink.price;
        console.log("AAAAAAAAAAA", drink.count);
        drink.count--;
        console.log("BBBBBBBBBB", drink.count);
        console.log(`HERE is the ${drink.name}`);
      }
      this.selected.selectedRow = undefined;
      this.selected.selectedColumn = undefined;
    } else console.log("DDDDDDDDD sold out or lack of balance");
  }
}

module.exports = VendingMachine;
