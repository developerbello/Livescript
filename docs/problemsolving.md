# How to fail at solving problem and Fixes

```
Whenever John encounters a problem.
- He jump at the problem, without much thinking.
- He implements is solution in an unstructed way.
- He gets stressed out, when things goes the wrong way.
- He is too proud to research solution.
```
FIX:
- Stay down and slow down, don't just jump at a problem without plan.
- Take a very logical and rational approach (Programming is just logic in the end).
- Use the below 4 step framework by @tutor to solve problems.

## 4 steps to solve any problem by @tutor

- Make sure you 100% understand the problem, ask the right question to get a clear picture of the solution.
- Divide & Conquer: Break a problem smaller into sub-problems.
- Don't be afraid to do as much research as you have to.  
- For bigger problems, write psedo-code before writing the actual code.

FOR EXAMPLE:

<b>Make sure you 100% understand the problem, ask the right question to get a clear picture of the solution.
</b>
```
Project Manager: We need a function that reverses whatever is passed into it.

1. What does "whatever" even mean in this context.
2. What should be reversed ?
   - Only strings, numbers, and arrays makes sense to reverse.
3. What to do if something else is passed in ?
4. What should returned ?
  - Should it always be string or the type
  - Or should the type be the same as passed in.
5. How to recognize, whether the argument is a number, string, or array.
6. How to reverse a number, a string, or an array.
```

<b> Divide & Conquer: Break a problem smaller into sub-problems. </b>
- Check if argument is a number, string, or an array.
- Implement reversing a string.
- Implement reversing a number.
- Implement reversing an array.
- Return reversed value.

<b>Don't be afraid to do as much research as you have to.</b>
- Make use of platform such as `StackOverflow, Google Search engine, Mozilla` to make your research on how to do stuffs.
- Example: How to check the value type of an array. same implies to numbers and strings.

<b>For bigger problems, write psedo-code before writing the actual code.</b>
```
function reverse (value):
  if value type !string && !number && !array:
    return value
  if value type === string:
    return string
  if value type === array:
    return array

  return reversed value
```