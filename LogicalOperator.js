//The Boolean operators have an order: First NOT, then AND, last OR. If you want to change this order, use parentheses:
//Write a function nor that takes two Boolean values. If both values are false, the result should be true. In the other cases the return should be false.

function nor(a,b){
let n1 = a||b;
let n2 = !n1;
return n2;
}

/Write a function xor that takes two Boolean values. If both values are different, the result should be true. If both values are the same, the result should be false.
//I.e.: The calls xor(true, false) and xor(false, true) should return true. The calls xor(true, true) and xor(false, false) should return false./I.e.: The call nor(false, false) should return true. The calls nor(true, false), nor(false, true) and nor(true, true) should return false.

function xor(a,b){
let n1 = a || b;
let n2 = !( a && b );
return ( a || b ) && !( a && b );
}

/*
Let's say Sarah is looking for a new country to live in. She wants to live in a 
country that speaks english, has less than 50 million people and is not an 
island.
3. Write an if statement to help Sarah figure out if your country is right for her. 
You will need to write a condition that accounts for all of Sarah's criteria. Take 
your time with this, and check part of the solution if necessary.
4. If yours is the right country, log a string like this: 'You should live in Portugal :)'. If 
not, log 'Portugal does not meet your criteria :('
*/
// do it your own
