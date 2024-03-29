/****************************** Array filter ****************************** /



SYNTAX :-
filter((element, index, array)
eg:-
*/
const words = [
  "spray",
  "limit",
  "elite",
  "exuberant",
  "destruction",
  "present",
];
const result = words.filter((word) => word.length > 6);
console.log(result);
// expected output: Array ["exuberant", "destruction", "present"]

const numbers = [1, 2, 3, 4, 5, 6];
const filtered = numbers.filter((num) => num > 4);
console.log(filtered);
// expected output: [5,6]
// Note: Here we used Arrow function syntax:- variable.filter((param1, paramN) => expression)

const array = [-3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
function isPrime(num) {
  for (let i = 2; num > i; i++) {
    if (num % i == 0) {
      return false;
    }
  }
  return num > 1;
}
console.log(array.filter(isPrime)); // [2, 3, 5, 7, 11, 13]
// Note: A prime number is a natural number greater than 1, which is only divisible by 1 and itself. First few prime numbers are : 2 3 5 7 11 13 17 19 23

//4)Following example uses filter() to filter array content based on search criteria.

let fruits = ["apple", "banana", "grapes", "mango", "orange"];

/*
  Filter array items based on search criteria (query)
 */
function filterItems(arr, query) {
  return arr.filter(function (el) {
    return el.toLowerCase().indexOf(query.toLowerCase()) !== -1;
    // OR
    //const filterItems = (arr, query) => {
    // return arr.filter(el => el.toLowerCase().indexOf(query.toLowerCase()) !== -1)
  });
}

console.log(filterItems(fruits, "ap")); //['apple', 'grapes'];
console.log(filterItems(fruits, "an")); //['banana', 'mango', 'orange']
