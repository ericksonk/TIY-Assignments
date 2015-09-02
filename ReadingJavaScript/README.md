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
