# JavaScript Overviews

### What's is JavaScript ?
``` JavaScript is basically a high-level object-oriented, multi-paradigm programming language```
- High-level: We don't have to worry about complex stuff such as memory management.
- Object Oriented: Based on objects, for storing all kinds of data. 
- Multi-paradigm: We can use different programming styles.
- Programming Language: Instructs the computer to do something. 

### Data-type (deals with value)

JavaScript has two main type of data types such as:
- Primitive (eg: number ```(integers and decimals)```, big integer ```(holds larger integer and decimal values)```, string ```(sequence of characters used for text)```, boolean ```(logical type that only be true or false)```, symbols```(holds values that are unique and cannot be changed)```, undefined, and null).
- Object ```(basically stores all type data based on objects).```

### A brief history of javaScript
- 1995: JavaScript was developed by Brenden Eich at Netscape, within the period of 10 days. By then it was called Mocha.
- 1996: Mocha was then changed to LiveScript, Then finally got its current name as JavaScript.
- 1997: With the need of standadized language, ECMA released EcmaScript 1, which was first official for javaScript.
- 2009: EcmaScript 5 was released with lots of great new features.
- 2015: EcmaScript 6 ```(ES6/2015)``` was released, and these was the biggest update to the language ever. As EcmaScript changes to annual release cycle in other to ship less features per update.
- 2016: Release of other flavors of javaScript such as ```ES2016, ES2017, ES2018, ES2019, ES2020, ES2021...ESnext```.

### Function

Function are pieces of code to written to carryout a specific operations. In javaScript we have 3 ways of defining a function such as function declaration, function expression and arrow function.
- All mentioned types of functions works in a similar way but has different ways of writing them. They all receive data, processes the data, then output the data.
#### Anatomy of a Function

```js
function calAge (birthYear, firstName) {
  const age = 2023 - birthYear;
  console.log(`${firstName} is ${age} years old`);
}

const age = calAge (1996, 'Ibrahim');
```
- Function name: ```calAge```
- Parameters: They're are placeholders to basically receive input values, just like local variables of function ```(birthYear, firstName)```.
- Function body: consists of block of codes that we want to reuse, It also process the function inputs.
- variable to save the returned value (function input). sample code displayed below:
```js
  const age = 2023 - birthYear;
  console.log(`${firstName} is ${age} years old`);
```
- Actual value of function parameter, to input data. the values of the defined input are placed in between the parentheses. ```calAge(1996, 'Ibrahim')```
- Calling, Running or Invoking the function using parentheses```( )```.

