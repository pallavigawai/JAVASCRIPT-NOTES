                                    /************* TERNARY OPERATOR ************* /
SYNTAX:-
condition ? expression1 : expression2
# NOTE:- Store this syntax into a variable.
# The ternary operator evaluates the test condition.
   If the condition is true, expression1 is executed.
   If the condition is false, expression2 is executed.
also known as a CONDITIONAL OPERATOR.

Ternary Operator Used Instead of if...else
check the age to determine the eligibility to vote
*/
let age = 15;
let result;

if (age >= 18) {
      result = "You are eligible to vote.";
} else {
      result = "You are not eligible to vote yet.";
}
console.log(result);

 // with

// ternary operator to check the eligibility to vote
let age = 15;
let result =
    (age >= 18) ? "You are eligible to vote." : "You are not eligible to vote yet";
console.log(result);
//OUTPUT = You are not eligible to vote yet
