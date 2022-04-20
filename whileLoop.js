/*************** WHILE LOOP ****************** /

The syntax of the while loop is:
while (condition) {
    // body of loop
}

Here,
A while loop evaluates the condition inside the parenthesis ().
If the condition evaluates to true, the code inside the while loop is executed.
The condition is evaluated again.
This process continues until the condition is false.
When the condition evaluates to false, the loop stops.
*/

// Example 1: Display Numbers from 1 to 5
// program to display numbers from 1 to 5
// initialize the variable
let i = 1, n = 5;
// while loop from i = 1 to 5
while (i <= n) {
    console.log(i);
    i += 1;
}
// OUTPUT:- 1,2,3,4,5

// Example 2: Sum of Positive Numbers Only

// program to find the sum of positive numbers
// if the user enters a negative numbers, the loop ends
// the negative number entered is not added to sum

let sum = 0;
// take input from the user
let number = parseInt(prompt('Enter a number: '));
while(number >= 0) {
    // add all positive numbers
    sum += number;
    // take input again if the number is positive
    number = parseInt(prompt('Enter a number: '));
}
// display the sum
console.log(`The sum is ${sum}.`);
/* Output
Enter a number: 2
Enter a number: 5
Enter a number: 7
Enter a number: 0
Enter a number: -3
The sum is 14.

Here, parseInt() is used because prompt() takes input from the user as a string. And when numeric strings are added, it behaves as a string. For example, '2' + '3' = '23'. So parseInt() converts a numeric string to number.
The while loop continues until the user enters a negative number. During each iteration, the number entered by the user is added to the sum variable.
When the user enters a negative number, the loop terminates. Finally, the total sum is displayed.
*/

function spaces(n){
let str = '';
let i = 1; 
if(n === 0){
    return str;
}
       
while(i <= n){
str = str + ' '
    i++;
    
} 
    return str;
}
spaces(2);
// spaces gap will increase as number(n) increases.

// Infinite while Loop
// If the condition of a loop is always true, the loop runs for infinite times (until the memory is full). For example,

// infinite while loop
while(true){
    // body of loop
}
// Here is an example of an infinite do...while loop.



                                                                  // infinite do...while loop
const count = 1;
do {
   // body of loop
} while(count == 1)
// In the above programs, the condition is always true. Hence, the loop body will run for infinite times.
