//Null:- represents the intentional absence of any object value. It is one of JavaScript's primitive values and is treated as falsy for boolean operations.
 
/******* Difference between null and undefined *******/
//When checking for null or undefined, beware of the differences between equality (==) and identity (===) operators, as the former performs type-conversion.
/*
typeof null          // "object" (not "null" for legacy reasons)
typeof undefined     // "undefined"
null === undefined   // false
null  == undefined   // true
null === null        // true
null  == null        // true
!null                // true
isNaN(1 + null)      // false
isNaN(1 + undefined) // true
*/
//e.g:-
//1]Write a function cutComment that takes one line of JavaScript and returns a possible line comment trimmed. If the line contains no line comment, null should be returned. For simplicity, we assume that the code does not contain the comment characters within a string.
const cutComment = string => {
let onlyComment = string.indexOf('//');
if (string.indexOf('/') < 1) {
return null;
}
return string.substr(onlyComment+2).trim();
}
                       // OR
                        
function cutComment (line) {
let a = line.indexOf('//'); 
if (a === -1) { 
return null; 
} else {
return line.slice(a+2).trim(); 
}};                        
