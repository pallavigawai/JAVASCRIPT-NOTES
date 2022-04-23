/*
********** FUNCTION DECLARATION **********
SYNTAX:-
function sum(x, y) {
    return x + y;
}
# It starts with the keyword function. It follows:
   * the name of the function,
   * the parameters enclosed in round parentheses,
   * the statements enclosed in curly brackets.
# In JavaScript, you have to return from inside functions. If you forget to write return, your function will return undefined.
# The return keyword will also quit/exit the function, so the code afterward will never run!
# The function will not be executed, but only provided. Only with its call the function is executed. Every instruction in the function block is executed in order.

NOTE:- When a value is passed when declaring a function, it is called PARAMETER, 
        And when the function is called, the value passed is called ARGUMENT.

 */
/********** FUNCTION EXPRESSION  **********/
//Function Expressions

// program to find the square of a number
// function is declared inside the variable
let x = function (num) { return num * num };
console.log(x(4));

// can be used as variable value for other variables
let y = x(3);
console.log(y);
// Output:-16,9

function felicitationMessage(data) {
  const message = `Congrats! ${data.name} for completing ${data.degree}`;
  console.log(message);
}
felicitationMessage({ name: "PAllavi", degree: "BE" });

// Sum of Two Numbers

// program to add two numbers
// declaring a function
function add(a, b) {
    return a + b;
}
// take input from the user
let number1 = parseFloat(prompt("Enter first number: "));
let number2 = parseFloat(prompt("Enter second number: "));

// calling function
let result = add(number1,number2);

// display the result
console.log("The sum is " + result);
// OUTPUT:-Enter first number: 3.4, Enter second number: 4, The sum is 7.4
