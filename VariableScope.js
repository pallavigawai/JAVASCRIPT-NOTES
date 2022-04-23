              /**************  VARIABLE SCOPE ************** /

In JavaScript, a variable has two types of scope:
Global Scope :- A variable declared at the top of a program or outside of a function
Local Scope :- It can only be accessed within a function.

# The value of a global variable can be changed inside a function. For example,
  program to show the change in global variable
*/
let a = "hello";

function greet() {
    a = 3;
}

// before the function call
console.log(a);

//after the function call
greet();
console.log(a); // 3
//variable a is a global variable. The value of a is hello. Then the variable a is accessed inside a function and the value changes to 3.

// Example 2: Local Scope Variable
// program showing local scope of a variable
let a = "hello";

function greet() {
    let b = "World"
    console.log(a + b);
}

greet();
console.log(a + b); // error
/* a is a global variable and variable b is a local variable. The variable b can be accessed only inside the function greet. Hence, when we try to access variable b outside of the function, an error occurs.

let keyword is BLOCK SCOPED
The let keyword is block-scoped (variable can be accessed only in the immediate block).
 program showing block-scoped concept
 global variable
*/
let a = 'Hello';
function greet() {
    // local variable
    let b = 'World';
    console.log(a + ' ' + b);
    if (b == 'World') {
        // block-scoped variable
        let c = 'hello';
        console.log(a + ' ' + b + ' ' + c);
    }
    // variable c cannot be accessed here
    console.log(a + ' ' + b + ' ' + c);
}
greet();
/* OUTPUT:-
 Hello World
Hello World hello
Uncaught ReferenceError: c is not defined
*/
