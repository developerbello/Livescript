console.log(`
  The new developer is back!!!
    Am Bello Ibrahim.
    A Software Developer @SelfTaught
  `);

  var condition = 'condition';

  /* JavaScript basics concept
  
  1. DataType
  2. Variables
  3. Conditional
  4. Iterations
  5. Objects
  */


/* Datatype
Is basically how we represent how data. The representation of can come in different forms such as
number, string, boolean, Symbol ,undefined, null
*/

const example = 20; // How to declare variable without assignment
// example = 30;
console.log(example);
console.log(3456)
/*Variable
basically placeholder of a momory location. Js uses the keyword such as 
"var, let and const" at the start of the declaration a variable.
*/

var   variableName  = "First Value Of Type"; // String values representation
let   variableName2 = -234; // number values representation
const variableName3 = true; // Boolean values representation

console.log(`
  These are the different dataType representation of JavaScript 
  Variable one as 'number type' ${variableName}
  Variable two as 'number type' ${variableName2}
  Variable three as 'number type' ${variableName3} 
`)

/* Conditional
baiscally used in writing logical/conditional solutions to a partical problem.
*/

if(condition) {
  // Expression
} else if(condition) {
  // Expression
} else {
  // Expression
}

// Some other ways we can write our conditional solutions such 'switch statement and

switch(condition){
  case condition === 'condition':
    console.log('Hello Lagos');
    break;
  case condition === 'problem':
    console.log('Hello Katsina');
    break;
  default:
    console.log('Hello No city');
}
