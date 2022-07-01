/******************* ARRAY DESTRUCTURING ********************* /
* It makes it possible to unpack values from arrays, or properties from objects, into distinct variables.
* The destructuring assignment uses similar syntax, but on the LEFT- HAND SIDE of the assignment to define what values to unpack from the sourced variable.

Syntax
const [a, b] = array;
const [a, , b] = array;
const [a = aDefault, b] = array;
const [a, b, ...rest] = array;
const [a, , b, ...rest] = array;
const [a, b, ...{ pop, push }] = array;
const [a, b, ...[c, d]] = array;
*/

// EXAMPLE 1:-
let a, b, rest;
[a, b] = [10, 20];

console.log(a);
// expected output: 10

console.log(b);
// expected output: 20

[a, b, ...rest] = [10, 20, 30, 40, 50];

console.log(rest);
// expected output: Array [30,40,50]

// EXAMPLE 2:-
const x = [1, 2, 3, 4, 5];
const [y, z] = x;
console.log(y); // 1
console.log(z); // 2
// Similarly, you can destructure arrays on the left-hand side of the assignment.

// EXAMPLE 3:-
const foo = ['one', 'two', 'three'];

const [red, yellow, green] = foo;
console.log(red); // "one"
console.log(yellow); // "two"
console.log(green); // "three"

// In an array destructuring from an array of length N specified on the right-hand side of the assignment, if the number of variables specified on the left-hand side of the assignment is greater than N,only the first N variables are assigned values. The values of the remaining variables will be undefined.
const foo = ['one', 'two'];

const [red, yellow, green, blue] = foo;
console.log(red); // "one"
console.log(yellow); // "two"
console.log(green); // undefined
console.log(blue);  //undefined


/*********************** DEFAULT VALUES ************************* /

* A variable can be assigned a default, in the case that the value unpacked from the array is undefined.
*/
let a, b;
[a=5, b=7] = [1];
console.log(a); // 1
console.log(b); // 7

/*********************** SWAPPING VARIABLES ************************* /
* Without destructuring assignment, swapping two values requires a temporary variable.
*/
let a = 1;
let b = 3;

[a, b] = [b, a];
console.log(a); // 3
console.log(b); // 1

const arr = [1,2,3];
[arr[2], arr[1]] = [arr[1], arr[2]];
console.log(arr); // [1,3,2]

/*********************** Parsing an array returned from a function ************************* /
* It's always been possible to return an array from a function.
In this example, f() returns the values [1, 2] as its output, which can be parsed in a single line with destructuring.
*/
function f() {
  return [1, 2];
}
// You can ignore return values that you're not interested in:
let a, b;
[a, b] = f();
console.log(a); // 1
console.log(b); // 2

function f() {
  return [1, 2, 3];
}
const [a, , b] = f();
console.log(a); // 1
console.log(b); // 3

const [c] = f();
console.log(c); // 1
// You can also ignore all returned values: [,,] = f();

