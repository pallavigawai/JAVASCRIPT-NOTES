/*
SYNTAX:-
if (condition1){
  statement1}
else if (condition2){
  statement2}
else if (condition3){
  statement3}
...
else{}

# Declare a variable 'numNeighbours' based on a prompt input like this: 
prompt('How many neighbour countries does your country 
have?');
2. If there is only 1 neighbour, log to the console 'Only 1 border!' (use loose equality 
== for now)
3. Use an else-if block to log 'More than 1 border' in case 'numNeighbours'
is greater than 1
4. Use an else block to log 'No borders' (this block will be executed when 
'numNeighbours' is 0 or any other value
*/

let numNeighbours =prompt(5);
if(numNeighbours === 1){
    console.log('Only one border!')
    }
else if(numNeighbours > 1){
    console.log('More than 1 border!');
}
else{
    console.log( 'No bordes');
}

// Write a function addWithSurcharge that adds two amounts with surcharge. For each amount less than or equal to 10, the surcharge is 1. For each amount greater than 10, the surcharge is 2.
//Example: addWithSurcharge(5, 15) should return 23.

function addWithSurcharge(a,b){
let surcharge = 0;
if(a <= 10){
 surcharge = surcharge + 1;
} else{
surcharge = surcharge + 2;
}
if(b <= 10){
 surcharge = surcharge + 1;
} else{
 surcharge = surcharge + 2;
}
return a + b + surcharge;
}

//Write a function addWithSurcharge that adds two amounts with surcharge. For each amount less than or equal to 10, the surcharge is 1. For each amount greater than 10 and less than or equal to 20, the surcharge is 2. For each amount greater than 20, the surcharge is 3.
//Example: addWithSurcharge(10, 30) should return 44

function addWithSurcharge(a, b){
let surcharge = 0
if(a <= 10){
  surcharge = surcharge + 1;
  }
 else if(a > 10 && a <= 20){
  surcharge = surcharge + 2;
 }
 else{
  surcharge = surcharge + 3;
  }
console.log(surcharge);
if(b <= 10){
  surcharge = surcharge + 1;
  }
 else if(b > 10 && b <= 20){
  surcharge = surcharge + 2;
 }
 else{
  surcharge = surcharge + 3;
  }
 return a + b + surcharge;
}

