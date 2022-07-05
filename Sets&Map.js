 /******************** SETS ********************* /
 
* A set is a collection of items which are unique i.e no element can be repeated.
* Set can store any types of values whether primitive or objects.
* Syntax: 
   new Set([it]);

Parameter: 
it - It is an iterable object whose all elements are 
added to the new set created, 
If the parameter is not specified or null is passed 
then a new set created is empty.

Returns:
A new set object
*/
// it contains
// ["sumit","amit","anil","anish"]
let set1 = new Set(["sumit","sumit","amit","anil","anish"]);

// it contains 'f', 'o', 'd'
let set2 = new Set("fooooooood");

// it contains [10, 20, 30, 40]
let set3 = new Set([10, 20, 30, 30, 40, 40]);

// it is an empty set
let set4 = new Set();
/*
Properties: 
1.Set.prototype.size – It returns the number of elements in the Set.
Methods: 
 
2.Set.prototype.add() – It adds the new element with a specified value at the end of the Set object.
set1.add(val);
Parameter:
val - It is a value to be added to the set.
Returns: 
The set object
*/
// using Set.prototype.add(value)
// creating an empty set
let set1 = new Set();

// set contains 10, 20
set1.add(10);
set1.add(20);

// As this method returns
// the set object hence chaining
// of add method can be done.
set1.add(30).add(40).add(50);

// prints 10, 20, 30, 40, 50
console.log(set1);
/*
3.Set.prototype.delete() – It deletes an element with the specified value from the Set object. 
Syntax: set1.delete(val);
Parameter:
val - It is a value to be deleted from the set.
Returns: 
true if the value is successfully deleted from the set else returns false.
*/
// using Set.prototype.delete(value)
// creating set it contains
// f, o , d, i, e
let set1 = new Set("foooodiiiieee");

// deleting e from the set
// it prints true
console.log(set1.delete('e'));

// set contains f, o, d, i
console.log(set1);

// deleting an element which is
// not in the set
// prints false
console.log(set1.delete('g'));
/*
4.Set.prototype.clear() – It removes all the element from the set. 
Syntax: set1.clear();

Parameter:
No parameters
Returns: 
undefined
/*
5.Set.prototype.entries() – It returns an iterator object which contains an array having the entries of the set, in the insertion order. 
Syntax:
set1.entries();

Parameter:
No parameters

Returns: 
It returns an iterator object that contains an
array of [value, value] for every 
element of the set, in the insertion order. 
Example 

// Using Set.prototype.entries()
// creating set
var set1 = new Set();
 */
// adding element to the set
set1.add(50);
set1.add(30);
set1.add(40);
set1.add(20);
set1.add(10);
 
// using entries to get iterator
let getEntriesArry = set1.entries();
 
// each iterator is array of [value, value]
// prints [50, 50]
console.log(getEntriesArry.next().value);
 
// prints [30, 30]
console.log(getEntriesArry.next().value);
 
// prints [40, 40]
console.log(getEntriesArry.next().value);
/*
5.Set.prototype.has() – It returns true if the specified value is present in the Set object. 
Syntax: set1.has(val);

Parameter:
val - The value to be searched in the Set
Returns: 
True if the value is present else it returns false.
 
 
 6. Set.prototype.values() – It returns all the values from the Set in the same insertion order. 
Syntax: set1.values();
Parameter:
No parameters
Returns: 
An iterator object that contains all the values of the set in the same order 
as they are inserted. 

7. Set.prototype.keys() – It also returns all the values from the Set in the insertion order. 
Note: – It is similar to the values() in case of Sets 
Syntax: set1.keys();
Parameter:
No parameters
Returns: 
An iterator object that contains all the 
values of the set in the same order
as they are inserted. 
