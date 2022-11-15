// variables
// conditionals
// math operators
// arithemetic operators
// functions

// building a baby weather app

// function sayMyname() {}
// console.log("i am here");
// //logs out your name to the console.
// function greatings(name) {
//   let great = "good afternoon sir my name is " + name;
//   console.log(great);
//   console.log(great);
// }
// greatings("mufidat");

// function sum(a, b) {
//   return a + b;
// }
// let num = sum(1, 3);
// console.log(num);

// function calculateFoodTotal(food, tips) {
//   let tipsPercent = tips / 100;
//   let tipAmount = food + tipsPercent;
//   console.log(tipAmount);
//   let total = food + tipAmount;
//   return sum(food, tipAmount);
// }

// let totalfood = calculateFoodTotal(50, 10);
// console.log(totalfood);

// convert the function to an arrow function
//explicite return of an arrow function
// const sum1 = (a, b) => {
//   return a + b;
// };
// implicit return remove the curly brases

// const sum = ()=> a+b

// Arrays

const groceries = ["🥝", "🍌", "🍏", "🥭"];
// some array methods
// push add to the end of an array
groceries.push("🫐");
console.log(groceries);
console.log("intro");
console.log("intro");

// pop => remove from the end of an array
groceries.pop();
console.log("pop", groceries);
// shift
groceries.shift();
console.log(groceries, "shift");
// unshift
groceries.unshift(groceries[groceries.length - 1]);

console.log(groceries, "unshift");

// slice

// let slicedGroceries = groceries.slice(1);
// console.log(slicedGroceries, "slice");
// // splice
// let numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
// console.log(numbers);
// // indexOf => use to get the index of an array
// console.log(numbers.indexOf(5));
// includes
// find
// every
// length

// Object
// they are key value pairs

//addeing item to an object
// person.phoneNumber = "090474732";
// console.log(person);
// // access property from an object
// console.log(person.firstName);
// delete person.firstName;
// console.log(person);
// removing property from an object

const introducer = () => {
  const person = {
    firstName: "Mufidat",
    lastName: "Abiola",
    clothColor: "green",
    assets: 30000,
    liablities: 10000,
    networth: () => {
      return person.assets - person.liablities;
    },
  };
  let intro = `Hi my Name is ${person.firstName} ${
    person.lastName
  }, the color of  my wears is ${person.clothColor}, my assets is ${
    person.assets
  } while my liabilities is ${
    person.liablities
  }. which amount my net worth to be ${person.networth()}`;
  console.log(intro);
  // return intro;
};
introducer();

// forLoop
let newArray = [];
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
for (let number of numbers) {
  newArray.push(number * 2);
}
console.log(newArray);

const letterCounter = () => {
  let result = 0;
  const phrase = "hey, can you go to grocery store with me?";
  for (let i in phrase) {
    result = +i + 1;
  }
  return result;
};
console.log(letterCounter());

const sumArray = (array) => {
  let result = 0;
  for (let arr of array) {
    result = result + arr;
  }
  return result;
};
console.log(sumArray([1, 3]));

// get the maximum number from an array
console.log("max");
const max = (array) => {
  console.log(array);
  let heighest = array[0];
  for (let arr of array) {
    console.log(arr);
    if (arr > heighest) {
      heighest = arr;
    }
  }
  return heighest;
};
// console.log("max", max([1, 2, 3, 4, 2, 3, 7, 1]));

const letterFrequency = (letters) => {
  let result = {};
  for (let l of letters) {
    if (l in result) result[l] = result[l] + 1;
    else result[l] = 1;
  }
  return result;
};
// console.log(letterFrequency("haha"));

const wordFrequency = (letters) => {
  let newword = letters.split(" ");

  //call the letter frequency functiin since there are some similarities between the two
  return letterFrequency(newword);
};
console.log(wordFrequency("what for is this for"));

let numTOFilter = [1, 2, 3, 4, 5, 6];

const filterNumber = (numbers, greaterThan) => {
  return numbers.filter((num, index) => num > greaterThan);
};
console.log(filterNumber([1, 2, 3, 4, 5, 6], 3));

const actors = [
  { name: "johnny", networth: 2000000 },
  { name: "anny", networth: 10 },
  { name: "lemonado", networth: 100000 },
];

let result = actors.filter((actor) => actor.networth > 10);
let name = result.map((actors, index) => actors.name).join(" ");
console.log(name);

const totalnetworth = actors.reduce((acc, cur) => acc + cur.networth, 0);
console.log(totalnetworth);
