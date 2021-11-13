// Backward Compatibility

function add(...n) {
  let x = 5 + add.arguments[add.arguments.length -2]; // Add the first value from the argument when its invoked to 5.
  return x;
}

let result = add(2, 3, 5, 7, 5, 3);
// console.log(result);

// Function Calling other function
const cutSomething = function(fruits) {
  return fruits * 4;
}

let checkResult = cutSomething(30)
// console.log(checkResult);

// Fruit Functions ::: Examples of function calling another function

const cutPieces = function (fruit) {
  return fruit * 4;
}

const fruitsProcessor = function (apples, oranges) {
  const applesPieces = cutPieces(apples);
  const orangesPieces = cutPieces(oranges);
  
  const juice = `Juice with ${applesPieces}, pieces of apple and ${orangesPieces} pieces of orange`
  return juice;
}

const getJuice = fruitsProcessor (20, 10);
console.log(getJuice);

// Function Declaration example

let funCaller = declareFunc();

function declareFunc () {
  console.log("The Function was called before its declared.");
}

// Function expression

const funcExpression = function () {
  console.log("This is an example of a function expression.");
}

// Arrow Function
const arrowFunc = () => 
  console.log("This is an example of a ARROW function")

funCaller = funcExpression();

arrowFunc();



// Scoping sample

const myName = 'Ibrahim';

function theScope(){
  console.log(myName)
}

theScope();

// Example Fnction scope

const data = [23, 56, 78];

if (data) {
  const collectData = data;
}

const 