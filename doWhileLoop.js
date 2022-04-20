/******************** DO WHILE LOOP ******************** /

The syntax of do...while loop is:
do {
    // body of loop
} while(condition)

Note: do...while loop is similar to the while loop. The only difference is that in do…while loop, the body of loop is executed at least once.
*/
// Example 3: Display Numbers from 1 to 5
// program to display numbers
let i = 1;
const n = 5;

// do...while loop from 1 to 5
do {
    console.log(i);
    i++;
} while(i <= n);
// OUTPUT:- 1,2,3,4,5

// Example 4: Sum of Positive Numbers
// to find the sum of positive numbers
// if the user enters negative number, the loop terminates
// negative number is not added to sum

let sum = 0;
let number = 0;

do {
    sum += number;
    number = parseInt(prompt('Enter a number: '));
} while(number >= 0)
console.log(`The sum is ${sum}.`);

/*Output 1
Enter a number: 2
Enter a number: 4
Enter a number: -500
The sum is 6.
The body of the do...while loop runs only once if the user enters a negative number
*/
