/************************* PASS BY VALUE & PASS BY REFERENCE ************************** /

  
Pass By Value: 
* In Pass by value, function is called by directly passing the value of the variable as an argument.
* So any changes made inside the function does not affect the original value.
* In Pass by value, parameters passed as an arguments create its own copy. So any changes made inside the function is made to the copied value not to the original value .
*/

function Passbyvalue(a, b) {
	let tmp;
	tmp = b;
	b = a;
	a = tmp;
	console.log(`Inside Pass by value
		function -> a = ${a} b = ${b}`);
}

let a = 1;
let b = 2;
console.log(`Before calling Pass by value
		Function -> a = ${a} b = ${b}`);

Passbyvalue(a, b);

console.log(`After calling Pass by value
	Function -> a =${a} b = ${b}`);

/*
Output:

Before calling Pass by value Function -> a = 1 b = 2
Inside Pass by value function -> a = 2 b = 1
After calling Pass by value Function -> a =1 b = 2


***** Pass by Reference: *****
* There are some instances that address is passed instead of arguments to call a function. At that time, changing the value inside the function affect the variable passed from outside the function.
  This is called a pass by reference. In javascript mostly arrays and objects follow pass by reference.
* In Pass by Reference, Function is called by directly passing the reference/address of the variable as an argument.
* So changing the value inside the function also change the original value. In JavaScript array and Object follows pass by reference property.
* In Pass by reference, parameters passed as an arguments does not create its own copy, it refers to the original value so changes made inside function affect the original value.
*/
function PassbyReference(obj) {
	let tmp = obj.a;
	obj.a = obj.b;
	obj.b = tmp;

	console.log(`Inside Pass By Reference
		Function -> a = ${obj.a} b = ${obj.b}`);
}

let obj = {
	a: 10,
	b: 20

}
console.log(`Before calling Pass By Reference
	Function -> a = ${obj.a} b = ${obj.b}`);

PassbyReference(obj)

console.log(`After calling Pass By Reference
	Function -> a = ${obj.a} b = ${obj.b}`);
/*
Output:

Before calling Pass By Reference Function -> a = 10 b = 20
Inside Pass By Reference Function -> a = 20 b = 10
After calling Pass By Reference Function -> a = 20 b = 10


