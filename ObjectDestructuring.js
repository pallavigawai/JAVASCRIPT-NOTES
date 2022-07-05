/***************************** OBJECT DESTRUCTURING ***************************** /
* Object destructuring assigns the properties of an object to variables with the same names by default.
* SYNTAX:-
    let { property1: variable1, property2: variable2 } = object;
NOTE:
 The property name is always on the left whether it’s an object literal or object destructuring syntax.
 EXAMPLE:
 */
let { firstName, lastName } = person;
console.log(firstName); // 'John'
console.log(lastName); // 'Doe'
//  It’s possible to separate the declaration and assignment. However, you must surround the variables in parentheses:

({firstName, lastName} = person);
// However, ({a, b} = {a: 1, b: 2}) is valid, as is const {a, b} = {a: 1, b: 2}.
// If you don’t use the parentheses, the JavaScript engine will interpret the left-hand side as a block and throw a syntax error.


// When you assign a property that does not exist to a variable using the object destructuring, the variable is set to undefined. For example:
let { firstName, lastName, middleName } = person;
console.log(middleName); // undefined

/********** Assigning to new variable names ************/
// A property can be unpacked from an object and assigned to a variable with a different name than the object property.

const o = {p: 42, q: true};
const {p: foo, q: bar} = o;

console.log(foo); // 42
console.log(bar); // true
Copy to Clipboard
Here, for example, const {p: foo} = o takes from the object o the property named p and assigns it to a local variable named foo.

/********* Setting default values *********** /
You can assign a default value to the variable when the property of an object doesn’t exist. For example:
EXAMPLE-1:
*/
let person = {
    firstName: 'John',
    lastName: 'Doe',
    currentAge: 28
};

let { firstName, lastName, middleName = '', currentAge: age = 18 } = person;

console.log(middleName); // ''
console.log(age); // 28

// EXAMPLE-2:-
const {a = 10, b = 5} = {a: 3};

console.log(a); // 3
console.log(b); // 5

  
// However, when the person object does have the middleName property, the assignment works as usual:
let person = {
    firstName: 'John',
    lastName: 'Doe',
    middleName: 'C.',
    currentAge: 28
};
let { firstName,  lastName, middleName = '', currentAge: age = 18 } = person;
console.log(middleName); // 'C.'
console.log(age); // 28

/*************** Assigning to new variable names and providing default values ****************/
// A property can be both
// Unpacked from an object and assigned to a variable with a different name.
// Assigned a default value in case the unpacked value is undefined.

const {a: aa = 10, b: bb = 5} = {a: 3};

console.log(aa); // 3
console.log(bb); // 5


// Nested object destructuring
let employee = {
    id: 1001,
    name: {
        firstName: 'John',
        lastName: 'Doe'
    }
};
// The following statement destructures the properties of the nested name object into individual variables:

let { name: {firstName, lastName }} = employee;
console.log(firstName); // John
console.log(lastName); // Doe
let employee = {
    id: 1001,
    name: {
        firstName: 'John',
        lastName: 'Doe'
    }
};

// It’s possible to do multiple assignement of a property to multiple variables:
let { name: { firstName,lastName}, name } = employee;
console.log(firstName); // John
console.log(lastName); // Doe
console.log(name); // { firstName: 'John', lastName: 'Doe' }

/************ Destructuring function arguments ***************/

let display = (person) => console.log(`${person.firstName} ${person.lastName}`);

let person = {
    firstName: 'John',
    lastName: 'Doe'
};
display(person);

// It’s possible to destructure the object argument passed into the function like this:

let display = ({firstName, lastName}) => console.log(`${firstName} ${lastName}`);
let person = {
    firstName: 'John',
    lastName: 'Doe'
};
display(person);
// This technique is often used in React.

/********** Unpacking properties from objects passed as a function parameter *********** /
Objects passed into function parameters can also be unpacked into variables, which may then be accessed within the function body. As for object assignment, the destructuring syntax allows for the new variable to have the same name or a different name than the original property, and to assign default values for the case when the original object does not define the property.

Consider this object, which contains information about a user.
*/
const user = {
  id: 42,
  displayName: 'jdoe',
  fullName: {
    firstName: 'John',
    lastName: 'Doe'
  }
};
// Here we show how to unpack a property of the passed object into a variable with the same name. The parameter value {id} indicates that the id property of the object passed to the function should be unpacked into a variable with the same name, which can then be used within the function.

function userId({id}) {
  return id;
}
console.log(userId(user)); // 42

// You can define the name of the unpacked variable. Here we unpack the property named displayName, and rename it to dname for use within the function body.
function userDisplayName({displayName: dname}) {
  return dname;
}

console.log(userDisplayName(user)); // `jdoe`

// Nested objects can also be unpacked. The example below shows the property fullname.firstName being unpacked into a variable called name.
function whois({displayName, fullName: {firstName: name}}) {
  return `${displayName} is ${name}`;
}
console.log(whois(user));  // "jdoe is John"
