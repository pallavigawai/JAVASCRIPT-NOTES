/*********************** CLOSURE *************************** / 
 A Closure gives you access to an outer function's scope from an inner function. In JavaScript, closures are created every time a function is created, at function creation time.
The closure has three scope chains listed as follows:
* Access to its own scope.
* Access to the variables of the outer function.
* Access to the global variables.

A Function has access to the VE( variable environment) of the exceution context in wchich it was created.
VE attached to the function, exactly it was at the time and place the function was created :- Closure.

DEFINATIONS:-
1. A Closure gives a function access to all the variables of its parent function, even after that parent function has returned. The function keeps its reference to its outer scope, which preserves the scope chain throughout the time.
2. A Closure makes sure that function doesn't loose connection to variables that existed at the function's birth place.
3. A Closure is like a bag pack that a function carries around wherever it goes. This bag pack has all the variables that are present in the environment where the function was created.
   then whenever  a variable cant be found in a function scope,  js will look  into the bag pack and take the missing variables from their.
   
  # In order to see the variable and function bound within closure we can write as:  
   console.dir(ftn_name());
