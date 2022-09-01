/************* EVENT DELEGATION ************** 

An event in JavaScript is defined as “things that happen to HTML elements,” and there are a a lot of them.

Here are some of the common JavaScript events:
* CHANGE:: An HTML element has been changed
* CLICK:: The user clicks an HTML element
* mouseover:: The user moves the mouse over an HTML element
* mouseout:: The user moves the mouse away from an HTML element
* keydown:: The user pushes a keyboard key
* load:: The browser has finished loading the page

To add an event listener on an HTML element you use the addEventListener() method. However what happens to the event listener when the element is added to the DOM (webpage) after the initial page load?
It is best to think of event delegation as responsible parents.

* Console.log(event.target):-
 it identifies the HTML element on which the event occurred. (The event in our case is the click! The object on which the event occurred is the <input/>.)
*  Console.log(event.currentTarget):-
It always refers to the element to which the event listener has been attached.( In our case the event listener was attached to the unordered list, characters, so that is what we see in our console.)

//Event Delegation
function toggleDone (event) {
  if (!event.target.matches(‘input’)) return
  console.log(event.target)
  //We now have the correct input - we can manipulate the node here
}
# Why Use Event Delegation?
Without event delegation you would have to rebind the click event listener to each new input loaded to the page.
Coding this is complicated and burdensome. For one, it would drastically increase the amount of event listeners on your page, and more event listeners would increase the total memory footprint of your page. Having a larger memory footprint decreases performance,
And poor performance is a bad thing. Second, there can be memory leak issues associated with binding and unbinding event listeners and removing elements from the dom. But that is beyond the scope of this article!
What REALLY happens when you make a click?
Whenever a user makes a click it ripples up all the way up to the top of the DOM and triggers clicks events on all the parent elements of the element you clicked. You don’t always see these clicks, because you aren’t always listening (with an event listener) for a click on these elements, but this bubbling up does happen.

# This is called event bubbling or event propagation.
Because of its bubbling nature, event propagation basically means that anytime you click one of our inputs on the DOM, you are effectively clicking the entire document body.
Because of event bubbling you can place an event listener on a single parent HTML element that lives above a HTML child, and that event listener will get executed whenever an event occurs on any of its child nodes — even if these node children are added to the page after the initial load!
