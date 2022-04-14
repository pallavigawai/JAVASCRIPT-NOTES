/*
********** FUNCTION DECLARATION **********
SYNTAX:-
function sum(x, y) {
    return x + y;
}
# It starts with the keyword function. It follows:
   * the name of the function,
   * the parameters enclosed in round parentheses,
   * the statements enclosed in curly brackets.
# In JavaScript, you have to return from inside functions. If you forget to write return, your function will return undefined.
# The return keyword will also quit/exit the function, so the code afterward will never run!
# The function will not be executed, but only provided. Only with its call the function is executed. Every instruction in the function block is executed in order.

 */
 /********** FUNCTION EXPRESSION  **********/
 function felicitationMessage(data) {
    const message = `Congrats! ${data.name} for completing ${data.degree}`;
    console.log(message)
}
//felicitationMessage({name: 'PAllavi', degree: 'BE'})
