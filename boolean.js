/* Example code for Boolean type 

age is 16

A: Age is greater or equal to 20.  -> false
B: Age is less than 30.  -> true
*/

// Let's Use the oparator

let age = 16;

const A = age > 20 ? true : false;
const B = age < 30 ? true : false;

console.log("A >>> ", A, "B >>> ", B);

if(A && B) {
  console.log(true);
} else {
  console.log(false);
}

if(A || B) {
  console.log(true);
} else {
  console.log(false);
}

if(!A && B) {
  console.log(true);
} else {
  console.log(false);
}

if(A && !B) {
  console.log(true);
} else {
  console.log(false);
}
