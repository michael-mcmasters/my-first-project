Youtube video that @ timestamps are referencing: https://www.youtube.com/watch?v=Ke90Tje7VS0&t=2256s
Second video: https://www.youtube.com/watch?v=dGcsHMXbSOA.
Your local web page: http://localhost:3000/
CodeAcademy: GeneralMotersToolKit@gmail.com

// *** Other tidbits ***
- React is more popular than Angular and Vue (way more jobs avaible). All three are for front-end development and communicate with Node.js, which is back-end.
- The default value type for variables is undefined, not null.
- Functions are objects. And have their own methods they can call. MyFunction.MyMethod().
- There are no floats or ints. All numbers are of the value type, number.
- C# is a static language. Javascript is a dynamic language. Dynamic means variable types can change to another type at run-time (a string can change into a number).
- If there is no statement after return on the same line, javascript will automatically assume there is a semicolon there and the code on the next line will not run. To change this, you need to add parentheses, put the code inside, and then add a semicolon after the last parenthesis. (Think C# tuples.) The Prettier extension does this automatically if you put <div></div> around two html codes. It's also a good idea to change div to <React.Fragment></React.Fragment>.

- To create a pure html website:
// Right click, create a new text document, name it index.html, right click it, open with Chrome.
// Chrome should open up. Whatever you write in this document should appear in the opened Chrome tab.
// To see changes in Chrome, you have to refresh the tab.








// *** Terminal Commands ***
// If terminal won't let you make commands (because it is set to a Node teriminal), just do control + shift + ` to reset it and open a regular terminal.

// Create React Project
// (also installs React and 3rd party libraries from Node if they aren't installed already.)
// (automatically creates git repository local to the computer.)
npx create-react-app project-name

// Open project
// (cd into folder)
npm start

// View webpage in browser
npm start
// If it says something is already running at port 3000, press n (for no) and go to that url
http://localhost:3000/







// *** Pure Javascript ***      (.jsx notes are at bottom of file)

// Good source for syntax: https://developer.mozilla.org/en-US/docs/Web/JavaScript/A_re-introduction_to_JavaScript

// this
// this returns the object that it is inside of.
myFunction() { console.log(this); }
// If the above function is called with an object reference
obj.myFunction()
// it will return with obj.
// If the above function is called without an object reference
myfunction()
// It will return undefined (if javascript strict mode is enabled (on by default for React))
// Or will return window (if strict mode is off).
// This is true even if function is inside of a class.
-------
// How to fix? Arrow functions.
// When an arrow function is called, 'this' isn't rebinded to the object being called. It is inherited from what is calling the function.
// It's as simple as changing the function from this
myfunction()
// to this
myfunction = () => { }
// Note, 'this' returns the class, because render() is being called as class.render() and not as render().
// Source: @1:07:47.

// Declare object
// (variables inside are called properties (name and age).)
let person = {
	name: "Michael",
	age: 30
};
-------

// Declare empty object
let person = new Person();
// or
let person = {};

// Declare object with bracket notation
// Here, variable already exists.
// We initialize myObject, and with bracket notation, give it variable as a property, and set that property equal to 4.
var variable = 1;
let myObject = {[variable]: 4};

// Access an object's property (dot notation)
person.name = "Petah";
// Or use bracket notation if you won't know the proptery until run-time:
person["name"] = "Petah";

// Object Destructuring
// Taking properties out of a variable so that you don't have to reference the variable each time.
// For example, instead of typing this.props over and over like seen here
{this.props.onDelete}
// You can deconstruct it like this
const { onDelete, somethingElse, anotherSomethingElse } = this.props;
// and now that same line of code can be written simply as
{onDelete}
// Source: @2:09:52 or Counters.jsx.

// Object Destructuring with a method
// Here you call the method and pass myObject
myMethod(myObject);
// but instead of taking in myObject, myMethod only takes in a property of myObject.
function myMethod(property) { }
// Source: 2:08:27 or navbar.jsx.


// Change value of property
// Declare function with id as parameters.
const handleIncreate = (id) => { }
// Copy the array to a new array using the spread operator
const copy = [...oldArray];
// 
const index = oldArray.indexOf(oldArray[id]);
copy[index] = { ...oldArray[id] };
copy[index].number++;
setOldArray(() => copy);

// Spread Operator (...)
// Copies an existing array to a new array.
let copyArray = [...oldArray];
// Note that the array's properties are passed by reference and both arrays share them. So
oldArray[0].number = 4;
copyArray[0].number = 27;
debug.log(oldArray[0].number)
// Will print 27. It's the exact number for both arrays.
// To fix this, you need to also copy the property with another spread operator.
copyArray[0] = { ... copyArray[0] };

// Spread Operator (...)
const copiedCounters = [...this.state.counters];
// The array counters is copied to a new array, copiedCounters.
// But the properties are passed by reference, not value. So counters[0] is exactly the same as copiedCounters[0]. They are referencing the same variable.
// All this does is give you a second pointer to reference properties (I think).
// This is useful when using React's setState(). Since you need to pass a copy of a variable and not the variable itself, you use the spread operator to copy it and then modify that.
// -------
// If you wanted to increment a value in copiedCounters, like copiedCounters[0], without incrementing counters[0], you have to use the spread operator again.
copiedCounters[0] = { ... counters[0] };
// Now you can modify copiedCounters[0] without changing counters[0].
// Source: @1:51:43.

// Constructor
// Just create a method named constructor with no keywords before it or anything.
constructor() {}
// If the class inherits from another class, you have to call the parent class's constructor at the beginning of this constructor. You can do so by calling super().
constructor() { super(); // rest of code }
// If this is in React and you want to use props, make sure to pass props in as an argument, and to pass it in super()
constructor(props) { super(props); // rest of code }

// Print
console.log();
// will print in console of web browser. Right click web page, inspect element, and click console to view.

// Run a Javascript class
// In a .html document, add <script></script>. And then put src=(name of Javascript class) in the first carrots.
<script src="index.js"></script>

// Declare variable local to block (same way var keyword works in C#) (best practice)
let name = "Michael";

// Declare variable local to function (bad practice)
// Using var changes the scope to the function. Name is available anywhere in the function, even if it is declared inside another set of brackets (such as in a for-loop).
var name = "Michael";

// Declare global variable
// let is like saying private (only accessible in this class).
// var is like saying public (accessible from every class).
// var will allow the variable to be used in the "window" which is an object you can call in the browser console.
window.name;
// prints "Michael"

// Declare global variable as an object
let myNumber = function(width, height) { return width * height; }
// Now function is a method inside of the object, myNumber. And can be called with
myNumber(width, height);
// Source example: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/function.

// Declare empty array
let selectedColors = [];

// Declare array with values
let selectedColors = ["red", "blue"];
// You do not need to define an array's size when declaring. They are dynamic.
selectedColors[2] = "green";
// Even though the array only goes to index 0 and 1, that will automatically add a 3rd index.
selectedColors[5] = "yellow";
// 3 and 4 are now automatically added into the array, and are set to undefined.
// Arrays are also dynamic. Meaning not every value needs to be of the same type.
selectedColors[6] = 2;
selectedColors[7] = false;
// Now the array has strings, a number, and a boolean.
// Javascript automatically treats arrays as objects, and gives them the same methods/properties (selectedColors.length, selectedColors.filter, etc).
// (Use console.log(selectedColors) and the browser console will print all of the values).

// Declare constant
const name = "Michael";

// Create function
function greet(name, lastName) {
	console.log("Hello " + name + " " + lastName);
}
// All functions in Javascript are objects. Because they're objects, they can also have methods inside of them.
// For example, all functions have a default method such as this one.
greet.bind().
// Note that it's called a function if it's outside of a class or object. And called a method if it's inside a function or class.

// Create function with return type
function square(number) {
	return number * number;
}

// Create Anonymous Function (lambda)
// The important thing to remember is that, with the arrow =>, what's before is the argument and what's after is the function that will return.
// Function with two arguments
sum = (a, b) => a + b;
// Function with one argument (do not need parentheses)
isPositive = number => number >= 0;
// Function with no argument (blank parentheses)
randomNumber = () => Math.random;
// Function being sent as an argument
myObject.myFunction((a) => Math.random)
// Long function
sum = (a, b) => {
	a++;
	return a + b;
}


// Call a function
// To call this function greet(name, lastName), use
greet("Jon", "Smith");
// Prints "Hello Jon Smith."
// Call function without passing in all arguments.
greet("Jon");
// Prints "Hello Jon Undefined."

// === Operator
// Mean of equal value and equal type
x === 5   // prints true
x === "5" // prints false
// !== operator is the opposite.

// Conditions (truthy and falsey)
// Strings and numbers can be used in conditions. When true they are truthy, and when false, they are falsey.
// Strings are only falsey if they have 0 characters.
// Numbers are only falsey if they are equal to 0.
true && false     // returns false
true && 'hi'      // returns 'hi' (true)
true && 'hi' && 1 // returns 1 (true)
true && 0         // returns 0 (false)
true and ''       // returns '' (false)
-------
// You can use this code for Conditional Rendering (jsx).
// Here, "My Text" will only show if myArray has a length of 0.
<div> {this.myArray.length === 0 && "My Text"} </div>













// *** Node.js ***
- Node.js: Javascript was meant to only run in browsers. Browsers have their own engines to run it (Chrome has v8, Firefox has SpiderMonkey). Node.js is a wrapper that takes the v8 engine out of the browser, and allows you to run applications anywhere with Javascript.
- NPM (Node Package Manager): Node.js allows you to install 3rd party libraries.













// *** Browser Console ***

// typeof
typeof myVariable
// console will print the data type of a variable (string, number, etc).

// Debugging
// Using the React Developer Tools extension for Chrome
// Right click, inspect element, up top where it says "elements, console, sources" etc.
// Click the two right arrows and click components. Now you can view your React components.











// *** React ***

// Folders installed when projected started
// src is where most of our files are going to be located. Convention is to create a subfolder in here named "components" for our components.
// node-modules: Where frameworks/packages are installed (such as Bootsrap and Babble).
// We never really need to interact with this folder.
// package-lock.json: Basically manifest.json in Unity. It holds the package dependencies and their versions.
// package.json: Holds scripts that run when using terminal commands like npm start or npm build. Also holds React version dependencies.
// .gitignore: You know this one, but it's important to know that it ignores the node_modules folder. Because creating/cloning a React project should download those automatically.

// Hierarchy
// Hierarchy in backwards order: sub component -> parent component -> app.js -> index.js -> index.html.
// app.js: The main parent component that holds all of our components and their child components. They all report back to here.
// index.js: imports app.js, takes all of its components, compiles and converts their .jsx code to regular HTML and pure Javascript. Then sends it to index.html with document.getElementByID('root').
// index.html: Takes all code that was converted to html and puts it under a single <div> ... <div id="root"></div> ... Our entire website is under this <div>.

- Component: A React app is made up of components. Each component is a Javascript class which has a state and a render method.
- State: The data we want to show when the component is rendered.
- Render method: How the component should appear to the user. Uses a React Element (virtual DOM) which then updates the Real DOM (DOM element). React elements are faster because they only update the DOM element when it is needed. React elements are nice because updating the DOM with vanilla Javascript is frustrating (I guess?).
- DOM Element: Programming interface for HTML and XML documents (I suppose this is the file that the code is on).
- jsx: A weird syntax of Javascript and XML.
- Babble: Compiles jsx code to Javascript so the browser can understand it.
- Bootstrap: A CSS library that gives our application a modern look and feel: You have to download this in the terminal with "npm i bootstrap."
The NavBar came from Bootstrap. At this URL under Brand https://getbootstrap.com/docs/4.5/components/navbar/

// Was told I will come across these often.
Gulp: 
Webpack: 
Parcel: 

Sass: A tool to make CSS easier. You can modularize it, use variables, and re-use code.











// *** HTML ***

// To create a pure html website:
// Right click, create a new text document. Name it index.html. Right click it, open with Chrome.
// Chrome should open up. Whatever you write in this document should appear in the opened Chrome tab.
// To see changes in Chrome, you have to refresh the tab.

// Responsive Website
// Means the computer can run reponsively on all type of hardware. Computers, tablets and mobile phones.

// URL
// Stands for Universal Resource Locator.

// Structure
<html>
<head>
<meta>
<title>
<body>

// <head>
// Holds information about the website, including CSS and Javascript files.

// <body>
// The main content. Where you can create headlines, bold text, make lists and even tables. Things you can do in a word document.

// <meta>
// This line allows computer to recognize unicode and compile it to bytes.
<meta charset="utf-8">
// This line makes sure the website is responsive to all devices (responsive website).
// width makes sure the website width is the same as the device's width. initial-scale-1 makes sure the website isn't zoomed in or out.
<meta name="viewport" content="width=device-width, initial-scale-1" />

// <title>
// The name of the tab. Each webpage can have its own title.

// <h1> - <h6>
// Headline or header tag.
// <h1> being the largest and <h6> being the smallest.
// <h2> or one of the higher numbers are good for subtitles, under <h1>.

// <p>
// Paragraph tag
// Automatically puts space between two bodies of text.

// <br />
// Break: If you want to end a line, but don't want space between the two bodies of text.
// Or if you do want space, you can type it for as many lines of space you want.
// Typing it 3 times will give you 2 lines of space between the two bodies of text.
<br /><br /><br />
// Notice this tag closes itself in the intitializer. You don't need a closing </br> tag.
// These are called Void Elements (void meaning empty because they have no content).
// With HTML5 you can also just write <br> and it will still be fine. But VSCode seems to add the slash for you anyway.

// Style Tags <b> <i> <u> <em> <strong>
// Edits the style of the text (bold, italicized, underlined).
// <em> just italicizes and <strong> just makes the text bold. The same as <i> and <b>

// <hr />
// Draws a line across the entire line.
// Is also a void element (doesn't need closing bracket).

// <a>
// Hyperlink text to a URL.
// This will take you to Google.
<a href="https://www.google.com">My Text Here</a>
// This tag also controls if a link opens in a new tab or not. By default it does not.
// If you want a link to open in a new tab, use target="_blank"
<a href="https://www.google.com" target="_blank">My Text Here</a>

// <img>
// Add an image using a URL from online.
<img src="https://via.placeholder.com/600x300" />
// You can also link the file from your computer if you downloaded it.
<img src="MyPicture.png"
// Add a border around an image by using border and then the width you want.
<img src="MyPicture.png" border="10">

// <button>
// Makes a button

// Lists <ul> and <ol>
// <ul>: Unordered list which uses bullets.
// <ol>: Ordered list which uses numbers.
// You can also nest lists inside of lists.

// <table>
// use <tr> to create a row
// use <th> for the header row. Each item in this row will be bold.
// use <td> for each item in the following rows. They will not be bold.
// To add borders, padding and spacing, use this and change the numbers.
<table border="10" cellpadding="10" cellspacing="0">

// Load CSS into html file.
// <link>
// Lets us create a link reference to the CSS file. This method (called External CSS) is the best way to do CSS and html.
// Make sure to use this element in <head>
<head> <link rel="stylesheet" href="style.css" /> </head>
// The rel attribute stands for relationship. Meaning what is the relationship between this file and the html file? In this case, CSS is a stylesheet.
// href lets you link to a local folder. Or you can use a URL to link to someone elses file online.
-------
// <style>
// This element lets you write CSS directly in the html. Exactly as you would in a CSS file with a selector and brackets and everything.
// This is bad because the code is not re-usable and it's not a good idea to mix html and css into the same file. Just to stay organized (MVC and all that).
<style> .blue {color: blue; } </style>
-------
// Inline: 
// The same as using <style>, except instead of using it as a tag, you use it as an attribute and write the CSS inside of that tag.
// <h1 style="color: blue;">
// This is a bad idea for the same reason using <style> is a bad idea. And it may make the page load even slower.

// <span>
// Puts text, buttons, etc, on same line. "spans" across the line.












// *** CSS ***

// Used for presentation of content. While html is used for what that content is.

// Change color by name
color: green;

// Change color hexidecimal
color: #0x2AF3;
// Make transparent by adding two more values at the end (look it up online).

// Change color rgb
color: rgb(255, 255, 0);
// Make transparent by using rgba and adding a 4th value between 0 and 1.
// With 0 being the most transparent and 1 being not transparent, and any number in-between.
color: rgba(255, 255, 0, 0.5);

// Change color hsl
// hsl (hue, saturation, light):
// Hue (0 - 360): Which color you're using.
// Saturation (0, 100): How colorful this color is. 0% makes it black. 100% makes it really bright.
// Light (0, 100): 0% makes it entirely black, 100% makes it entirely white.
color: hsl(360, 100%, 50%);
// Make transparent by using hsla and adding a 4th value between 0 and 1.
// With 0 being the most transparent and 1 being not transparent, and any number in-between.
color: hsla(0, 100%, 50%, 0);

// Selector
// The name given to your CSS block. There are 4 main selector types: Everything Selector, Element, Class, and ID.
-------
// Everything Selector: Changes every element on the entire web page. Used to select defaults, such as font or font size.
* {}
-------
// Element: Called element because it's used to edit an html element. For example, writing h1 will change any text within the <h1> brackets in your html.
// This is the lowest level selector. If text is told to use this selector and another selector, it will use that selector over this one.
h1 {}
-------
// Class: Begins with a period.
// This is the second lowest selector. It can be overrideen by the ID selector.
.myClass {}
-------
// ID: Begins with a # symbol. IDs must be unique across entire webpage.
#myClass {}
-------
// Classes are used more often than IDs because html elements can only call one ID, but can call multiple classes.
<h1 id="myClass">
// vs
<h1 class="myClass" class="myOtherClass">
// However an html elemenent can hold one ID and multiple classes.

// Combining Selectors
// When you combine a selector, an html element must call both selectors in order for the styling to be applied.
// Note there are no spaces between the names. The . here represents that large-header is a class (see above notes).
h1.large-header {}
// Now the html element must apply both of them.
<h1 class="large-header">
// Note that h1 is an element selector, and so h1 and class are calling both CSS elements.
-------
// Here is a better example. This selector has 1 id and 2 classes.
#big-blue.large-blue {}
// The html element must call all 3.
<h2 id="big-blue" class="large blue">

// Combining Selectors: Ancestor of an element (changing children elements)
// if you have html code <div> <p>. This will change any element <p> that is a child of <div>. Even if there are children in-between.
// To do this, put a space between the selectors.
div p {}
-------
// If you had an hrml tag and then a child tag underneath it:
<header class="main-header"> 	<h1 class="brown">
// This selector will change all child <h1> elements with the class="brown",
// as long as they are children of a tag <header> that uses a class="main-header".
header.main-header h1.brown {}

// Combining Selectors: Block of code with two names
// If you have two blocks of CSS code with the same exact values. You can combine into one block using a comma.
.big, .large {}
// Now html can call upon this by using either name.
<h1 class="big">
// or
<h1 class="large">

// Selector Overriding
// If your html is told to use two different selectors, one will override the other.
// ID is the most dominant, class is the second most dominant, and element is the weakest. It will never override anything.
// If there are multiple selectors, the one with the most IDs will override the other.
// If they have the same number if IDs, the one with the most classes will override the other.
// If that is also equal, the one with the most elements overrides.
// And if that is equal, whichever is last overrides.
// For example, #id.class.class2 will always override .class.class2.class3 because it has one id.
// Inline CSS directly in the html file overrides everything.














// *** jsx ***

// Import React (in index.js)
// (React is an object imported from the 'react' module. It is needed to compile jsx into Javascript.)
import React from "react";

// Import ReactDOM (in index.js)
// (Import this to send jsx code that was converted to virtual DOM to the real DOM)
import ReactDOM from "react-dom";

// Import Bootsrap (in index.js)
// (Make sure to install Bootcamp in the terminal with "npm i bootstrap" or else the commands won't work.)
import "bootstrap/dist/css/bootsrap.css;

// Import .jsx class (in index.js)
// (.jsx class is in components folder I created, which is why you write /.components/myClass).
import Counter from './components/myClass';

// Import React and React Component (in .jsx)
// (can also use imrc snippet)
import React, { Component } from "react";

// CSS Styling
// Say we have a js component named tweet.js.
// in App.cs, at the bottom of the page, create a class with the same name.
.tweet {
  border: 2px solid black;
}
// (I assume if the js tweet class is in a folder, you have to type something like .components/tweet {} but I'm not sure).
// To apply the styling, go to tweet.js and import the .css file
import "./App.css";
// then apply it in the necessary carrots <>
<div className="tweet"></div>
// Note: index.js has its own .css file, index.css.
// I'm not completely sure but I think the rest of our classes can go into App.css because it holds those classes as a continer (via importing).

// Hooks
// Functions automatically called by React if you write them (like Start() and Awake in Monobehaviour)
// The below functions are called in the order they are typed. There are more, but these are the most commonly used.
//
// Mount: When an instance of a component is created and it is added to the DOM for the first time.
// constructor(), render() (all children components are rendered here too), componentDidMount().
//
// Update: When the state or the props of the component are changed. 
// render(), componentDidUpdate().
//
// Unmount: When a component is removed from the DOM (such as when destroying an instance of a class).
// componentWillUnmount().
//
// Source: @2:10:53.

// Mount Hook
// Contructor(): Need to pass props in if you want to use it. Can't use setState().
// render(): Is called for the component and then all children components before componentDidMount().
// componentDidMount(): Good place for Ajax calls (apis?) and for using setState() if needed.
// Source: @ 2:12:33.

// Update Hook
// componentDidUpdate(): Can take in two arguments. prevProps and prevState.
// You can use these to determine things such as check if a variable has changed by a lot (prevProps.variable - props.variable)
// and if so, make another Ajax call.
// Source: @2:18:11.

// Unmount
// componentWillUnmount(): Called right before a component class instance is destroyed (removed from DOM).
// It's a good place to clean up any variable to prevent memory leaks or whatever you need to do.
// @ Source: @2:22:33.

// Hook
// Hooks are React functions that let you "hook" into React features from function components (kind of like Awake(), Start() in MonoBehaviour).
// 

// useState() Hook
// Returns an array. Common pattern is to use object destructuring to seperate array's properties.
const [isRed, setRed] = useState(false);
// Can only use them in function components Can not use them in class components.
// Must always be at top of component function (such as App()).
// Must always be called in the same order every time. Which means no if-conditions that only run one of them sometimes. Can't be nested in loops. Can't be in helper functions.
// -------
// Every time the component updates, useState() is called. If you're hardcoding a value this is fine (such as useState(4)).
// But if you have complex math in there, it is better to use an arrow function, which will set it to only run once and then never again.
// This is because () is an unnamed function that is calling the function after the =>. I'm not sure why that makes it only run once though.
const [count, setCount] = useState(() => {
  console.log('run function');
  return 4;
})
// -------
// Putting an object in useState() is a little weird. See this video: https://www.youtube.com/watch?v=O6P86uwfdR0 @ 11:15.
// It is better to not use objects. And instead just use a bunch of stand alone variables.

// Constructor with Props
// If you want to use this.props.something in the constructor, you have to put it as an argument.
constructor(props)
// Also make sure to pass it in super() if you need to use that
super(props);
// super() needs to be called when your class inherits from another class. It calls the parent class's constructor (see note in javescript category).
// Also note that setState() can't be called in the construtor, because the component hasn't been rendered and placed in the DOM yet.
// Source: @2:12:44.

// Pass Method By Reference (Event Handler)
// Here, onClick is called when the button is pressed (onClick is a DOM method).
<button onClick ="">
// Make onClick call a function instead of a string.
<button onClick={this.functionName}>
// Note that you don't use parentheses for the function! This is because we are passing a reference to the function object and not actually calling the object. jsx will call the function using the reference when onClick is called. If we did use parentheses and called the object here, the function would be called every time render() is called instead of when the button were pressed.
// Source: https://www.youtube.com/watch?v=Ke90Tje7VS0&lc=UgxG7QMlrAZy_u9RLt54AaABAg @1:02:14.
// Source2: https://stackoverflow.com/questions/48259077/calling-a-javascript-function-in-jsx-why-does-calling-a-function-without-the
// -------
// Passing a Method Reference with arguments
// Without arguments
<button onClick={this.functionName}>
// With arguments, use an arrow function (lambda?)
<button onClick={ () => this.functionName(myVariable)}>
// The function being called should look like this, where myVariable is the parameter.
functionName = myVariable => { }
// Source: @1:13:03

// When you write html in jsx, it converts to pure Javascript. Meaning that
<li>Jake</li>
// turns into
React.createElement('li', null, 'Jake');

// Attributes
// src, className, style are all attributes. Found in html arrows <>.
// Here, src="" is the attribute.
<span src="">MyText</span>
// You fill in the quotations. Or replace quotations with jsx code.
<span src={this.MyProperty}>MyText</span>

// Apply styling using classes (className)
// (Standard and most performant way to do attributes.)
// (These are Bootstrap classes. Install using "npm i bootstrap" in the terminal and then import it to index.js. Look at its documentation to see what the classes do).
<span className="badge badge-primary m-2">MyText</span>
// badge, badge-primary, and m-2 are the class names providing the styling.
// Here's another example with a button
<button className="btn btn-secondary btn-sm">MyButtonText</button>

// Apply styling using attributes (with an object)
// First create the property/object
styles = {
	fontSize: 10
	fontWeight: 'bold'
};
// Then apply the object to the text
<span style={this.styles}>MyText</span>

// Apply styling using attributes (with an object's property)
state = {
	count: 0,
	imageUrl: "https://picsum.photos/200"
};
<img src={this.state.imageUrl} alt="" />

// Apply styling using attributes (with no object)
// (fontSize seems to be a property inside an anonymous object. If that's even a thing. Make sure to put brackets inside of the brackets for this to work.)
<span style={{ fontSize: 30 }}>MyText</span>


// DOM Event (React event. React attribute)
// onClick is a DOM event.
<button onClick={}></button>


// For-Loop
// jsx doesn't have for-loops. So we do it in this "hacky" way.
<ul>{this.arrayValues.map(arrayValue => <li>{arrayValue}</li>)}</ul>
// arrayValues.map() iterates over arrayValues and creates a new array with the same values.
// Kind of like doing for (i < arrayValues.Length){ newArray = arrayValues[i]; }
// <li>{arrayValue}</li> is a jsx that compiles to pure javascript function.
// Because arrayValues.map() is called for every index for arrayValues, it loops, calling the function that many times.
-------
// So that React can sync the virtual Dom and real Dom, each item in a list needs a key. So add key={arrayValues}.
<ul>{this.arrayValues.map(arrayValue => <li key={arrayValues}>{arrayValue}</li>)}</ul>
-------
// This article explains it better: https://thinkster.io/tutorials/iterating-and-rendering-loops-in-react ... Or watch at 52.01: https://www.youtube.com/watch?v=Ke90Tje7VS0&t=981s.


// If Conditions (Conditional Rendering)
// Strings and numbers can be used in conditions. When true they are truthy, and when false, they are falsey.
// Strings are only falsey if they have 0 characters.
// Numbers are only falsey if they are equal to 0.
true && false     // returns false
true && 'hi'      // returns 'hi' (true)
true && 'hi' && 1 // returns 1 (true)
true && 0         // returns 0 (false)
true and ''       // returns '' (false)
-------
// You can use this code for Conditional Rendering (jsx).
// Here, "My Text" will only show if myArray has a length of 0.
<div> {this.myArray.length === 0 && "My Text"} </div>

// State()
// Function is only called once when instance of component is created. So like Start() in Unity.

// setState()
// change a variable and then pass it into setState(class: variable) so that React knows to update the DOM.
setState(MyClass: myVariable);
// If the property has the same name as the class, you can just pass in the property.
setState( myVariable );
// React will check each setState() method and update the DOM once in one tick. Kind of like Unity's physics ticks.
// (Remember the function needs to be an arrow function so that 'this' refers to the class and is not undefined.)
incrementNumber = () => {
this.setState({ this.myNumber + 1 });
}
// Src: @1:08:53

// Truth (single source of truth) (state)
// When what a component is showing doesn't line up with its state.

// Controlled Component
// A component that does not have its own state.
// It's parent class holds the variables and functions it needs. And it has to call them using props.
// The only methods it has is for rendering.

// Stateless Functional Component
// Note: Not sure if this exists anymore in React since they no longer use classes. My tutorial is old.
// A component that has no state or methods. It only exists to render, and gets all of its data from props.
// You can get rid of the render() method and change it to something kind of like a constructor (but not a constructor.)
// const MyClass = (props) => { return (); }
// For this, you don't have to use 'this' when passing methods. So instead of
{this.props.totalCounters}
// you can use
{props.totalCounters}
// Also change the import from importing React and React Component, to only importing React (so you don't get a console warning that 'component' is never used).
import React from "react";
// Source: navbar.jsx. Or @2:06:22.

// Props
// Used to grab data from the parent class that is "holding" all of the child components. It also holds the variables. This function gets that variable data.
// Every component has this. So say we have Counters and counter.
// In Counters, counter is being used as an html name
<Counter key={counter.id} value={counter.value}></Counter>
// Prop is the properties in this line of code. So value is a property. id is actually ignored because it's a unique indentifier for each Counter class.
// Source: @1:22:10

// Props Children
// Grabs properties from html tags that are inbetween the tags with this class's name.
// So if Counters class has this:
<Counter key={counter.id} value={counter.value}> <h4> TITLE </h4> </Counter>
// Counter class can get it by using
this.props.children

// Difference between Props and State
// State is local to the component. "Parent" class and classes under the compnent can not access its state.
// Props are for the component to access data from the "parent" class. Props are read only.








