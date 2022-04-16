/******************************** Array.at ******************************** /

//The at() method takes an integer value and returns the item at that index, allowing for positive and negative integers.
//Negative integers count back from the last item in the array.

For example
array[0] :- return the first item. 
instead of using array.length for latter items; 
e.g. array[array.length-1] for the last item, you can call array.at(-1): this gives last index of element.
*/
// Return the last value of an array:-
1]const cart = ['apple', 'banana', 'pear'];
 // A function which returns the last item of a given array
 function returnLast(arr) {
   return arr.at(-1);
   //return ary[ary.length-1]; (OR)
 }
// Get the last item of our array 'cart'
const item1 = returnLast(cart);
console.log(item1); // Logs: 'pear'

/*
             ARRAY LENGTH 
  Returns the number of elements in that array.
  
 */
//When you extend an array by changing its length property, the number of actual elements increases
const arr = [1, 2];
console.log(arr);
// [ 1, 2 ]
arr.length = 5; // set array length to 5 while currently 2.
console.log(arr);
// [ 1, 2, <3 empty items> ]
arr.forEach(element => console.log(element));
// 1
// 2

// Iterating over an array
 const numbers = [1, 2, 3, 4, 5];
const length = numbers.length;
for (var i = 0; i < length; i++) {
  numbers[i] *= 2;
}
// numbers is now [2, 4, 6, 8, 10]

//Create empty array of fixed length
const numbers = [];
numbers.length = 3;
console.log(numbers); // [undefined, undefined, undefined]

//Note:-  In array for loop, always starts from 0 i.e (i = 0)
