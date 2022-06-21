 /*********************** FUNCTION CALLING ANOTHER FUNCTION *************************** /
 
To call a function inside another function, define the inner function inside the outer function and invoke it. 
When using the function keyword, the function gets hoisted to the top of the scope and can access any of the available variables in the scope.
This only works for functions declared using the function keyword (not arrow functions). 
example shows that the inner function can access the variables declared before it in the scope. This is because of how hoisting works in JavaScript.
Approach:
* First call the first function-1.
* Define a function-2 inside the function-1.
* Return the call to the function-2 from the function-1.

EXAMPLE:-
*/
function outerFunc() {
  const num1 = 5;
  const num2 = 10;

  function innerFunc() {
    return num1 + num2;
  }

  const result = innerFunc();

  return result;
}

console.log(outerFunc()); // 👉️ 15

//An alternative approach is to return the inner function from the outer one.

function outerFunc() {
  function innerFunc(a, b) {
    return a + b;
  }

  return innerFunc;
}

const innerFunc = outerFunc();

console.log(innerFunc(2, 3)); // 👉️ 5
console.log(innerFunc(3, 3)); // 👉️ 6
/* NOTE:-
* Notice that we didn't use parenthesis () to invoke the inner function inside the outer one.
* We returned the function without invoking it
EXAMPLE:-
*/
function outerFunc() {
  const z = 100;

  function innerFunc(a, b) {
    return a + b + z;
  }

  return innerFunc;
}

const innerFunc = outerFunc();

console.log(innerFunc(2, 3)); // 👉️ 105
console.log(innerFunc(3, 3)); // 👉️ 106

//For example, you could pass a parameter to the outer function that it will remember for any of the inner function calls.

function outerFunc(a) {
  function innerFunc(b, c) {
    return a + b + c;
  }

  return innerFunc;
}
const innerFunc = outerFunc(10);

console.log(innerFunc(1, 1)); // 12
console.log(innerFunc(1, 2)); // 13

