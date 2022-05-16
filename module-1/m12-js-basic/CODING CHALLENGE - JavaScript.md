# CODING CHALLENGE - JavaScript


## VOCABULARY

### 1. What is `declare`?

When you declare a new variable, you're telling the program that this is a NEW variable that you will use later.

```javascript=
let a;
```
Not to be confused with `define`, you don't actually give the variable a value if you just `declare` it.

### 2. What is `assign`/`define`?

When you assign a value to a variable, or when you define a variable, you give it a value (or change its existing value).

```javascript=
a = 12;
```

:::success
:bulb: You can also combine them!
```javascript=
let a = 12;
```

This declares a variable `a` AND assigns a value of `12` to it.
:::

## VARIABLES

### 1. Variables
Variables are used to store and manipulate data. With variables, you are using labels to point to the data rather than using the data itself.

Imagine **variables** are empty buckets that you can store things (data) inside.

In programming, using variables is necessary because data might be constantly changing but what it represents does not.

**Test your understanding with the below challenge:**

Declare 3 variables called `myNumber`, `myName`, `mySchool`

**Requirements:**
1) myNumber stores a number value : 3
2) myName stores a string value: `ABC`
3) mySchool store a string value: `CoderSchool`

**Example:** 

```javascript=
const myVariables = 'value';

```

---

### 2. `let` `const`

There are 3 main ways to declare or create a variable. `let` `const` `var`. Keep in mind `var` is old school, while `let` and `const` are more recommended.

*References: [let](https://https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/let) [var](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/var) [const](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/const)*


There are also unintialized variables, which is just a variable that has been declared but has not been assigned a value when it was declared.

**Test your understanding with the below challenge:**
Declare 3 variables called `myNumber`, `myName`, `mySchool`

**Requirements:**
1) myNumber stores a boolean value: true
2) myName can't be declared again and stores a string value: `abc123`
3) mySchool can be declared again and stores no values.

**Example:** 

```javascript=
const myVariables = 'value';
let userName;
```
---

### 3. You can assign the value of one variable to another.

**Test your understanding with the below challenge:**

**Requirements:**
Declare 3 variables called `myId`, `myComputerId`, `myWorkId`

1) `myId` store a number value: `0123`
2) `myId` can't be changed.
3) Assign `myCumputerId` and `myWorkId` to `myId` so that they share the same data.
4) `myComuterId` and `myWorkId` can be changed.

**Example:** 

```javascript=
const password = 123;
let  passwordHouse = password ;
let  passwordPhone = password ;

```

### 4. You can overwrite value of a variable.

**Test your understanding with the below challenge:**

Declare 2 variables called `userName` and `shoppingCart`

Requirements:
1) `userName` stores a string value: `Alice`
2) `userName` can't be changed.
3) `shoppingCart` store a value: `apple`
4) `shoppingCart` be overwritten with a value: `banana`

Example: 

```javascript=
const password = 123;
let  passwordHouse = password ;
let  passwordPhone = password ;
passwordPhone = `phone123`;

```

## FUNCTIONS

### 1. Function
We have learned about the meaning of functions in programming.

How to create and call your functions?
What are inputs?
What are outputs?

Read here: [function](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function)

**Test your understanding with the below challenge:**


**Requirements:**

Create a function named `printName()`.
1) `printName()` print "CoderSchool" to the console.
2) `printName()` does not take inputs.
3) Call the function.


**Example:**

```javascript=
 function printDate() {
     console.log('22/02')
 }

printDate();

```
### 2. Let's learn how to pass values to functions.

Inputs or Arguments: Real values that are passed into the function. Inputs or Arguments are defined when you call a function.

Parameters: Labels that act as placeholders for the real values that your functions need to run. Parameters are defined when you create a function.


**Test your understanding with the below challenge:**

**Requirements:** 
Create a function name `printStudent()`;
1)`printStudent()` takes two inputs `name` `age`.
2) `printStudent()` outputs `name` and `age` to the console.


**Example:** 

```javascript=
 function printFunction(param1,param2) {
     console.log(param1,param2)
 }

printFunction('Alex','Nguyen');

```

### 3. Let's learn how to return a value from a function.

Output is what the function return, input is what the function takes in.

However, after passing values through a function, you swon't be able to "see" or get the output without returning it.

Imagine going to the laundry service, you won't be able to get your clean clothes (data) without the service returning your clothes (data).



**Test your understanding with the below challenge:**


**Requirements:**
Create a function named `plusThree(num)`.

1)`plusThree()` takes 1 input `num`
2)`plusThree()` returns a value that equals to `num + 3`
3)`plusthree()` is called and passed in a value.
4)`plusThree()`'s output is assigned to the variable `answer`. 
5)Variable `answer` can be change over time.
6)`answer` is logged to the console.

**Example:** 

```javascript=
 function double(num) {
      return num * 2;
 }

let storage = double(6);
storage = double(12)
```
### 4. Let's learn Local Scope variables and functions.

In JavaScript, scope refers to the reachability of variables.

Variables which are defined outside of a function block have Global scope. This means they can be used everywhere in your JavaScript code.

Variables that are defined inside of a function block have Local scope. This means they can only be used inside that function.

**Test your understanding with the below challenge:**


Requirements:
Create a function named `caculator()`, 2 global variable `a` and `answer`.
1) `a` is a constant and can't be changed. `a` is assigned a value: 10.
2) `caculator()` takes an input `num`
3) `caculator()` has a local variable `b`
4) `caculator()` returns a result of `a + b + num` 
5) `answer` is assigned the output of `calculator()`
6) `answer` is logged to the console.
Example: 

```javascript=
const global = 5;
 function addNumber(num) {
      let local = 3
      return global + local + num;
 }

let result = addNumber(6);
console.log(result)
//expected result: 14
```

### 5. Let's learn Global Scope variables and functions.

Variables that are declared with `var` are automatically created in the global scope. This can create unintended consequences elsewhere in your code or when running a function again. `var` is **not** recommended!

You **should always** declare your variables with `let` or `const`. 

**Test your understanding with the below challenge:**


**Requirements:**
Create a function named `plusA()` and a variable `a`

1)`a` is a constant and can't be changed.
2)`plusA` takes 1 input `num`
3)`plusA` returns an output that equal to `num + a`
4)`plusA` is called and passed in a value.
5)`plusA`'s output is assigned to the variable `answer`
6)`answer` is a constant and can't be changed. 
7)`answer` is logged to the console.

**Example:** 
```javascript=
const constantNumber = 5;
 function triple(num) {
      return num * constantNumber;
 }

const result = triple(3)
console.log(result)
//expected result: 15

```

## OPERATORS

### 1.  `a = a + b `.

In programming, we can use the assignment operator ( = ) to change the value of a variable. 

Note that everything to the right of `=` is evaluated first. Therefore, `a = a + b` is basically using the current of `a` add `b` and assigns back to `a`

Therefore, for `a = a + b`, the value of `a` and the value of `b` are added together and the result of that is then assigned to the variable `a`.

**Test your understanding with the below challenge:**



**Requirements:**
Declare a variable `myNumber`.
1) `myNumber` is assigned a value: 1
2) `myNumber` is assigned  new value that equals old value + 5: `myNumber + 5`
3) `myNumber` is logged to the console.


**Example:** 
```javascript=
let a = 1;
a = a + 7
console.log(a)
//expected result: 8

```
### 2. `a += b`

This is another way to write `a = a + b`. With `+=` we are basically do both adding and assigning at the same time.

**Test your understanding with the below challenge:**


**Requirements:**
Declare a variable `num`.
1) `num` is assigned the value: 2
2) `num` is assigned a new value that = original value + 7: `num + 7`
3) `num` is logged to the console.


**Example:** 
```javascript=
let a = 1;
a += 7;
console.log(a)
//expected result: 8

```

### 3. `a -= b`
 This is another version of `a += b` but with `-`. 
 
 **Test your understanding with the below challenge:**


**Requirements:**
Declare a variable `smallerNumber`.

1) `smallerNumber` is assigned the value: 2
2) `smallerNumber` is assigned a new value that = original values - 2: `smallerNumber - 2`
3) `smallerNumber` is logged to the console.


**Example:** 
```javascript=
let a = 10;
a -= 2;
console.log(a)
//expected result: 8

```

### 4. `"Hello" + "friend!"`

Operator "+" is also used to combine strings. 

**Test your understanding with the below challenge:**



**Requirements:** 
Declare a variable `myName`.

1) `myName` is assigned a string value: 'Alex'.
2) `myName` is assigned a new value that = original value + string: `Nguyen`
3) `myName` is logged to the console.

**Example:** 
```javascript=
let mySchool = 'Coder';
 mySchool += 'School';

console.log(mySchool)
//expected result: CoderSchool

```


### 5. Template Literal

**Test your understanding with the below challenge:**


**Requirements:**
Declare function `createLearner()` and a variable `school`.

1)`school` is a constant and assigned a value: `CoderSchhol`
2)`createLearner()` takes 2 inputs: `name` `age`
3) `createLearner()` returns a string:  `(Name) is (age) years old at CoderSchool `


**Example:**
```javascript=
let userAddress = HCM;
 
function createStudent(name,age) {
    return `${name} is ${age} years old at ${userAddress}` 
}

let answer = createStudent(Alex,26);
console.log(answer);

//expected result: `Alex is 26 years old at HCM`

```

## `IF...ELSE`

### 1. If..else 
 `If...else` is used to make decisions in code. `If` a condition is `true` do action A, `else` - condition is `false` do action B.



**Test your understanding with the below challenge:**



**Requirements:**
Declare an `If..else` statement, 2 variables `a`, `b`

1) Write a condition: `a > b`
2) Write the first action: `console.log("a is bigger than b.")`
3) Write the second action: `console.log("a is smaller than b.")`
4) `a` is assigned a value: 5
5) `b` is assigned a value: 10

**Example:** 
```javascript=
let  num1 = 1;
let  num2 = 5;

 if (num1>num2) {
     console.log("num1 is bigger than num2.")
 } else {
     console.log("num1 is smaller than num2.")
 }

```

### 2. `If` chaining
Usually, there will be more than just 1 condition is needed in code. `else if` will provide you with the second condition.

**Test your understanding with the below challenge:**



**Requirements:**
Declare an `If..else` statement, 2 variables `a`, `b`

1) Write  first condition: `a > b`
2) Write the second condition: `a = b`
3) Write the first action: `console.log("a is bigger than b.")`
4) Write the second action: `console.log("a equals b.")`
5) Write the second action: `console.log("a is smaller than b.")`
6) `a` is assigned a value: 10
7) `b` is assigned a value: 10

**Example:** 
```javascript=
let  num1 = 5;
let  num2 = 5;

 if (num1>num2) {
     console.log("num1 is bigger than num2.")
 } else if (num1 = num2) {
     console.log("num1 equals num2.")
 } else {
     console.log("num1 smaller than num2.")
 }
```

### 3. If statement in the function.
Most of the time, `If` will not be used independently but rather inside a function.


**Test your understanding with the below challenge:**



**Requirements:**
Create a function `testNumber()` helps recognize if the input is smaller, bigger, or equals to `a`.

1) Create a function `testHeight()` takes 1 input `num`
2) Inside `testHeight()`, write an `if` statement.
3) Inside `testHeight()`, declare a variable `height` with value `100`.
4)  Write first condition `(num > height)`
5)  Write second condition `(num = height)`
6)  Write third condition `(num < height)`
7)  Write first action to log `'num is larger'` in the console.
8)  Write the second action to log `'num is equals'` in the console.
9)  Write the third action to log `'num is smaller'` in the console.
10) Declare `testHeight()` 

**Example:** 
```javascript=
function compareNumber(num) {
    let a = 50;
    if (num > a) {
     console.log("num is bigger than a.")
 } else if (num = a) {
     console.log("num equals a.")
 } else {
     console.log("num smaller than a.")
 }
}
 compareNumber(100);

```

### 4. Nested `if`



**Requirements:**
Write a function to test if a number is larger than 10, and is an even number. The function returns `You found the right number!` if two conditions are met.

Hints: [% - remainder.](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Remainder)

1) Write a function testNumber().
2) `testNumber()` takes in 1 input `num`.
3) Write 1st condition `(num > 10)`;
4) Write action to return `Number is smaller than 10` if 1st condition is `false`.
5) Write 2nd condition `(num % 2)`; 
6) Write action return ` You found the right number!` if 2nd condition is `true`.
7) Write action return `Number is not an even number.` if 2nd condition is `false`.
8) Assign `result` to the output of `findNumber()`
9) Log `result` to the console.


**Example:** 
```javascript=
function findNumber(num) {
    if (num > 50) {
      if (num % 5) {
          return 'Right number!'
      } else {
          return 'Wrong number!'
      }
 } else {
     return 'You number is smaller than 50'
 }
}
let answer = findNumber(100)
console.log(answer)
```

## `FOR` LOOP

### 1. `for` loop
Loops help you run the same code over and over again, each time with a different value. And `for` is a way to create loops.

*Reference: [`for` statement]*(https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for)


**Test your understanding with the below challenge:**
```javascript= 
for ([initialization]; [condition]; [final-expression]) {
    statement
}
```


**Requirements:**
Create a loop to log 1 to 10 to the console.

1) Create initialization: `let i = 0;`
2) Create condition: `i < 9;`
3) Create final-expression: `i++` (Ask Luke or i + 1?)
4) Create statement: `console.log(i)`

**Example:** 
```javascript=
for ( let i = 1 ;  i < 5 ; i++ ) {
    alert(i)
}
```

### 2. `for` loop with array

Most of the time, loop is used to apply the same code to every single value of an array.

**Test your understanding with the below challenge:**
```javascript= 
for ([initialization]; [condition]; [final-expression]) {
    statement
}
```
What is [array.length()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/length)?



**Requirements:**
Create a loop to log all elements of the array to the console.

1) Create an array `toys` has value: `['kite', 'car', 'bike']`
3) Create initialization: `let i = 0`
4) Create condition: `i < toys.length` 
5) Create final-expression: `i++`
6) Create statement.

**Example:** 
```javascript=
let array = [0,1,2,3,4]
for ( let i = 0 ; i < array.length ; i++ ) {
    alert(i)
}
```

3. `for` loop, array, and function.

**Test your understanding with the below challenge:**
```javascript= 
for ([initialization]; [condition]; [final-expression]) {
    statement
}
```


**Requirements:** 
Create a function to loop over all elements of the array and add them to a string.

1) Create an array `numbers` has values [0,10,20,30,40,50]
2) Create a variable `sum` has value `0`;
3) Create a function `sumArray()`, takes in 1 input `arr`, and outputs `sum`
4) `sumArray()` has a `for` loop.
5) Create initialization: `let i = 0`
6) Create condition: `i < numbers.length`
7) Create final-expression: `i++`
8) Create statement.
10) Call function `sumArray(numbers)`
11) Log `sum` to the console.


**Example:** 
```javascript=
let a = [0,1,2,3,4]
let result = 0;
function sumArray(array) {
    for ( let i = 0 ; i < array.length ; i++ ) {
    result = result + array[i];
}
}
sumArray(a)
console.log(result)
```
### 4. Nested `for` loop 

Sometimes you wil have arrays inside arrays and loops inside of loops.

Another cool name for this is 2D Matrix JavaScript. 


**Test your understanding with the below challenge:**
```javascript=
let array = [[0,1,2],[0,1,2],[0,1]]

for ([initialization]; [condition]; [final-expression]) {
    statement
}
```
 

**Requirements:** 
Create a `for` loop to loop over a 2D array.
1) Create an array `a` has values `[[0,1,2], [5,10], [2,4,6]]`
2) Create a `for` loop.
3) Create initialization: `let i = 0`
4) Create condition: `i < a.length`
5) Create final-expression: `i++`
6) Create a statment with another loop nested in.
7) Create a statement in nested loop: `console.log(a[i][j])`


**Example:** 
```javascript=
let array = [['1','a','b','c'], ['2','a','b'], ['3','a','b','c']]

for ( let i = 0 ; i < array.length ; i++ ) {
    for (let j = 0; j < array.length; j ++) {
        console.log(array[i][j])
    }
}
```

### 5. Nested `for` loop , function, `return`

Leveling up your looping skill with function and return


**Test your understanding with the below challenge:**
```javascript=
let array = [[0,1,2],[0,1,2],[0,1]]

for ([initialization]; [condition]; [final-expression]) {
    statement
}
```


**Requirements:** 
Create a function to go through a 2D array, with `for` loop and return a value. This value is sum of all numbers in the array.

1) Create an array `a` has values `[[5,10,15], [5,10], [5,10,15]]`
2) Create a variable `answer`, no value assigned.
3) Create a function `sumArray()` takes 1 input `array`, output 1 value `sum`.
4) Create variable `sum` inside `sumArray()`
5) Create a `for` loop inside `sumArray()`
6) Create initialization: `let i = 0`
7) Create condition: `i < array.length`
8) Create final-expression: `i++`
9) Create a statement with another loop nested in.
10) Create a statement in nested loop to sum all elements in the array.
11) Assign the `sumArray()`'s output to `result`
12) Log `result` to the console.


**Example:** 

```javascript=
let array = [[5,10,15], [5,10], [5,10,15]]
let result;
function multiplyArray() {
    let multiply = 1;
    for ( let i = 0 ; i < array.length ; i++ ) {
    for (let j = 0; j < array.length; j ++) {
        multiply = multiply * array[i][j];
    }
        return multiply;
}
}
result = multiplyArray(array)
console.log(result)
```