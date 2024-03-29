<!DOCTYPE html>
<html>
<body>
    <script src="./script.js"></script>
    </body>
</html>


/******************************** Array.Concat() ********************************/

//The concat() method is used to merge two or more array.

//e.g
1]const array1 = ['a', 'b', 'c'];
 const array2 = ['d', 'e', 'f'];
 const array3 = array1.concat(array2);

 console.log(array3);
 // expected output: Array ["a", "b", "c", "d", "e", "f"]
 
//2] Write a function concatUp that concatenate two arrays. The longer array should be appended to the shorter array. If both arrays are equally long, the second array should be appended to the first array.
 //Example: concatUp([1, 2], [3]) should return [3, 1, 2] and concatUp([5, 7], [6, 8]) should return [5, 7, 6, 8].

function concatUp(firstArr, secondArr){
if(secondArr.length >= firstArr.length){
return firstArr.concat(secondArr);
}
else{
return secondArr.concat(firstArr);
}
}
/*
test passed by:-
concatUp has 2 parameter(s).
concatUp([5, 7], [6]) returns [ 6, 5, 7 ].
concatUp(['x'], ['a', 'b']) returns [ 'x', 'a', 'b' ].
concatUp([5, 7], [6, 8]) returns [ 5, 7, 6, 8 ].
*/

//3] Concatenating three arrays into single array:- (Concat method)
const num1 = [1, 2, 3];
const num2 = [4, 5, 6];
const num3 = [7, 8, 9];

const numbers = num1.concat(num2, num3);
console.log(numbers);
// results in [1, 2, 3, 4, 5, 6, 7, 8, 9]

/*
(flat method)
return number.flat()
*/
