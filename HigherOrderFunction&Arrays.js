/**************** HIGHER ORDER FUNCTION & ARRAYS **************** /

JavaScript treats functions as objects and allow us to pass functions as parameter to another function and even return functions from other functions.
In JavaScript the functions are first class functions meaning we can store them in variable, objects and array. The higher order functions can take function, return them or do both.

USE OF HIGHER ORDER FUNCTION:
* These higher-order functions decrease the length of the code,
* Increase the readability and simplify the accessibility.
* Some of the higher-order functions are maps, filters and reduce. 

In the following example, a new array is taken, even though the provided array is enough to complete the task. 
A for-loop, which is unnecessary in case of higher-order functions, is taken to loop through the array. 
*/
const name = [];
   var persons = [
      { name: 'Frodobaggins'},
      { name: 'aragorn'},
      { name: 'gandalf'},
      { name: 'pippin'},
      { name: 'nazgul'},
   ];
   for(let i = 0; i < persons.length; i++) {
      if(persons[i].name.length > 6) {
         name.push(persons[i]);
      }
   }
console.log(name);
//OUTPUT:- [{name:'Frodobaggins'},{name:'aragorn'},{name: 'gandalf'}] length - 3



// In the following example, a higher-order function filter is used. Comparing to the above example, the following example has occupied less number of lines of code. Here no new array is taken and also no for-loop is used.
Const persons = [
      { name: 'Frodobaggins'},
      { name: 'aragorn'},
      { name: 'gandalf'},
      { name: 'pippin'},
      { name: 'nazgul'},
    ];
const name = persons.filter(person => person.name.length > 7);
//Output:- [{"name":"Frodobaggins"}]

