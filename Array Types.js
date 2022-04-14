/*************** ARRAY TYPES **************** /

                                                                 ARRAY MAP:-
* map() creates a new array from calling a function for every array element.
* map() calls a function once for each element in an array.
* map() does not execute the function for empty elements.
* map() does not change the original array.

SYNTAX:-
 map((element, index, array) => { /* ... */ })
/* 
You shouldn't be using map if:
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
  /*
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
                                                      

                                           /********* ARRAY charAt() ********* /

The charAt() method returns the character at the specified index in a string.
* SYNTAX:-
  str.charAt(index)
* charAt() Return Value
 Returns a string representing the character at the specified index.
*/
// Example 1: An Integer Index Value in charAt() Method
// string declaration
const string= "Hello World!";
// using charAt() method 
let index1= string.charAt(1);
console.log("Character at index 1 is " + index1);

// Example 2: A Non-integer Index Value in charAt() Method
 const string= "Hello World";
// using charAt() at index 6
 let result2 = string.charAt(6);
 console.log("Character at index 6 is " + result2);
// using charAt() at index 6.5
 let result1 = string.charAt(6.5); 
 console.log("Character at index 6.5 is " + result1);
/*OUTPUT:-
  Character at index 6 is W
  Character at index 6.5 is W
since the non-integer index value 6.5 is converted to integer index 6.
*/
//Example 3: Without passing parameter in charAt() method
let sentence = "Happy Birthday to you!";
// passing empty parameter in charAt() 
let index4 = sentence.charAt();
console.log("Character at index 0 is  " + index4);
//OUTPUT:-
//Character at index 0 is  H
  
// Example 4: Index Value Out of Range in charAt() Method
let sentence = "Happy Birthday to you!";
// using index out of range in charAt()
let index3 = sentence.charAt(100);
console.log("Character at index 100 is: " + index3);
//Character at index 100 is:
//In the above program, 100 index value is out of range, so the charAt() method returns an empty string.

                               /******* ARRAY indexOF() ******/
  /*                             
  The string indexOf() method returns the index of the first occurence of the substring in a string.     
  const message = "JavaScript is not Java";

// returns index of 'v' in first occurrence of 'va'
const index = message.indexOf("va");
console.log('index: ' + index);  // index: 2
* indexOf() Syntax:-
  str.indexOf(searchValue, fromIndex)

* Return Value
  Returns the first index of the value in the string if it is present at least once.
  Returns -1 if the value is not found in the string.
*  For empty string searchValue and fromIndex less than the string's length, indexOf returns the value the same as fromIndex.
* Similarly, for empty string searchValue and fromIndex greater than the string's length, indexOf returns the string's length.
*/
var str = "JavaScript is the world's most misunderstood programming language.";
// indexOf() returns the first occurance
var index1 = str.indexOf("language");
console.log(index1); // 57

var index2 = str.indexOf("p");
console.log(index2); // 8

// second argument specifies the search's start index
var index3 = str.indexOf("p", 9);
console.log(index3); // 45

// indexOf returns -1 if not found
var index4 = str.indexOf("Python");
console.log(index4); // -1

//Example 2: Finding All the Occurrences of an Element
function findAllIndex(string, value) {
  indices = [];
  var currentIndex = string.indexOf(value);
  while (currentIndex != -1) {
    indices.push(currentIndex);
    currentIndex = string.indexOf(value, currentIndex + value.length);
  }
  return indices;
}

var str = "JavaScript is as related to Java as Carpenter is to Carpet.";

var occurance1 = findAllIndex(str, "J");
console.log(occurance1); // [ 0, 28 ]

var occurance2 = findAllIndex(str, "Carpet");
console.log(occurance2); // [ 52 ]

var occurance3 = findAllIndex(str, "x");
console.log(occurance3); // []


                              /******* ARRAY lastIndexOF() ******* /
                              
The JavaScript Array lastIndexOf() method returns the last index at which a given element can be found in the array, or -1 if it is not present.
SYNTAX:-
  arr.lastIndexOf(searchElement, fromIndex)
* fromIndex (optional) - The index to start searching backwards. By default it is array.length - 1.
Note: lastIndexOf() compares searchElement to elements of the Array using strict equality (similar to triple-equals operator or ===).
*/
//Example 1: Using lastIndexOf() method
var priceList = [10, 8, 2, 31, 10, 1, 65];

// lastIndexOf() returns the last occurance
var index1 = priceList.lastIndexOf(31);
console.log(index1); // 3

var index2 = priceList.lastIndexOf(10);
console.log(index2); // 4

// second argument specifies the backward search's start index
var index3 = priceList.lastIndexOf(10, 3);
console.log(index3); // 0

// lastIndexOf returns -1 if not found
var index4 = priceList.lastIndexOf(69.5);
console.log(index4); // -1

//Example 2: Finding All the Occurrences of an Element
function findAllIndex(array, element) {
  indices = [];
  var currentIndex = array.lastIndexOf(element);
  while (currentIndex != -1) {
    indices.push(currentIndex);
    if (currentIndex > 0) {
      currentIndex = array.lastIndexOf(element, currentIndex - 1);
    } else {
      currentIndex = -1;
    }
  }
  return indices;
}

var priceList = [10, 8, 2, 31, 10, 1, 65, 10];
var occurance1 = findAllIndex(priceList, 10);
console.log(occurance1); // [ 7, 4, 0 ]

var occurance2 = findAllIndex(priceList, 8);
console.log(occurance2); // [ 1 ]

var occurance3 = findAllIndex(priceList, 9);
console.log(occurance3); // []
                                                         
