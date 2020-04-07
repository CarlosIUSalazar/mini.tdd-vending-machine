/* eslint-disable prettier/prettier */
const VendingMachine = require("../VendingMachine");
const { expect } = require("chai");

describe("vending machine", () => {
  it("#1 should accept valid coins", () => {
    // Setup
    const machine = new VendingMachine();

    // Exercise
    machine.insertCoin(500);

    // Assert
    expect(machine.till).to.deep.equal({
      10: 0,
      50: 0,
      100: 0,
      500: 1,
    });
    expect(machine.balance).to.equal(500); // Use an ES6 getter
  });

  it("#2 should save selected row, and log it to the console", () => {
    // Setup
    const machine = new VendingMachine();

    // Exercise
    machine.insertCoin(500);
    machine.selectRow(0);
    // console.log("AAAAAAAAAAA", machine.selected.row);

    // Assert
    expect(machine.selected.selectedRow).to.be.equal(0);
  });

  it("#3 should log row and column if row is selected and sufficient balance, and sufficient inventory and column is selected", () => {
    // Setup
    const machine = new VendingMachine();

    // Exercise
    const juice = { name: `Apple Juice`, price: 350, count: 5 };
    const coffee = { name: "Tully's", price: 250, count: 7 };

    const inventory = [
      [juice, coffee, coffee, coffee],
      [coffee, coffee, coffee, coffee],
      [coffee, coffee, coffee, coffee],
    ];
    machine.inventory = inventory;
    machine.insertCoin(500);
    machine.selectRow(0);
    machine.selectColumn(0);
    machine.purchase();

    // Assert
    expect(machine.inventory[0][0].count).to.be.equal(4);
    expect(machine.balance).to.be.equal(150);
    expect(machine.selected.selectedRow).to.equal(undefined);
    expect(machine.selected.selectedColumn).to.equal(undefined);
  });

  it("#4 It should start with balance of zero", () => {
    // Setup
    const machine = new VendingMachine();

    // Exercise

    // Assert
    expect(machine.balance).to.be.equal(0);
  });

  it("#5 Should not decrease the inventory or balance if insufficient balance", () => {
    // Setup
    const machine = new VendingMachine();

    // Exercise
    const juice = { name: `Apple Juice`, price: 350, count: 5 };
    const coffee = { name: "Tully's", price: 250, count: 7 };

    const inventory = [
      [juice, coffee, coffee, coffee],
      [coffee, coffee, coffee, coffee],
      [coffee, coffee, coffee, coffee],
    ];
    machine.inventory = inventory;
    machine.insertCoin(200);
    machine.selectRow(0);
    machine.selectColumn(0);
    machine.purchase();

    // Assert
    expect(machine.inventory[0][0].count).to.be.equal(5);
    expect(machine.balance).to.be.equal(200);
    expect(machine.selected.selectedRow).to.equal(undefined);
    expect(machine.selected.selectedColumn).to.equal(undefined);
  });

  it("#6 Should return the right change upon successful sale", () => {
    // Setup
    const machine = new VendingMachine();

    // Exercise
    const juice = { name: `Apple Juice`, price: 350, count: 5 };
    const coffee = { name: "Tully's", price: 250, count: 7 };

    const inventory = [
      [juice, coffee, coffee, coffee],
      [coffee, coffee, coffee, coffee],
      [coffee, coffee, coffee, coffee],
    ];
    machine.inventory = inventory;
    machine.insertCoin(500);
    machine.selectRow(0);
    machine.selectColumn(0);
    machine.purchase();

    // Assert
    expect(machine.inventory[0][0].count).to.be.equal(4);
    expect(machine.balance).to.be.equal(150);
    expect(machine.selected.selectedRow).to.equal(undefined);
    expect(machine.selected.selectedColumn).to.equal(undefined);
  });

  // it("#5 should call soldOut Functions that logs a sold out message", () => {
  //   // Setup
  //   const machine = new VendingMachine();

  //   // Exercise
  //   const juice = { name: `Apple Juice`, price: 350, count: 0 };
  //   const coffee = { name: "Tully's", price: 250, count: 7 };

  //   const inventory = [
  //     [juice, coffee, coffee, coffee],
  //     [coffee, coffee, coffee, coffee],
  //     [coffee, coffee, coffee, coffee],
  //   ];

  //   machine.inventory = inventory;
  //   machine.insertCoin(500);
  //   machine.selectRow(0);
  //   machine.selectColumn(0);
  //   machine.purchase();
  //   //console.log("AAAAAAAAAAA", machine.selected.row);

  //   // Assert
  //   expect(soldOut).to.have.been.called()
  // });
});
