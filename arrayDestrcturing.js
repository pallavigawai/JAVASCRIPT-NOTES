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
let p, q, rest;
[p, q] = [10, 20];

console.log(p);
// expected output: 10

console.log(q);
// expected output: 20

[p, q, ...rest] = [10, 20, 30, 40, 50];

console.log(rest);
// expected output: Array [30,40,50]

// EXAMPLE 2:-
const x = [1, 2, 3, 4, 5];
const [y, z] = x;
console.log(y); // 1
console.log(z); // 2
// Similarly, you can destructure arrays on the left-hand side of the assignment.

// EXAMPLE 3:-
const num = ['one', 'two', 'three'];

const [violet, white, black] = num;
console.log(violet); // "one"
console.log(white); // "two"
console.log(black); // "three"

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
let ab, bc;
[ab=5, bc=7] = [1];
console.log(ab); // 1
console.log(bc); // 7

/*********************** SWAPPING VARIABLES ************************* /
* Without destructuring assignment, swapping two values requires a temporary variable.
*/
let m = 1;
let n = 3;

[m,n] = [n,m];
console.log(m); // 3
console.log(n); // 1

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
const a, b ;;
[a, b] = f();
console.log(a); // 1
console.log(b); // 2

function f() {
  return [1, 2, 3];
}
const [c, , d] = f();
console.log(c); // 1
console.log(d); // 3

const [e] = f();
console.log(e); // 1
// You can also ignore all returned values: [,,] = f();

