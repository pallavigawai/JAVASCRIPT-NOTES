/*************** ARRAY TYPES ****************/
/*
                                                                 ARRAY MAP:-
* map() creates a new array from calling a function for every array element.
* map() calls a function once for each element in an array.
* map() does not execute the function for empty elements.
* map() does not change the original array.

SYNTAX:-
 map((element, index, array) => { /* ... */ })
 
# You shouldn't be using map if:
   you're not using the array it returns; and/or
   you're not returning a value from the callback.

*/
const persons = [
  {firstname : "Malcom", lastname: "Reynolds"},
  {firstname : "Kaylee", lastname: "Frye"},
  {firstname : "Jayne", lastname: "Cobb"}
];

function getFullName(item) {
  return [item.firstname,item.lastname].join(" ");
}
 // Malcom Reynolds,Kaylee Frye,Jayne Cobb

Multiply every element in the array with 10
const numbers = [65, 44, 12, 4];
const newArr = numbers.map(myFunction);
function myFunction(num) {
  return num * 10;
}
// 650,440,120,40


                                                  ARRAY JOIN
                                                  
/*
* creates and returns a new string by concatenating all of the elements in an array                                                  
                                                  
   SYNTAX:-
join()
join(separator)
* Specifies a string to separate each pair of adjacent elements of the array.If separator is an empty string, all elements are joined without any characters in between them.
*/
const elements = ['Fire', 'Air', 'Water'];

console.log(elements.join());
// expected output: "Fire,Air,Water"

console.log(elements.join(''));
// expected output: "FireAirWater"

console.log(elements.join('-'));
// expected output: "Fire-Air-Water"

const a = ['Wind', 'Water', 'Fire'];
a.join();      // 'Wind,Water,Fire'
a.join(', ');  // 'Wind, Water, Fire'
a.join(' + '); // 'Wind + Water + Fire'
a.join('');    // 'WindWaterFire'


                                                      ARRAY SPLICE
 /*                                                     
 The splice() method changes the contents of an array by removing or replacing existing elements and/or adding new elements in place. To access part of an array without modifying it, see slice().
 
 SYNTAX:-
   splice(start, deleteCount, item1)
* start
  The index at which to start changing the array.
*  deleteCount Optional
   An integer indicating the number of elements in the array to remove from start.
*  item1, item2, ... Optional
   The elements to add to the array, beginning from start.
   If you do not specify any elements, splice() will only remove elements from the array.
 
   */
let myFish = ['angel', 'clown', 'mandarin', 'sturgeon']
let removed = myFish.splice(2, 0, 'drum')

// myFish is ["angel", "clown", "drum", "mandarin", "sturgeon"]
// removed is [], no elements removed

let myFish = ['parrot', 'anemone', 'blue', 'trumpet', 'sturgeon']
let removed = myFish.splice(2, 2)

// myFish is ["parrot", "anemone", "sturgeon"]
// removed is ["blue", "trumpet"]
   

                                                         ARRAY SLICE 
 /*                                                        
a portion of an array into a new array object selected from start to end (end not included) where start and end represent the index of items in that array. The original array will not be modified.
 SYNTAX:-
  slice(start, end)
 * start Optional
   Zero-based index at which to start extraction.If start is undefined, slice starts from the index 0. If start is greater than the index range of the sequence, an empty array is returned.
 * end 
  The index of the first element to exclude from the returned array. slice extracts up to but not including end. For example, slice(1,4) extracts the second element through the fourth element (elements indexed 1, 2, and 3).  
 
  */
                                                         
                                                         
                                                         ARRAY FIND
                                                         
  /*
   The find() method returns the first element in the provided array that satisfies the provided testing function. If no values satisfy the testing function, undefined is returned.                                                      
                                                        
  SYNTAX:
  find((element, index, array) => { /* ... */ } )
  # If you need the index of the found element in the array, use findIndex().                                                      
  # If you need to find if a value exists in an array, use Array.includes(). Again, it checks each element for equality with the value instead of using a testing function.
  */   
// Find an object in an array by one of its properties:-
const inventory = [
  {name: 'apples', quantity: 2},
  {name: 'bananas', quantity: 0},
  {name: 'cherries', quantity: 5}
];

function isCherries(fruit) {
  return fruit.name === 'cherries';
}
console.log(inventory.find(isCherries));
// { name: 'cherries', quantity: 5 }

// Declare array with no elements at indexes 2, 3, and 4
const array = [0,1,,,,5,6];

// Shows all indexes, not just those with assigned values
array.find(function(value, index) {
  console.log('Visited index ', index, ' with value ', value);
});

// Shows all indexes, including deleted
array.find(function(value, index) {
  // Delete element 5 on first iteration
  if (index === 0) {
    console.log('Deleting array[5] with value ', array[5]);
    delete array[5];
  }
  // Element 5 is still visited even though deleted
  console.log('Visited index ', index, ' with value ', value);
});
                                                      








                                                         
