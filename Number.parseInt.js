                                         /******** Number.parseInt() ********
The Number.parseInt() method parses a string argument and returns an integer of the specified radix or base.
Syntax
Number.parseInt(string, radix)

The value to parse. If this argument is not a string, then it is converted to one using the ToString abstract operation. Leading whitespace in this argument is ignored.
Return value
An integer parsed from the given string.
Number.parseInt === parseInt // true
parseInt understands exactly two signs: + for positive, and - for negative

# isNaN():-
The isNaN() function determines whether a value is NaN or not.
* Syntax:
  isNaN(value)
* Return value:
  true if the given value is NaN; otherwise, false.
  
* to determine whether the value is NaN or not, because both NaN == NaN and NaN === NaN evaluate to false. 
* Number.isNaN(x) is a reliable way to test whether x is NaN or not. Even with Number.isNaN, however, the meaning of NaN remains the precise numeric meaning and not, "not a number". 
  Alternatively, in the absence of Number.isNaN, the expression (x != x) is a more reliable way to test whether variable x is NaN or not, as the result is not subject to the false positives that make isNaN unreliable.
* Examples
isNaN(NaN);       // true
isNaN(undefined); // true
isNaN({});        // true
isNaN(null);      // false
isNaN('');        // false: the empty string is converted to 0 which is not NaN
isNaN(' ');       // false: a string with spaces is converted to 0 which is not NaN
  
  
  */
  const isNaN = function(value) {
    const n = Number(value);
    return n !== n;
};
