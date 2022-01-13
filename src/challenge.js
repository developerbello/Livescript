/*
Given an array of forecasted maximum temperature,
the thermometer displays a string with these 
temperatures.

Example: [17, 21, 23] will print "... 17C in 1 day...
21C in 2 days ... 23C in 3 days ..."

Create a function 'printForecast' which takes array 'arr'
and logs string like the above to the console.

Using the problem solving techniques such as:
- Understand the problem
  - transform array to string
  - index + 1
- Break the problem down into sub-problem
  - iterate through array 
  - index (position of each element of the array) + 1 (simplifies to the days based on the elements position)
  - log to console the str concatanation of the elements
*/ 

let testCaseOne = [17, 21, 23]
let testCaseTwo = [12, 5, -5, 0, 4]

// console.log(`... ${testCaseOne[0]}°C in 1 days ... ${testCaseOne[1]}°C in 2 day ... ${testCaseOne[2]}°C in 3 day`)


const printForecast = function (arr) {
  let str = ''
  for (let i = 0; i < arr.length; i++) {
    str += `${arr[i]}°C in ${i+1} days ... `
  } 
  console.log(`... ${str}`)
}


const result = printForecast(testCaseTwo)



// const printForecast = function (arr) {
//   // Iterate through the arr 
//   for (let i = 0; i < arr.length; i++) {
//     const currElem = arr[i]
    
//     if (currElem >= 10 && currElem <= 18) {
//       console.log(currElem + "°C in 1 days")
//     } 
//     if (currElem >= 19 && currElem <= 22) {
//       console.log(currElem + "°C in 2 days")
//     } 
//     if (currElem >= 23) {
//       console.log(currElem + "°C in 3 days")
//     } 
//   }
// }

