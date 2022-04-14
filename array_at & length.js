/******************************** Array.at ******************************** /

//The at() method takes an integer value and returns the item at that index, allowing for positive and negative integers.
//Negative integers count back from the last item in the array.

//For example
//array[0] :- return the first item. 
//instead of using array.length for latter items; 
//e.g. array[array.length-1] for the last item, you can call array.at(-1)

Return the last value of an array:-
1]const cart = ['apple', 'banana', 'pear'];
 // A function which returns the last item of a given array
 function returnLast(arr) {
   return arr.at(-1);
   //return ary[ary.length-1];
 }
// Get the last item of our array 'cart'
const item1 = returnLast(cart);
console.log(item1); // Logs: 'pear'
