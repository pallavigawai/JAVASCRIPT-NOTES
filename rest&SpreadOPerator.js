/****************************** REST OPERATOR *************************** /

* The rest operator (…) allows us to call a function with any number of arguments and then access those excess arguments as an array.
* The rest operator also allows us in destructuring array or objects.
* The spread operator (…) allows us to expand an iterable like array into its individual elements.
When destructuring an array, you can unpack and assign the remaining part of it to a variable using the rest pattern:
*/
const [a, ...b] = [1, 2, 3];
console.log(a); // 1
console.log(b); // [2, 3]

// NOTE:-
  const [a, ...b,] = [1, 2, 3];
// SyntaxError: rest element may not have a trailing comma
// Always consider using rest operator as the last element

// Using a binding pattern as the rest property
const [a, b, ...[c, d]] = [1, 2, 3, 4];
console.log(a, b, c, d); // 1 2 3 4

const [a, b, ...{ pop, push }] = [1, 2];
console.log(a, b); // 1 2
console.log(pop, push); // [Function pop] [Function push]

// These binding patterns can even be nested, as long as each rest property is the last in the list.
const [a, b, ...[c, d, ...[e, f]]] = [1, 2, 3, 4, 5, 6];
console.log(a, b, c, d, e, f); // 1 2 3 4 5 6

/****************************** SPREAD OPERATOR *************************** /

* The JavaScript spread operator allows us to expand an array into individual array elements. 
* To use the spread operator three dots (…) should be preceded by the array name.
* Spread operator can be used in many cases,like when we want to expand,copy,concat,with math object.
* it is not recommended to use the spread in this particular case, as for a large data set it will work slower as when compared to the native concat() method.
* It is mostly used in the variable array where there is more than 1 values are expected. 
Spread operator in function calls JavaScript
JavascriptWeb DevelopmentObject Oriented Programming
The spread syntax allows us to spread an array or any iterable to be expanded across zero or more arguments in a function call.
* Syntax:
  var variablename1 = [...value]; 
  
  1. Concat()

The concat() method provided by javascript helps in concatenation of two or more strings(String concat() ) or is used to merge two or more arrays. In case of arrays,this method does not change the existing arrays but instead returns a new array.

normal array concat() method
*/
let arr = [1,2,3];
let arr2 = [4,5];
  
arr = arr.concat(arr2);
console.log(arr); // [ 1, 2, 3, 4, 5 ]
  

// 2.Copy(like splice method)
// In order to copy the content of array to another we can do something like this:
// copying without the spread operator

let arr = ['a','b','c'];
let arr2 = arr;
console.log(arr2); // [ 'a', 'b', 'c' ]

In the above code we can clearly see that when we tried to insert an element inside the array, the original array is also altered which we didn’t intended and is not recommended. We can make use of the spread operator in this case, like this:

// spread operator for copying 
let arr = ['a','b','c'];
let arr2 = [...arr];
  
console.log(arr); // [ 'a', 'b', 'c' ]
  
arr2.push('d'); //inserting an element at the end of arr2
  
console.log(arr2); // [ 'a', 'b', 'c', 'd' ]
console.log(arr); // [ 'a', 'b', 'c' ]
// By using the spread operator we made sure that the original array is not affected whenever we alter the new array.

/*** Expand *** /
 Whenever we want to expand an array into another we do something like this:
 normally used expand method
 */
let arr = ['a','b'];
let arr2 = [arr,'c','d'];
console.log(arr2); // [ [ 'a', 'b' ], 'c', 'd' ]

  /******* MATH ***** /
The Math object in javascript has different properties that we can make use of to do what we want like finding the minimum from a list of numbers, finding maximum etc. Consider the case that we want to find the minimum from a list of numbers,we will write something like this:
console.log(Math.min(1,2,3,-1)); //-1 
