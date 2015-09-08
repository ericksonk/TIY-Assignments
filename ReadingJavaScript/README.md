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
    
* `i++` & `i--`
    * increments up (++) or down (--) by 1

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

* ** for loops **
    * systematically access every element in an array.
* Actual expample:
```
var cities = ["Melbourne", "Amman", "Helsinki", "NYC"];
for (i = 0; i < cities.length; i++);{
    console.log("I would like to visit " + cities[i]);
}
```
i starts off at value 0. The for loop runs until i < 4 bc cities.length equals 4- the array `cities` has 4 elements in it. We will increment i by 1 each time we loop over (i++).
    
## `Array`
Arrays are list-like objects whose prototype has methods to perform traversal and mutation operations. Neither the length of the JS array or the types of its elements are fixed. Since an array's size length grow or shring at any time, JS arrays are not guaranteed to be dense.
    * store lists of data
    * can store different data types at the same times
    * are ordered so the position of each piece of data is fixed
 
* **Syntax**
```
[element0, element1, ..., elementN]
new Array(element0, element1[, ...[, elementN]])
new Array(arrayLength)
```
```
var arrayName = [ data, data, data];
```
* Arrays are zero-indexed (the 1st element of an array is at index 0 and the last element is at the index equal to the value of the array's length property minus 1.
```
var arr = ['this is the first element', 'this is the second element'];
console.log(arr[0]);              // logs 'this is the first element'
console.log(arr[1]);              // logs 'this is the second element'
console.log(arr[arr.length - 1]); // logs 'this is the second element'
```
* JS pproperties that begin with a digit cannoot be referenced with a dot notation and **must be accessed using bracket notation.**
```
var years = [1950, 1960, 1970, 1980, 1990, 2000, 2010];
console.log(years.0);   // a syntax error
console.log(years[0]);  // works properly

renderer.3d.setTexture(model, 'character.png');     // a syntax error
renderer['3d'].setTexture(model, 'character.png');  // works properly
```
* Object properties which happen to be reserved words can only be accessed as string literals in bracket notation
```
var promise = {
  'var'  : 'text',
  'array': [1, 2, 3, 4]
};
```

#### `length` and numerical properties
Several of the built-in array methods take into account the value of the array's `length` property when they're called.
* the value of the lenth property is an integer with a positive sign and a value less than 2 to the 32nd power.
* You can set the `length` property to truncate an array at any time. When you extend an array by changing its length property, the number of actual elements does not increase--- ex. if you set `length` to 3 when it is currently 2, the array still contains only 2 elements. Thus the `length` property does not necessarily indicate the number of defined values in the array.
* **Syntax**
```
_arr_.length
```

#### `Array.proptype.__`
* `array.pop()`
    * removes the last element from an array and returns that element
* `array.join()`
    * joins all elements of an array into a string
    * Syntax: str = arr.join([separator = ','])
    * `separator` -Optional. Specifies a string to separate each element of the array. The separator is converted         to a string if necessary. If omitted, the array elements are separated with a comma. If separator is an           empty string, all elements are joined without any characters in between them.
* `array.concat()`
    * returns a new array comprised of the array on which it is called joined with the array(s) and/or value(s)         provided as arguments.
    * Syntax: var new_array = old_array.concat(value1[, value2[, ...[, valueN]]])
* `array.push`
    * adds one or more elements to the end of an array and returns the new length of the array.
    * Syntax: arr.push(element1, ..., elementN)
* `array.slice()`
    * returns a shallow copy of a portion of an array into a new array object.
    * Syntax: arr.slice([begin[, end]])

#### String.prototype.___
* `charCodeAt()` returns numeric unicode value of a character at the given index
    * Syntax: str.charCodeAt(index)
* `fromCharCode()`returns unicode values to string
    * Syntax: str.charCode(unicode value)
    * Ex. var res = String.fromCharCode(65); returns "A"

## Document Object Model (DOM)
Programming interface for HTML, XML and SVG documents. It provides a structured representation of the document (a tree) and it defines a way that the structure can be accessed from programs so that they can change the document structure, style and content. Provides a representation of the document as a structured group of nodes and objects that have properties and methods. ** Connects web pages to scripts or programming languages. **

#### The `window` object
Represents a window containing a DOM document; the document property points to the DOM document loaded in that window. A window for a given document can be obtained using the document.defaultView property.
* properties
    * `window.document` : Each web page loaded in the browser has its own document object; serves as an entry point into the web page's content and provides fuctionality which is clobal to the document(such as obtaining the page's URL and creating new elements in the document).
        * Returns a reference to the document that the window contains.
    * `window.location` : Gets/sets the location, or current URL, of the window object (returns a Location object with information about the current location of the document).
    * `window.history` : Returns a reference to the history object which provides an interface for manipulating the prowser _session history_ (pages visited in the tab or frame that the current page is loaded in).
        * Syntax: `var historyObj = window.history;`
* Methods:
    * `window.alert()` method displays an alert dialog with the optional specifed content and an OK button.
        * Syntax: `window.alert(message);
    * `window.confirm()` method displays a modal dialog with an optional message and two buttons, OK and Cancel.
        * Syntax: result + window.comfirm(message);
    * `window.reload()`
    * `window.open()` Loads a resource into either a new browsing context (such as a window) or one that already exists, depending on the specified parameters.
    * `window.close` Closes the current window, or the window on which it was called.
#### `location` object
#### `document` object
Each web page loaded in the browser has its own document object. The Document interface serves as an entry point into the web page's content (the DOM tree, including elements such as <body> and <table>) and provides functionality which is global to the document (such as obtaining the page's URL and creating new elements in the document).
* properties
    * `head`
    * `body`
* Methods 
#### `HTMLElement` type
#### `HTMLCollection type 
#### `NodeList` type
