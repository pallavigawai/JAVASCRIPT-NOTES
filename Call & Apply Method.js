/***************************** CALL AND APPLY METHOD ************************** /
# call() Method in JavaScript:-
 In this method, a function is called with its arguments which are provided individually. The keyword “this” is added for referring to the owner of the object.
  * It depends on how we are calling a particular function. In the global scope, this refers to the global object window.
  * Inside function also this refers to the global object window.
  * In strict mode, when we use any function then this refers to undefined. In functions like call, this could refer to a different object. With the help of the call method, we can invoke a particular function with different objects.
 
SYNTAX:- object.objectMethod.call( objectInstance, arguments )
Parameters of call() method
Two parameters are accepted by the call() method.
* argument: It takes the arguments which are separated by commas.
* objectInstance: It has the instance of an object and checks the type of object at run time.

*/
// Example:- Using call() method without arguments
const person = {
  firstName: 'Alice',
  lastName: 'Mark',
}
function fullName() {
  console.log(`${this.firstName} ${this.lastName}`)
}
fullName.call(person)
// OUTPUT:- Alice Mark

// Example: Using call() method with arguments in JavaScript
const person = {
  fullName: function(age, height) {
    return this.firstName + " " + this.lastName + "," + age + "," + height;
  }
}
const personN = {
  firstName:"Alice",
  lastName: "Mark"
}

person.fullName.call(personN, "25", "5ft");
// OUTPUT: 'Alice Mark,25,5ft'
/*

# apply() Method in JavaScript
The apply() method takes the arguments of a function in the form of an array, which can be used on different objects.
Invoke an apply() method with arguments
SYNTAX:- object.objectMethod.apply(objectInstance, arrayOfArguments)
There are two parameters in apply() method:
* objectInstance: It checks the type of an object at run time.
* arrayOfArguments: It takes the arguments from an array..
*/
// Example:- apply() method without arguments
const person = {
  FullName: function() {
    return this.FirstName + " " + this.LastName;
  }
}
const personN = {
  FirstName: "Alice",
  LastName: "Mark"
}
person.FullName.apply(personN);
// OUTPUT:- 'Alice Mark'

// Example with arguments(in array form)
const person = {
  FullName: function(age, height) {
    return this.FirstName + " " + this.LastName + "," + age + "," + height;
  }
}

const personN = {
  FirstName:"Alice",
  LastName: "Mark"
}

person.FullName.apply(personN, ["25", "5ft"]);
// OUTPUT:- 'Alice Mark,25,5ft'

/*
Difference between call and apply methods in JavaScript
The main difference between call() and apply() JavaScript methods is:

In the call() method, arguments are passed individually.
The apply() method accepts the arguments in the form of an array.
