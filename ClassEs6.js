/********************** ES6 Classes *************************** /

Classes are an essential part of object-oriented programming (OOP). 
Classes are used to define the blueprint for real-world object modeling and organize the code into reusable and logical parts.
In ES6, we can create the class by using the class keyword. We can include classes in our code either by class expression or by using a class declaration.
A class definition can only include constructors and functions. These components are together called as the data members of a class. The classes contain constructors that allocates the memory to the objects of a class. Classes contain functions that are responsible for performing the actions to the objects.

Let us see the illustration for the class expression and class declaration.

Example - Class Declaration
*/
class Student{  
    constructor(name, age){  
    this.name = name;  
    this.age = age;  
    }  
  
}  
// Example - Class Expression

let Student = class{  
    constructor(name, age){  
    this.name = name;  
    this.age = age;  
    }  
}  

/*
Instantiating an Object from class
Like other object-oriented programming languages, we can instantiate an object from class by using the new keyword.

Syntax
*/
let obj_name = new class_name([arguements])  
// Example

let stu = new Student('Peter', 22)  
/*
Accessing functions
The object can access the attributes and functions of a class. We use the '.' dot notation (or period) for accessing the data members of the class.
Syntax:-
obj.function_name();  
Example

'use strict'
*/
class Student {   
   constructor(name, age) {   
      this.n = name;   
      this.a = age;  
   }   
   stu() {   
      console.log("The Name of the student is: ", this.n)   
      console.log("The Age of the student is: ",this. a)   
   }   
}   
  
let stuObj = new Student('Peter',20);   
stuObj.stu(); 

/*OUTPUT:- 
The Name of the student is:  Peter
The Age of the student is:  20

n the above example, we have declared a class Student. The constructor of the class contains two arguments name and age, respectively. The keyword 'this' refers to the current instance of the class.
We can also say that the above constructor initializes two variables 'n' and 'a' along with the parameter values passed to the constructor.
The function stu() in the class will print the values of name and age.

THE STATIC KEYWORD
The static keyword is used for making the static functions in the class. Static functions are referenced only by using the class name.
Example

'use strict' 
*/
class Example {   
   static show() {   
      console.log("Static Function")   
   }   
}   
Example.show() //invoke the static method 
//OUTPUT:- Static Function

