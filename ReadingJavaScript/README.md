# About JavaScript

## Basic Types:
There are four basic types of primative of values in JavaScript- null, Boolean, Numbers and Strings. A primative is data that is not an object and has no methods.

- `null`: An intentionally empty value.
    - Syntax: `null`
```
Ex: null
  >>null
```

- `Boolean`: Represents 2 values- true and false.
   - The value of 0 is always represented as "false".
    - All other numbers are "true". Infinity is "true".
    - null is "false".
    - An empty String ("") is false.
    - Syntax: `Boolean` ([value])
```
Ex: Boolean (1)
    true
```
- `Numbers`: Numeric data (integers= 45 & decimals= 3.14)
    - Syntax: `Number` ()
```
Ex: Number (3.14)
    3.14
```
- `Strings`: A sequence of characters used to represent text (aka words).
   - Syntax: `String` ("word")
   - Words should always be wrapped in quotes but numbers do not need to be.
    - You can use either double quotes "" or single quotes '' as long as the opening and closing quotes match.
    - Use a backslash to escape special characters ("This is Lacy\'s story")
```
Ex: String ("This is a string")
    'This is a string'
```
## Basic Operators:
- Arithmetic: Use numerical data as their operands (what's to the left and right of the operator) and return a single numeric value.
    - `+` addition (1 + 1 = 2)
    - `-` subtraction (2 - 1 = 1)
    - `*` multipy (1 * 1 = 1)
    - `/` divide ( 2 / 1 = 2)

- Comparison: A comparison operator compares its operands and returns a Boolean value based on whether the comparison is true.
    - `==` equality operator (2 == 2); true
    - `!=` inequality operator (2 !=3); true
    - `===` identity operator (3 === "3"); false
    - `>` less than (3 < 6); true
    - `>` greater than (4 > 2); true

- Assignment: Assigns value to it's left operand based on the value of it's right operand.
    - `=` assignment operator 
    ```
    (var x = 1);
    x = 1
    ```
    - `+=` addition operator adds the value of the right operand to a variable and assigns the result to the variable.
    ```
    x += y;
    x = x + y
    ```
    - `-=` subtraction operator subtracts the value of the right operand to a variable and assigns the result to the variable.
    ```
    x -= y;
    x = x-y
    ```
- `typeof` operator returns a string indicating the type of the unevaluated operand and is followed by its operand.
```
ex: typeof 45
    "number"
```
- `,` The comma operator allows multiple expressions to be evaluated in a single statement and returns the result of the last expression.

## Built-in Constants:
- `undefined`: a variable that has not yet been assigned a value.
```
Ex: Number (x)
```

- `NaN`: Not a Number; an undefined value or value that can't be represented.
```
Ex. (0/0)
    NaN
```

- `Infinity`: The value `Infinity` (positive infinity) is greater than any other number. Any positive number multiplied by `Infinity` is `Infinity`, and anything divided by `Infinity` is 0.
    - Syntax- `Infinity`
    ```
    Ex. Infinity * 70
        Infinity
    ```
## Functions

Functions are a form of [control flow](http://en.wikipedia.org/wiki/Control_flow) used in computer programs... 

### `function` keyword

The `function` keyword is used to _define_ a function with parentheses and curly braces:

    // This is a Function Definition for `whatever`...
    function whatever ( /* arguments go here */ ) {
      // body of function goes here
    }

Once a function has been defined, it can be _invoked_ by a function name.

When a function is called, _arguments_ are passed to the function as input, and the function can optionally return an output. A function in JavaScript is also an object.

* An anonymous function is a function without a function name:
```
function () {}
```
* A named function is a function with a function name:
```
function foo() {}
```
**Function Definition** has _parameters_
```
function identifier (){

}
```

**Function Invocation** a function within a function; has _arguments_
```
Number (Boolean(null))
```

* Parameters- what is inside parenthesis; identifiers

* 3 Parts to a Function:
1. Inputs via parameters/arguments
2. Outputs via return (undfined if no return)
3. Side Effects via Body Statement

## Control Flow Constructs
* `{}` as Block Operator
    * Block Statement: most basic statement used to group statements.
```
Ex. while (x = 2) {
    x++;
    }
```   
* Conditional Statements: a set of statements that executes if a specific condition is true.
    * **if...else**
    Use the if statement to execute a statement if a logical condition is true. Use the optional else clause to       execute a statement if the condition is false. condition can be any expression that evaluates to true or         false. If condition evaluates to true, statement_1 is executed; otherwise, statement_2 is executed. statement_1     and statement_2 can be any statement, including further nested if statements.
    ```
    if (condtion){
        statement 1;
    } else {
        staatement 2;
    }
    ```
    * Compound statements using **else if** (use when you have multiple conditions to test).
    ```
    if (condition_1) {
  statement_1;
} else if (condition_2) {
  statement_2;
} else if (condition_n) {
  statement_n;
} else {
  statement_last;
} 
```
* Falsy Values: (all other values evaluate to `true`)
    * `false`
    * `undefined`
    * `null`
    * 0
    * `NaN`
    * the empty string ("")
  
    * **`switch` Statements** : A switch statement allows a program to evaluate an expression and attempt to match     the expression's value to a case label. If a match is found, the program executes the associated statement.
    * 
    ```
    switch (expression) {
  case label_1:
    statements_1
    [break;]
  case label_2:
    statements_2
    [break;]
    ...
  default:
    statements_def
    [break;]
}
```
Ex. In the following example, if fruittype evaluates to "Bananas", the program matches the value with case "Bananas" and executes the associated statement. When break is encountered, the program terminates switch and executes the statement following switch. If break were omitted, the statement for case "Cherries" would also be executed.
```
switch (fruittype) {
  case "Oranges":
    console.log("Oranges are $0.59 a pound.");
    break;
  case "Apples":
    console.log("Apples are $0.32 a pound.");
    break;
  case "Bananas":
    console.log("Bananas are $0.48 a pound.");
    break;
  case "Cherries":
    console.log("Cherries are $3.00 a pound.");
    break;
  case "Mangoes":
    console.log("Mangoes are $0.56 a pound.");
    break;
  case "Papayas":
    console.log("Mangoes and papayas are $2.79 a pound.");
    break;
  default:
   console.log("Sorry, we are out of " + fruittype + ".");
}
console.log("Is there anything else you'd like?");
```

## Loops
Offer quick easy way to do something repeatedly
* ** `do...while` ** :
    * repeats until a specified condition evaluates to false.
    ```
    do
        statement
    while (condition);
    ```
    * statement executes once before the condition is checked.
    * To execute multiple statements, use a block statement ({ ... }) to group those statements.
    * If condition is true, the statement executes again. At the end of every execution, the condition is checked.
    * When the condition is false, execution stops and control passes to the statement following `do...while`.
    Ex. In the following example, the do loop iterates at least once and reiterates until i is no longer less than     5.
    ```
    do {
        i += 1;
        console.log(i);
    } while (i < 5);
    ```
* ** `while` ** : executes statements as long as a specified evaluates to `true`.
    ```
    while (condition)
        statement
  ```
  * _If the condition becomes false, statement within the loop stops executing and control passes to the statement following the loop._
  * The condition test occurs before statement in the loop are executed.
  * If the condition returns true, statement is executed and the condition is tested again.
  * If the condition returns false, execution stops and control is passed to the statement following while
  * To execute multiple statements, use a block statement `({ ... })` to group those statements.
    
