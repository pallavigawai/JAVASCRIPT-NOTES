/******************* MAP ********************* /
* The Map object holds key-value pairs and remembers the original insertion order of the keys.
* Any value (both objects and primitive values) may be used as either a key or a value.
Syntax:- Creates a new Map object.
new Map([iterable])  
iterable - It represents an array and other iterable object whose elements are in the form of key-value pair.
* Points to remember
- map object cannot contain the duplicate keys.
- A map object can contain the duplicate values.
- The key and value can be of any type (allows both object and primitive values).
- A map object iterates its elements in insertion order —  for...of loop returns an array of [key, value] for each iteration..


JavaScript Map Methods
Let's see the list of JavaScript map methods with their description.

#  Methods	Description
1. clear()
    It removes all the elements from a Map object.
2. delete()
   It deletes the specified element from a Map object.
3. entries()
   It returns an object of Map iterator that contains the key-value pair for each element.
4. forEach()
   It executes the specified function once for each key/value pair.
5. get()
   It returns the value of specified key.
6. has()
   It indicates whether the map object contains the specified key element.
7. keys()
   It returns an object of Map iterator that contains the keys for each element.
8. set()
   It adds or updates the key-value pairs to Map object.
9. values()
   It returns an object of Map iterator that contains the values for each element.
   
 */  
const map1 = new Map();

map1.set('a', 1);
map1.set('b', 2);
map1.set('c', 3);

console.log(map1.get('a'));
// expected output: 1

map1.set('a', 97);

console.log(map1.get('a'));
// expected output: 97

console.log(map1.size);
// expected output: 3

map1.delete('b');

console.log(map1.size);
// expected output: 2
/*
However, there are important differences that make Map preferable in some cases:
*Map	&& #Object

1. Accidental Keys:
*  A Map does not contain any keys by default. It only contains what is explicitly put into it.	
#  An Object has a prototype, so it contains default keys that could collide with your own keys if you're not careful.
   Note: As of ES5, this can be bypassed by using Object.create(null), but this is seldom done.

2.Key Types:
* A Map's keys can be any value (including functions, objects, or any primitive).
# The keys of an Object must be either a String or a Symbol.
 
3. Key Order	
* The keys in Map are ordered in a simple, straightforward way: A Map object iterates entries, keys, and values in the order of entry insertion.
# Although the keys of an ordinary Object are ordered now, this was not always the case, and the order is complex. As a result, it's best not to rely on property order.
  The order was first defined for own properties only in ECMAScript 2015; ECMAScript 2020 defines order for inherited properties as well.
  See the OrdinaryOwnPropertyKeys and EnumerateObjectProperties abstract specification operations. But note that no single mechanism iterates all of an object's properties; the various mechanisms each include different subsets of properties.
  (for-in includes only enumerable string-keyed properties; Object.keys includes only own, enumerable, string-keyed properties; Object.getOwnPropertyNames includes own, string-keyed properties even if non-enumerable; Object.getOwnPropertySymbols does the same for just Symbol-keyed properties, etc.)

4. Size
* number of items in a Map is easily retrieved from its size property.
# The number of items in an Object must be determined manually.

5. Iteration	:
* A Map is an iterable, so it can be directly iterated.	
# Object does not implement an iteration protocol, and so objects are not directly iterable using the JavaScript for...of statement (by default).
Note:
An object can implement the iteration protocol, or you can get an iterable for an object using Object.keys or Object.entries.
The for...in statement allows you to iterate over the enumerable properties of an object.

6. Performance	
* Performs better in scenarios involving frequent additions and removals of key-value pairs.
# Not optimized for frequent additions and removals of key-value pairs.

7. Serialization and parsing	
* No native support for serialization or parsing.
  (But you can build your own serialization and parsing support for Map by using JSON.stringify() with its replacer argument, and by using JSON.parse() with its reviver argument. See the Stack Overflow question How do you JSON.stringify an ES6 Map?).
# Native support for serialization from Object to JSON, using JSON.stringify().
  Native support for parsing from JSON to Object, using JSON.parse().
  
  /******* Setting object properties ********* 
Setting Object properties works for Map objects as well, and can cause considerable confusion.

Therefore, this appears to work in a way:

const wrongMap = new Map()
wrongMap['bla'] = 'blaa'
wrongMap['bla2'] = 'blaaa2'

console.log(wrongMap)  // Map { bla: 'blaa', bla2: 'blaaa2' }
But that way of setting a property does not interact with the Map data structure. It uses the feature of the generic object. The value of 'bla' is not stored in the Map for queries.
  
/ ***** The correct usage for storing data in the Map is through the set(key, value) method.******/

const contacts = new Map()
contacts.set('Jessie', {phone: "213-555-1234", address: "123 N 1st Ave"})
contacts.has('Jessie') // true
contacts.get('Hilary') // undefined
contacts.set('Hilary', {phone: "617-555-4321", address: "321 S 2nd St"})
contacts.get('Jessie') // {phone: "213-555-1234", address: "123 N 1st Ave"}
contacts.delete('Raymond') // false
contacts.delete('Jessie') // true
console.log(contacts.size) // 1

/****** Using the Map object *******/
const myMap = new Map()

const keyString = 'a string'
const keyObj    = {}
const keyFunc   = function() {}

// setting the values
myMap.set(keyString, "value associated with 'a string'")
myMap.set(keyObj, 'value associated with keyObj')
myMap.set(keyFunc, 'value associated with keyFunc')

myMap.size              // 3

// getting the values
myMap.get(keyString)    // "value associated with 'a string'"
myMap.get(keyObj)       // "value associated with keyObj"
myMap.get(keyFunc)      // "value associated with keyFunc"

myMap.get('a string')    // "value associated with 'a string'"
                         // because keyString === 'a string'
myMap.get({})            // undefined, because keyObj !== {}
myMap.get(function() {}) // undefined, because keyFunc !== function () {}

/******* Iterating Map with for..of   *******/
Maps can be iterated using a for..of loop:
const myMap = new Map()
myMap.set(0, 'zero')
myMap.set(1, 'one')

for (const [key, value] of myMap) {
  console.log(key + ' = ' + value)
}
// 0 = zero
// 1 = one

for (const key of myMap.keys()) {
  console.log(key)
}
// 0
// 1

for (const value of myMap.values()) {
  console.log(value)
}
// zero
// one

for (const [key, value] of myMap.entries()) {
  console.log(key + ' = ' + value)
}
// 0 = zero
// 1 = one

/********* Iterating Map with forEach()  **********/
// Maps can be iterated using the forEach() method:

myMap.forEach(function(value, key) {
  console.log(key + ' = ' + value)
})
// 0 = zero
// 1 = one

// Maps can be merged, maintaining key uniqueness:
const first = new Map([
  [1, 'one'],
  [2, 'two'],
  [3, 'three'],
])

const second = new Map([
  [1, 'uno'],
  [2, 'dos']
])

// Merge two maps. The last repeated key wins.
// Spread operator essentially converts a Map to an Array
const merged = new Map([...first, ...second])

console.log(merged.get(1)) // uno
console.log(merged.get(2)) // dos
console.log(merged.get(3)) // three

