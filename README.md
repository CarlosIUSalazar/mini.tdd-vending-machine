# Practice pairing and test-driven development skills as you create a vending machine.

Objectives
In this task you will:

Use test-driven development to create a state machine
Practice writing tests before code
Practice using the SEAT pattern for tests
Practice effective pairing techniques
User story
As a shopper,
I would like to have a vending machine
So that I can buy goods efficiently.
State
balance - the amount of money currently inserted but not yet used
till - a map of coins and counts in the machine
selectedRow - stores the row selected, if any
selectedColumn - stores the selected column, if any
Behavior
Please note that these are suggestions for methods, you will probably have an easier time adding more than these methods to make testing easier. Remember: Single Responsibility Principle, a method should only do 1 thing.

insertCoin(denomination) - to put a coin in the machine
changeReturn() - logs the coins to the console and resets the balance
pressButton('A'-'D') - select a row
pressButton(1-4) - select a column
Instructions
Model the products as a 4x4 array of arrays containing your favorite products, with a name and price, eg:

const juice = {name: `Apple Juice`, price: 350, count: 5};
const coffee = {name: "Tully's", price: 250, count: 7};

const inventory = [
  [juice, coffee, ..., ...],
  [..., ..., ..., ...],
  [..., ..., ..., ...],
  [..., ..., ..., ...],
]
The happy path should proceed as follows:

Insert coins
Select a row
Select a column
Dispense the product (log to console)
Update the inventory
Dispense change
Acceptance criteria
Given that the balance is zero, when a coin is inserted, then the balance should rise and types of coins should be stored
Given that no row is selected, when a row is selected the letter should be saved and printed to the console
Given that a row is selected, when there is sufficient balance and inventory and a column is selected
then the row and column should be logged to the console
and a message should be logged stating "Here is your [item name]"
and the item inventory should decrease by 1
and the correct change should be returned (log type and number of coins to console)
Given that a row and column are selected, when there is no inventory at that column, then an error message should be logged.
Given that a row and column are selected, when the balance is insufficient to purchase the selected item, then an error message should be printed
Given that the program has just started, when the balance is read, then it should read zero
Please note: you must track both the types of coins and number of coins to compute the balance and return change

Unhappy paths
At minimum, you must implement tests for all the acceptance criteria, however should not limit yourself to only these tests. Write as many tests as needed.

As a good TDD developer, when you find an edge case outside the specs, you should ask your PM (instructor) what the desired functionality should be.

Pairing
Take this opportunity to practice ping-pong pairing:

The pair on the left writes a failing test
The pair on the right writes the minimum code to make it pass
Righty then writes the next test
Lefty gets the test to pass
Don't forget to refactor, and only do so when green!

Hint: do not try to test what is being logged to console, instead think about how to structure your methods and have them return objects for things such as returned change or dispensed item, this then allows you to test the return value

Setup
yarn
yarn test
