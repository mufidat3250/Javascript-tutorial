/* 
  TODO: Write a function that sums two numbers
  TODO: Write a function that subtracts two numbers
  TODO: Write a function that divides two numbers.
  TODO: Write a function that multiplies two numbers.
  *NOTE* be sure to handle dividing by zero 😉
  ES5 Syntax: function Add(){}
  ES6 Syntax (Arrow function): const add = () => {}
*/

function add(a,b){
  //Add function here
  return a+b
}

function sub(a,b){
  //Subtract function here
  return a-b
}

function div(a,b){
  //Divide function here
  return a/b
}

function mul(a,b){
  //Multiply function here
  a*b
}

console.log('hello from the SUM exercise')
/* 
  TODO: create a function that console logs the result of any of the above operations.
*/
function result (){
  console.log('check', mul(3,5))
}
result()