/*Deleting the existing code in index.js from react crash course for focussing on plain vanilla js for the "JAVASCRIPT FOR REACT DEVELOPERS BY MOSH"*/

import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(<App />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
//The above code was present by default in index.js in react-app folder. The below code is pure vanilla javascript.
//-------------------------------------------------------------------------------------
//------JAVASCRIPT ESSENTIALS FOR REACT DEVELOPERS BY MOSH----------------------
//Demonstration of scope of var --> function, let --> block, const --> block.
//var --> function
//let --> block--> can be reassigned.
//const --> block --> cannot be reassinged.

// function sayHello() {
//   for (var i = 0; i < 5; i++) {
//     console.log(i); //output is 0, 1, 2 ,3, 4.
//   } //"var i" should be accessible only in the for loop since it was declared in the for loop.
//   console.log(i); //output is 0, 1, 2,3,4, 5. But, i is accessible here also. Why?
//   //This is because in javascript if a variable is declared with a "var" keyword, it is accessible within the function in which it is declared. This makes js different from other programming languages. ECMA javascript ES6 introduced in 2015.
// }
// sayHello();
//---------------------------------------------------------------------------------------------
//Using "let" keyword gives access to the variable only in the block in which it is declared.
// function sayHello() {
//   for (let i = 0; i < 5; i++) {
//     console.log(i);
//   }
//   console.log(i);
// }
// sayHello();
//----------------------------------------------
//using "const" keyword
// const a = 1;
// a = 2; //Uncaught TypeError: Assignment to constant variable in console.Syntax error : a is read only.
//----------------------OBJECTS-----------------------------
//Objects are collections of key-value pairs. In OOP, functions inside the object is called method. Methods are walk() and talk().
// const person = {
//   name: "Mosh",
//   walk: function() {}, //or walk() {} this is a short form to write in ES6.
//   talk() {}
// };
//.Notation in javascript to access the memebers of the object in javascript.
// person.name; //output in console: "Mosh"
// person.name = "John"; //error in console:Identifier person has already been declared.
// person.talk(); //.Notation
// person.walk();
// const targetMember = "name"; //bracket notation is used when we don't know which property we are going to access. For example, Imagine targetMember is an input field in a form. Depending on what the user types in the input field, we will be accessing a different property in the personal object.That's y we use bracket notation. Instead of hard coding name here like " person["name"] = "John"; ",we access the value property.
// person[targetMember.value] = "John";
//This depends on what the user types in the input field. The constant targetValue is set to 'name'. So the value of name is Mosh. It will be changed to 'John'. Thus, dynamically accessing the value of a property or a method in an object. Because, targetMember is an input field. The user can enter anything. It can be a method or a property. So, since we dont know what the user will enter, use []. This will help to access the value of the object dynamically. We can change the value of the property dynamically.
//If we know ahead of time, what property we are going to access, use .notataion. eg: person.name = '';

//--------------------this keyword in JS------------------------------------
// const person = {
//   name: "Mosh",
//   walk() {
//     console.log(this);
//   }
// };
// person.walk(); //ouput in console: {name: "Mosh", walk: ƒ}

//now we have 'person' object with 'walk()' method. 'this' keyword in JS doesn't behave like in other languages like C# and java where, 'this' keyword always returns a reference to the current object.
