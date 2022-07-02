/******************** FOR LOOP ********************/
/*
 if you want to run the same code over and over again, each time with a different value, 
Syntax
for ([initialization]; [condition]; [final-expression]){
   statement
   }
  * Condition
 $ The initialExpression initializes and/or declares variables and executes only once.
 $  The condition is evaluated.
    If the condition is false, the for loop is terminated.
    If the condition is true, the block of code inside of the for loop is executed.
 $  The updateExpression updates the value of initialExpression when the condition is true. 
 $  The condition is evaluated again. This process continues until the condition is false.
    use a block statement ({ /* ... */
// to group those statements. To execute no statement within the loop, use an empty statement (;) program to display text 5 times

//Examples

for (let i = 0; i < 9; i++) {
  console.log(i);
  // more statements
}

const n = 5;
// looping from i = 1 to 5
for (let i = 1; i <= n; i++) {
  console.log(`I love JavaScript.`);
}
/* Output
I love JavaScript.
I love JavaScript.
I love JavaScript.
I love JavaScript.
I love JavaScript.
Here is how this program works.
Iteration	Variable	Condition: i <= n	Action
1st	i = 1
n = 5	true	I love JavaScript. is printed.
i is increased to 2.
2nd	i = 2
n = 5	true	I love JavaScript. is printed.
i is increased to 3.
3rd	i = 3
n = 5	true	I love JavaScript. is printed.
i is increased to 4.
4th	i = 4
n = 5	true	I love JavaScript. is printed.
i is increased to 5.
5th	i = 5
n = 5	true	I love JavaScript. is printed.
i is increased to 6.
6th	i = 6
n = 5	false	The loop is TERMINATED
*/

//Example 2: Display Numbers from 1 to 5
// program to display numbers from 1 to 5
const n1 = 5;
// looping from i = 1 to 5
// in each iteration, i is increased by 1
for (let i = 1; i <= n1; i++) {
  console.log(i); // printing the value of i
}
// OUTPUT:- 1,2,3,4,5

//Example 3: Display Sum of n Natural Numbers
// program to display the sum of natural numbers
let sum = 0;
const n2 = 100;
// looping from i = 1 to n
// in each iteration, i is increased by 1
for (let i = 1; i <= n2; i++) {
  sum += i; // sum = sum + i
}
console.log("sum:", sum);
//Output sum: 5050

/*EXPLANATION:-
Here, the value of sum is 0 initially. Then, a for loop is iterated from i = 1 to 100. In each iteration, i is added to sum and its value is increased by 1.
When i becomes 101, the test condition is false and sum will be equal to 0 + 1 + 2 + ... + 100.
*/

// The above program to add sum of natural numbers can also be written as
// program to display the sum of n natural numbers
let sum1 = 0;
const n3 = 100;

// looping from i = n to 1
// in each iteration, i is decreased by 1
for (let i = n3; i >= 1; i--) {
  // adding i to sum in each iteration
  sum1 += i; // sum1 = sum1 + i
}
console.log("sum:", sum);

// EXAMPLE 3
const cars = ["BMW", "VOLVO", "SAAB", "FORD", "AUDI"];
let text = "";
for (let i = 0; i < cars.length; i++) {
  text += cars[i];
  console.log(i);
  console.log(cars[i]);
  console.log(text);
}
