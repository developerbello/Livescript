# Developer Advice

- How to succeed learning how to code
- How to fail at solving problem

How to succeed learning how to code

`Ibrahim wants to become a software developer, but didn't have a clear goal at the beginning of his journey(No direction)`

FIX: 
- Set a specific, measurable and realistic goal.
- Know exactly why you're learning to code ex. Switching careers, Finding a better job?
- Imagine a big project you want to be able to build!
- Research technologies you need and then learn them.

`He would just copy and paste the code without caring about how it works.`

FIX:
- Understand the code that you're studing and typing.
- Don't just copy and paste.

`He didn't reinforce what is learning, by doing small challenges or taking notes.`

FIX:
- After you learn a new feature, or concept use it immediately.
- Take notes.
- Challenge yourself and practice with small challenges.
- Don't be in a hurry to complete to learn from any course or book you're learning from fast.

`He didn't practice coding and also didn't come up with is own project ideas.`
- preparing on your own is the most important thing to do.
- This is NOT optional!, without practicing outside of courses, you won't go anywhere!
- Come up with your own project ideas, or apply popular sites or applications, or just part of them in the beginning. 
- Don't be stuck in tutorial hell.

`He quickly get frustratated when his code was not perfectly clean, or effective.`

FIX:
- Don't get stuck trying to write perfect code!
- Just write ton of code, no matter the quality. You can alway refactor your codes later.

`He lost motivation because he though he could never know everything.`

FIX:
- Embrace the fact that you will never know everything.
- Just focus on what need to achieve your goal!

`He was learning on isolation`

- Explain new concept to other people, if you can explain it, then you uderstand it.
- Share your goal to make keep yourself accountable.
- Share your learning progress with your stack based community such as #100daysofcode, #codeNewbie, #webdev etc.

`After finishing a couple of courses, he thought he's now a web developer and could start applying for jobs.`

FIX
- The biggest misconceptions that people have courses are an amazing start point, but are only the begining of the journey.

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
