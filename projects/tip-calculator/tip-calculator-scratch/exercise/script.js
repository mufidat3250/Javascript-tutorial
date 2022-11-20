/* 
🌟 APP: Tip Calculator

These are the 3 functions you must use 👇
=========================================
calculateBill()
increasePeople()
decreasePeople()

These functions are hard coded in the HTML. So, you can't change their names.

These are all the DIV ID's you're gonna need access to 👇
========================================================
#1 ID 👉 'billTotalInput' = User input for bill total
#2 ID 👉 'tipInput' = User input for tip
#3 ID 👉 'numberOfPeople' = Current number of people you're splitting the bill between
#4 ID 👉 'perPersonTotal' = Total dollar value owed per person
*/

// Get global access to all inputs / divs here (you'll need them later 😘)
// bill input, tip input, number of people div, and per person total div

const billInput = document.getElementById("bill-total-input");
const tipsInput = document.getElementById("tips-input");
const people = document.querySelector(".num-of-people");
const perPerson = document.querySelector(".per-person");
// Get number of people from number of people div

let numOfPeople = Number(people.innerText);

// ** Calculate the total bill per person **
const calculateBill = () => {
  // get bill from user input & convert it into a number
  let bill = Number(billInput.value);
  // get the tip from user & convert it into a percentage (divide by 100)
  let tips = Number(tipsInput.value) / 100;
  // get the total tip amount
  const tipAmount = bill * tips;
  // calculate the total (tip amount + bill)
  let total = tipAmount + bill;
  // calculate the per person total (total divided by number of people)
  let perPersonTotal = total / numOfPeople;
  console.log(perPersonTotal);
  // update the perPersonTotal on DOM & show it to user
  perPerson.innerText = `$${perPersonTotal.toFixed(2)}`;
};

// ** Splits the bill between more people **
const increasePeople = () => {
  // increment the amount of people
  numOfPeople += 1;
  // update the DOM with the new number of people
  console.log(perPerson);
  people.innerText = numOfPeople;

  // calculate the bill based on the new number of people
  calculateBill();
};

// ** Splits the bill between fewer people **
const decreasePeople = () => {
  // guard clause
  // if amount is 1 or less simply return
  if (numOfPeople <= 1) return 1;
  else {
    numOfPeople -= 1;
  }

  people.innerText = numOfPeople;
  calculateBill();
  // (a.k.a you can't decrease the number of people to 0 or negative!)
  // decrement the amount of people
  // update the DOM with the new number of people
  // calculate the bill based on the new number of people
};
