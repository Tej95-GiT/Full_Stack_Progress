// 1.Javascript introduction

console.log("Hello, World!");
// console.log("Wassup my ninja!");

// window.alert("WARNING: This is an Alert!");

// This is a comment

/* This is a comment
multiline
*/

document.getElementById("myH1").textContent = "Wassup my NinJA!";
document.getElementById("myP").textContent = "lorem laba labab lab abalbl abb lbababa albanuia ag ah;ag ajg;";

// 2. Variables = A container that stores the value.
//                Behaves as if it were the value it contains

//      1. declaration  let x;
//      2.assignment     x = 10;

let x;
x = 123;
console.log(x);

let y = 100;
console.log(y);

let age = 20
console.log(typeof age);
console.log(`You are ${age} years old!`);
console.log(`Your bank balance is ${y}`);

//      Strings     
//                  let name = "Soham";

let name = "Soham is NengJa man";
let favColor = "BombaCluat!";
console.log(typeof name);
console.log(`Who is Ningja man? = ${name}`);
console.log(`He's favorite color is ${favColor}`);

//      Booleans    let online = true;

let boolean = true;
console.log(typeof boolean);
console.log(`Boolean = ${boolean}`);

let forSale = false;
let forRent = true;

console.log(typeof forSale);
console.log(`Is he for sale? - ${forSale}`);
console.log(`Is he for rent? - ${forRent}`);

//printing elements on the screen

let firstName = "Soham";
let bodyCount = 0;
let doubleChin = true;

document.getElementById("p1").textContent = name;
document.getElementById("p2").textContent = `He's Body count is ${bodyCount}`;
document.getElementById("p3").textContent = `He's double chin is: ${doubleChin}`;

// 3. Arithmetic operators = operands (value, variable, etc.)
//      operators( + - * / % **)
//      ex. 11 = x + 5;

let students = 30;

students = students + 10;
//students = students - 10;
//students = students * 10;
//students = students / 10;
//extraStudents = students % 1;
//students = students ** 10;

// Argumented Assignment Operator
//students += 3;
//students -= 1;
//students *= 3;
//students /= 3;
//students %= 2;
students **= 2;

// Increment and Decrement Operators
//students++; // Increment
students--;     // Decrement

console.log(students);


// Operators precedence
/*      1. parentheses ()
        2. exponents 
        3. multiplications & Division & Modulus
        4. Addition & Subtraction
 () > ** > * / % > + - > =
*/

let result = 1 + 2 * 3 + 4 ** 2;
let result1 = 6 / 2 ** (2 + 5);

console.log(result);
console.log(result1);

// ----------------------------------------------------------------

// 4. Accept the user input
//      How to accept the user input
/*      1. Easy way: window.prompt
        2. Professional way: HTML textbox
*/

//      1.Easy way: window.prompt

let userIpwin;

userIpwin = window.prompt("Whats Your Username?");
console.log(userIpwin);

//      2. Professional way: HTML textbox

let usertext;

document.getElementById("txtSubmit").onclick = function() {
    usertext = document.getElementById("myText").value;
    document.getElementById("myH1IP").textContent = `Welcome ${usertext}`;
}

/*  5. Type Conversion = change the type of the value to another (string, number, boolean)
        1. Number
        2. String
        3. Boolean
*/

let age1 = window.prompt("How old are you?");
age1 = Number(age1);
age1+=1;

console.log(age1, typeof age1);

//

let xx = "Bhakarvadi";
let yy = "Bhakarvadi";
let zz = "Bhakarvadi";

xx = Number(xx);
yy = String(yy);
zz = Boolean(zz);

console.log(xx, typeof xx);
console.log(yy, typeof yy);
console.log(zz, typeof zz);

// 6. Constants = a variable that cant be changed

const PI = 3.1416;
let radius;
let circumference;

//radius = window.prompt("Enter the radius");


document.getElementById("constSubmit").onclick = function() {
    radius = document.getElementById("myIPConst").value;
    radius = Number(radius);
    circumference = 2 * PI * radius;
    document.getElementById("pConst").textContent = `Circumference: ${circumference}cm`;
}

// 7. COUNTER PROGRAM 


const decreaseBtn = document.getElementById("decreaseBtn");
const resetBtn = document.getElementById("resetBtn");
const increaseBtn = document.getElementById("increaseBtn");
const countLabel = document.getElementById("countLabel");
let count = 0;

increaseBtn.onclick = function (){
    count++;
    countLabel.textContent = count; 
}

decreaseBtn.onclick = function (){
    count--;
    countLabel.textContent = count;
}

resetBtn.onclick = function (){
    count = 0;
    countLabel.textContent = count;
}

/* 8. Math = built-in object that provides a 
                collection of properties of methods
*/

console.log(Math.PI);
console.log(Math.E);

let q = 3.21;
let w = 2.99;
let r;

//r = Math.round(q);    // rounds the number
//r = Math.floor(w);    // rounds down the number
//r = Math.ceil(q);     // ceil opposite of floor
//r = Math.trunc(w);    // truncates elmenates the decimal portion
//r = Math.pow(q, 2);   // Power of numbers      
//r = Math.sqrt(w);     // square root 
//r = Math.log(q);        // Natural logarithm
//r = Math.sin(q);    // Sin
//r = Math.cos(q);    // Cos
//r = Math.tan(q);    // tan
//r = Math.abs(q);    // Absolute value basically elemenating the negative sign
//r = Math.sign(w);   // Sign of the number Positive or Negative or Zero

//let max = Math.max(q, w, r);    // Maximum value from the variables
// console/log(Math);

let min = Math.min(q, w, r); // Minimum value from the variables



console.log(r);
//console.log(r);

// 9.Random Number Generator
const min1 = 50;
const max1 = 100;

let randomNum = Math.floor(Math.random() * (max1 - min1)) + min1;
console.log(randomNum);

const rollBtn = document.getElementById("rollBtn");
const rollLabel = document.getElementById("rollLabel");

const minr = 1;
const maxr = 6;

rollBtn.onclick = function() {
    rollLabel.textContent = Math.floor(Math.random() * maxr) + minr;
}

// 10. If Statements = conditional statements that are used
//                     to perform different actions based on
//                     different conditions
//                      if the condition is true then do this action and else do that action 
//                     1. if
//                     2. if-else
//                     3. if-else-if
//                     4. ternary operator

let timeif = 9;

if(timeif < 12){
    console.log("Good Morning!");
}
else{
    console.log("Good Afternoon!");
}

let isStudent = false;
if(isStudent){
    console.log("You are a Student");
}
else{
    console.log("You are not a Student");
}

const ageIf = document.getElementById("ageIf");
const ifSubmit = document.getElementById("ifSubmit");
const ifP = document.getElementById("ifP");
let ageL = 18;
let hasLicense = false;

ifSubmit.onclick = function() {
ageL = ageIf.value;
ageL = Number(ageL);
if(ageL >= 18){
    ifP.textContent = `You are old enough to drive`;
    if(hasLicense){
        ifP.textContent = `You have a valid license`;
    }
    else{
        ifP.textContent = `You do not have a valid license`;
    }
}
else{
    ifP.textContent = `You are not old enough to drive`;
}
}

// 11. Checked Property = property that returns true or false
//                          if the element is checked or not from HTML checkbox or radio button

const checkbox = document.getElementById("checkbox");
const visaBtn = document.getElementById("visaBtn");
const masterBtn = document.getElementById("masterBtn");
const paypalBtn = document.getElementById("paypalBtn");
const ckdSubmit = document.getElementById("ckdSubmit");
const ckdP = document.getElementById("ckdP");
const ckdSub = document.getElementById("ckdSub");

ckdSubmit.onclick = function() {
    if(checkbox.checked){
        ckdSub.textContent = `You took the Subscription!`;
    }
    else{
        ckdSub.textContent = "You did not take the Subscription!";
    }

    if(visaBtn.checked){
        ckdP.textContent = `You paying with Visa!`;
    }
    else if(masterBtn.checked){
        ckdP.textContent = `You paying with MasterCard!`;
    }
    else if(paypalBtn.checked){
        ckdP.textContent = `You paying with PayPal!`;
    }
    else{
        ckdP.textContent = `Please select your payment method!`;
    }
}

// 12. Ternary operator = condition ? true : false
//                      if the condition is true then do this action
//                      if the condition is false then do that action
//                      a shortcut to if{} and else{} statements helps to assign a variable
//                      based on a condition
//                      condition ? codeIfTrue : codeIfFalse;
//                      syntax: variable = (condition) ? true : false;

let age2= 16;
let message = (age2 >= 18) ? `You are an Adult` : `You are a Minor`;
console.log(message);

let purchaseAmount = 125;
let discount = (purchaseAmount >= 100) ? 10 : 0;
console.log(`Your total is $${purchaseAmount - purchaseAmount * (discount/100)}`);


// 13. Switch Statements = used to perform different actions
//                         based on different conditions

let days = 6;

switch(days){
    case 1:
        console.log("It is Monday");
        break;
    case 2:
        console.log("It is Tuesday");
        break;
    case 3:
        console.log("It is Wednesday");
        break;
    case 4:
        console.log("It is Thursday");
        break;
    case 5:
        console.log("It is Friday");
        break;
    case 6:
        console.log("It is Saturday");
        break;
    case 7:
        console.log("It is Sunday");
        break;
    default:
        console.log(`${days} is not a valid day`);
        break;
}

//

let testScore = 75;
let grade;

switch(true){
    case testScore >= 90:
    grade = "A";
    break;
    case testScore >= 80:
    grade = "B";
    break;
    case testScore >= 70:
    grade = "C";
    break;
    case testScore >= 60:
    grade = "D";
    break;
    default :
    grade = "F";
    break;
}

console.log(`Your grade is ${grade}`);


// 14. String methods = allow you to manipulate and work with text (Strings)

let str = "JavaScript    ";

//str = str.toUpperCase();        // convert the string to uppercase
//str = str.toLowerCase();       // convert the string to lowercase
str = str.trim();       // remove white space from the string
console.log(str);       

console.log(str.charAt(0));             // return the character at the specified index
console.log(str.indexOf("S"));          // return the index of the specified character
console.log(str.lastIndexOf("i"));      // return the index of the specified character
console.log(str.length);                // return the length of the string

str = str.repeat(3);                     // repeat until the end of the string 
console.log(str);   

let strResult = str.startsWith("J");     // check if the string starts with the specified character
console.log(strResult);                 // return the boolean value

//strResult = str.endsWith(" ");        // check if the string ends with the specified character
//console.log(strResult.endsWith(" ")); // return the boolean value

let phoneNumber = "123-456-7890"
phoneNumber = phoneNumber.replaceAll("-", "");      // replace all "specifiedInput" with given input
console.log(phoneNumber);

phoneNumber = phoneNumber.padEnd(12, "+9");         // pad the string/number with given input
console.log(phoneNumber);

phoneNumber = phoneNumber.padStart(15, "+81");      // pad the string/number with given input
console.log(phoneNumber);

// 15. String Slicing = allow you to select parts of a string
//                      creating a substring from portion of the another string
//                      string.slice(start, end); // slice from start to end

const fullName = "Java Script";
let firstNames = fullName.slice(0, 4);      // strings from 0 to 4 
console.log(firstNames);

let lastName = fullName.slice(5, 11);       // strings from 5 to 11
console.log(lastName);



// 16. Method chaining = chaining multiple methods together
//                        it allows you to perform multiple actions
//                        on the same object    
//                          calling one method after another in one contiguous line of code

// ------------- NO METHOD CHAINING ----------------

let userId = window.prompt("Enter you user id: ");

// With error handling
try{
userId = userId.trim();
let letter = userId.charAt(0);
letter = letter.toUpperCase();
}
catch(error){
    console.error("Error: " + error);
}

try{
let extraChars = userId.slice(1);
extraChars = extraChars.toLowerCase();
userId = letter + extraChars;
}
catch(error){
    console.log(error);
}

console.log(userId);


// ------------- METHOD CHAINING --------------------

try{
let userId2 = window.prompt("Enter you user id2: ");
userId2 = userId2.trim().charAt(0).toUpperCase() + userId2.trim().slice(1).toLowerCase();
console.log(userId2);
}
catch(error){
    console.error("Error: " + error);
}

// 17. Logical Operators = used to combine conditional statements
//                         and return a single boolean value
//                          used to combine or manipulate boolean values (true and false)
//                          And = &&
//                          Or = ||
//                          Not = !

const temp = 20;

if(temp > 0  && temp <= 30){                        // && And Operator
    console.log("The Whether is GOOD");
}
else if(temp < -999 || temp <= 0){                  // || OR Operator 
    console.log("The Whether is Cold");
}
else{
    console.log("The Whether is BAD");
}

const isSunny = true;
if(!isSunny){                                       // ! Not Operator
    console.log("It is Cloudy weather");
}
else{
    console.log("It is Sunny");
}


// 18. Strict Equality 
//      =   assignment operator
//      ==  comparison operator ( compare if value is equal)
//      === strict equality operator    ( compare if value & datatype are equal)
//      !=  inequality operator 
//      !==  strict inequality operator

const strict = 5.789;

switch(strict){
//    case strict = 5.789:
//        console.log("It is Equal No Strict check");
//        break;
    case strict == "5.789":
        console.log("It is Equal without datatype Equality");
    break;
    case strict === "5.789":
        console.log("Data type is not Equal");
    break;
    case strict === 5.789:
        console.log("Data type is Equal");
    break;
    case strict != "5.789":
        console.log("It is Not Equal without strict Equality(!=)");
    break;
    case strict !== 5.789:
        console.log("It is Not Equal with strict Equality(!==)");
    break;
    default:
        console.log("The strict amount is 5.789");
    break;
}


// 19. While loop = repeat some code WHILE some condition is true

let i = 0;
while(i <= 10){
    console.log(i);
    i++;
}

// 20. Do-While loop = repeat some code at least once, then check the condition

let j = 20;
do{
    console.log(j);
    j++;
}while(j <= 30);


// 21. For loop = repeat some code a certain number of times

for(let f = 0; f <= 4; f++) {
    console.log(f);
    console.log("For loop");
}

for(let f = 0; f <= 10; f+=2) {
    console.log(f);
}

for(let f = 10; f > 0; f-=3) {
    if(f == 10){
        continue;
    }
    else{
        console.log(f);
    }
}

//              continue    =   Skips to the next iteration of the loop
//              break       =   breaks out of the loop


// 22. NUMBER GUESSING GAME
/*

const minNum = 50;
const maxNum = 100;
const answer = Math.floor(Math.random() * (maxNum - minNum + 1) + minNum);

let attempt = 0;
let guess;
let running = true;

while(running){
    guess = window.prompt(`Guess a number between ${minNum} and ${maxNum}`);
    guess = Number(guess);

    if(isNaN(guess)){
        alert(`Please enter a valid number between ${minNum} and ${maxNum}`);
    }
    else if(guess < minNum || guess > maxNum){
        alert(`Please enter a number between ${minNum} and ${maxNum}`);
    }
    else{
        attempt++;
        if(guess < answer){
            alert(`Too low!`);
        }
        else if(guess > answer){
            alert(`Too high!`);
        }
        else{
            window.alert(`CORRECT! The answer was ${answer}, It took you ${attempt} attempts`);
            running = false;
        }
    }
}

*/

// The code is Executed properly


// 23. Functions = A section of the code that can be reused
//                  multiple times
//                  A function is a block of code which only runs when it is called
//                  Declare code once, use it whenever you want.
//                  Call the function to execute that code.

function greetUser(name){                                       // Order of the parameters does matters
    console.log(`Gun Shots! Gun Shots!, Mr. ${name}!`);
}

greetUser("John Doe");
greetUser("Donald Trump");

function add(x, y){
    return x + y;
}
function subtract(x, y){
    return x - y;
}
function divide(x, y){
    return x / y;
}
function multiplie(x, y){
    return x * y;
}

console.log(add(5, 3));
console.log(subtract(5, 3));
console.log(divide(5, 3));
console.log(multiplie(5, 3));


function isEven(number){
    return number % 2 === 0 ? true : false;
}

console.log(`${isEven(4)}`, isEven(5));

function validEmail(email){
    return email.includes(`@`) ? true : false;
}

console.log(`${validEmail("johndoe@example.com")}`, validEmail("invalid_email"));
console.log(validEmail("BillGates.cum"))


// 24. Variable Scope = where a variable is recognized and accessible (local & global)

let globalVar = 10;                                     // global variable = This is a variable that can be used anywhere in the code

function1();

function function1(){
    let localVar = 20;                                   // local variable = This is a Local variable that can only be used within the specified block of code
    console.log(localVar);
}
function function2(){
    let localVar = 30;        
    console.log(localVar);                                // local variable
}
function function3(){
    console.log(globalVar);                               // global variable = Global variable can be used anywhere in the code
}

function3();



// 25. ARRAYS
//      Arrays are used to store multiple values in a single variable
//      Arrays are zero-indexed
//      Arrays can hold different data types

let fruits = ["Apple", "Orange", "Banana"];

console.log(fruits);
console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);

fruits[3] = "Coconuts";                     // Changing the value of an array At a particular index
console.log(fruits[3]);

fruits.push("Mango");                       // .push function called when the value is changed to the end of the array
//fruits.pop();                             // .pop function called when the value is removed from the array
fruits.unshift("Mango");                    // .unshift function called when the value is added to the beginning of the array
//fruits.shift();                           // .shift function called when the value is removed from the beginning of the array

let numOfFruits = fruits.length;             // .length function called when the length is needed
console.log(numOfFruits, fruits);

let indexF = fruits.indexOf("Mango");
console.log(indexF);

for(let i = 0; i < fruits.length; i++){
    console.log(fruits[i]);
}



// 26. Spread Operator
//      It allows an iterable such as an array or string to be expanded
//      in places where zero or more arguments are expected
//      It allows an iterable such as an array or string to be expanded
//      ...  allows an iterable such as an array or string to be expanded into separate elements(Unpack the element)

let numbers = [1, 2, 3, 4, 5];
let newNumbers = [...numbers, 6, 7, 8, 9, 10];      // ... Unpacks the element like a box 
console.log(newNumbers);

let maximum = Math.max(...numbers);                  // ... allows an iterable such as an array or string to be expanded
console.log(maximum);

let array = "Java Script";
let lettersA = [...array].join("-");                 // .join function called when the array is joined

console.log(lettersA);

let vegies = [...fruits, "Potato", "Tomato", "Cucumber"];

console.log(vegies);


// 27. Rest Parameter = (...rest) allows a function work with a variable number of arguments by building them into an array
//                         spread = Expands an array into seperate elements
//                          rest = bundles sperate elements into an array

function favFoods(...foods){
    console.log(foods);
}

const food1 = "Pizza";
const food2 = "Pasta";
const food3 = "Rice";
const food4 = "Barbeque Misal";
const food5 = "Samosa";
const food6 = "Biryani";

favFoods(food1, food2, food3, food4, food5, food6);



// RANDOM PASSWORD GENERATOR

function generatePasword(){

    let chars = "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let passwordLength = 12;
    let password = "";

    for(let i = 0; i < passwordLength; i++){

        let randomNumber = Math.floor(Math.random() * chars.length);

        password += chars.substring(randomNumber, randomNumber + 1);
    }
    return password;
}

console.log(generatePasword());

// The code is Executed properly

// 28. Call Back Functions  = A function that is passed as an argument to another function
//                              Used to handle asynchronous events/ operations:
//                              1. Reading files
//                              2. Saving files
//                              3. Running scripts
//                              4. Validating data
//                              5. Running animations
//                              6. Network requests
//                              7. Interacting with the DOM
//                              8. Interacting with the Database

//  `Hey When you're done, call this next!`

/*
hello(javaScript);

function hello(callback){
    console.log("Hello World!");
    callback();                         // callback(); is used to call the next function
}

function javaScript(callback){
    console.log("I'm learning JavaScript!");
    callback();
}   

function goodBye(){
    console.log("Good Bye World!");
}
*/

sum(displayConsole, 5, 6);

function sum(callback, a, b){
    let result = a + b;
    callback(result);
}

function displayConsole(result) {
    console.log(result);
}


// 29. forEach() =  The forEach() method calls a function (a callback function) once for each element in an array
//                   The callback function takes three arguments: the current element, the index, and the array itself
//                  Method used to iterate over the elements of an array and apply a specified function(callback) to each element

//      array.forEach(callback)
//      element, index, array

fruits.forEach(upperCase);
fruits.forEach(display1);

function display1(element){
    console.log(element);
}

function upperCase(element, index, array){
    array[index] = element.toUpperCase();
}



// 30. map() = The map() method creates a new array with the results of calling a function for every array element
//              The map() method calls the provided function once for each element in an array
//              The map() method does not execute the function for empty elements
//              The map() method does not change the original array

//    .map()  = accept a callback and applies that function to each element of the array, then returns a new array


const fruitsLower = fruits.map(fLowCase);           // .map() = accept a callback and applies that function to each element of the array

console.log(fruitsLower);                   // 

function fLowCase(element){      
    return element.toLowerCase();       // .map() method calls the provided function once for each element in an array
}



// 31. filter() = The filter() method creates a new array filled with elements that pass a test provided by a function
//                 The filter() method does not execute the function for empty elements
//                 The filter() method does not change the original array

//  .filter()   = Creates a new array by filtering out elements

let numbersFil = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
let evenNumsF = numbersFil.filter(isEvenF);
let oddNumF = numbersFil.filter(isOddF);
//console.log(evenNumsF);
console.log(oddNumF);
function isEvenF(element){
    return element % 2 === 0;
}

function isOddF(element){
    return element % 2 !== 0;
}


const agesFil = [16, 17, 18, 19, 20, 25, 35, 45, 55, 66, 88];
const adultsFil = agesFil.filter(isAdultFil);
const childFil = agesFil.filter(isChildFil);

console.log(adultsFil);

function isAdultFil(element) {
    return element >= 18;
}

function isChildFil(element) {
    return element < 18;
}



//  32. reduce() = The reduce() method executes a reducer function (that you provide) on each element of the array`
//                 The reduce() method returns a single value: the function's accumulated result
//                 The reduce() method does not execute the function for empty elements
//                 The reduce() method does not change the original array
//                  reduce the elements of an array to a single value

const maximumRed = agesFil.reduce(getMaxRed);
const minimumRed = agesFil.reduce(getMinRed);
console.log(maximumRed);
console.log(minimumRed);
function getMaxRed(accumulator, element) {
    return Math.max(accumulator, element);
}

function getMinRed(accumulator, element) {
    return Math.min(accumulator, element);
}



// 33. Function Expression

//                              Function Declaration = Defines a reusable block of code that performs a specific task

function funcDecl(){
    console.log("Function Declaration");
}


//                              Function Expression = Defines a reusable block of code that performs a specific task and assigns it to a variable 
//                                                      A way to Define function as a value or variable

const funExpr = function(){
    console.log("Function Expression");
}

funExpr();

setTimeout(function(){
    console.log("Function Expression with setTimeout")
}, 3000);


//      Function Expression = a way to define functions as a value or variables
//                              1. Callbacks in Asynchronous operations
//                              2. Higher order functions 
//                              3. Closures
//                              4. Event Listeners



//  34. Arrow Functions = A concise way to write a function expressions good for simple functions that you use only once
//                          (parameters) => some code
//                        The arrow function is a concise way to write a function expression
//                        The arrow function is an anonymous function


const arrow = (fruits) => {console.log("Arrow Function")
                            console.log(`These are fav fruits: ${fruits}`)
                        };

arrow(fruits);

const cubes = numbers.map((element) => Math.pow(element, 2));
console.log(cubes);



// 35. Objects  = An object is a collection of properties and/or methods
//                  Can represent real world objects (products, people, etc)
//                  objects are used to store data in key-value pairs
//                  keys are properties and values are methods 
//                  keys and values can be any data type
//                  keys and values can be duplicated
//                  keys and values can be arrays
//                  object ={key: value, key: value, key: value, function()}


const person = {
    firstName: 'Java',
    lastName: 'Script',
    age: 30,
    isMarried: true,
    hobbies: ['coding', 'painting', 'cooking'],
    greet: function() {
        console.log(`Hello, my name is ${firstName} ${lastName}`);
    },
    friends: () => {
        console.log("My Friends are HTML and CSS");
    }
}

console.log(person);
console.log(person.isMarried);
console.log(person.age);
person.friends();


// 36. this     = The this keyword refers to the object it belongs to
//                 It can be used to access the properties and methods of the object
//                  reference to the object where THIS is used
//                  (the object depends on the immediate context)
//                  person.name = this.name

const person1 = {
    name: `Jason Stathan`,
    age: 35,
    married: true,
    greet() {
        console.log(`Hello, my name is ${this.name}`);
    },
    status: function () {
        console.log(`I'm ${this.age} and ${this.married}`);
    }
    }

    person1.greet();
    person1.status();

    

    // 37. Constructor Functions
    //                 A constructor function is a special type of function that is used to create and initialize objects
    //                 Constructor functions are used to create objects

function Car(make, model, year, color) {
    this.make = make,
    this.model = model,
    this.year = year,
    this.color = color,
    this.drive = () => {console.log(`I'm driving ${this.make} ${this.model}`)}
}

const car1 = new Car(`Ford`, `Mustang`, 1969, `red`);
const car2 = new Car(`Pagani`, `Huayra`, 2020, `black`);
const car3 = new Car(`Konigsegg`, `Jesko`, 2021, `carbon`);

console.log(car1);
console.log(car1.year);

console.log(car2.make);
console.log(car2.model);
console.log(car2.year);
console.log(car2.color);

car3.drive();



// 38. Classes = A class is a blueprint for creating objects
//                Classes are used to create objects
//                Classes are used to define properties and methods
//              = (ES6 feature) provides a structured and cleaner way to work with the objects compared 
//                  to traditional constructor functions
//                  ex. static, keyword, inheritance, encapsulation

class Product{
    constructor(name, price){
        this.name = name;
        this.price = price;
    }
    displayProduct(){
        console.log(`Product: ${this.name}`);
        console.log(`Price: $${this.price}`);
    }
}

const product1 = new Product('Apple', 1.50);
const product2 = new Product(`iPhone`, 999.99);

product1.displayProduct();
product2.displayProduct();



// 39. Static = Keywords that are used to define properties and methods
//              to a class itself rther than the objects created
//              from that class (Class owns anything static, not the object)
//              static properties and methods can be accessed without creating objects
//              static depend on the class not the object

class MathUtils{
    static PI = 3.14159;
}

console.log(MathUtils.PI);


class User{
    static userCount = 0;

    constructor(username){
        this.username = username;
        User.userCount++;
    }
    static getUserCount(){
        console.log(`There are ${this.userCount} users`);
    }
    sayHellow(){
        console.log(`Hello, my name is ${this.username}`);
    }
}

const user1 = new User(`Manager`);
const user2 = new User(`Manager Licker`);
const user3 = new User(`Managers-Ex`);

console.log(user1.username);
console.log(user2.username);

user3.sayHellow();
User.getUserCount();
console.log(User.userCount);



// 40. Inheritance = A class can inherit properties and methods from another class
//                   Inheritance is used to create a new class based on an existing class
//                   Allows a new class to inherit a class's properties and methods
//                   from an existing class (Parent -> Child)
//                   helps with code reusability 
//                      


class Animal{
    alive = true;

    eat(){
        console.log(`This ${this.name} is Eating`);
    }
    sleep(){
        console.log(`This ${this.name} is Sleeping`);
    }
}

class Dog extends Animal {
    name = 'Dog';
    bark(){
        console.log(`This ${this.name} is Barking`);
    }
}
class Cat extends Animal {
    name = 'Cat';
    meow(){
        console.log(`This ${this.name} is Meowing`);
    }
}
class Rabbit extends Animal {
    name = 'Rabbit';
    hop(){
        console.log(`This ${this.name} is Hopping`);
    }
}

const dog = new Dog();
const cat = new Cat();
const rabbit = new Rabbit();

console.log(rabbit.alive);
rabbit.eat();
rabbit.sleep();
dog.bark();
cat.meow();
rabbit.hop();


// 41. SUPER = keyword is used classes to call the constructor or 
//              access the properties and methods of  a parent (superclass)
//              this = this object
//              super = the parent

class Parent{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    age(){
        console.log(`My age is ${this.age} years old`);
    }
};

class Son extends Parent{
    constructor(name, age, sports){
            super(name, age);
            this.sports = sports;
        }
        elder(){
            console.log(`I am the Eldest child: ${this.name}`);
            super.age();
        }
};

class Daughter extends Parent{
constructor(name, age, hobbies){
    super(name, age);
    this.hobbies = hobbies;
    }
    younger(){
        console.log(`I am the Younger child: ${this.name}`);
        super.age();
    }
};



const son = new Son(`John`, 32, `Swimming`);
const daughter = new Daughter("Molly", 34, 'Cooking');


console.log(son);
console.log(son.sports);
console.log(daughter.sports);
console.log(daughter.name);
console.log(daughter.age);
console.log(daughter.hobbies);

son.elder();



// 42. Getters and Setters = Getters and setters are used to access and modify
//                            the properties of an object
//                            allows you to define custom logic for accessing and
//                            modifying properties of an object     
//              getters =   special method that makes a property readable
//              setters =   special method that makes a property writable

//  validate and modify a value when reading/writing a property

class Rectangle {
    constructor (width, height){
        this.width = width;
        this.height = height;
    }

    set width(newWidth){
        if(newWidth > 0){
            this._width = newWidth;
        }
        else{
            console.error("Invalid width property, Please enter positive number");
        }
    }

    set height(newheight){
        if(newheight > 0){
            this._height = newheight;
        }
        else{
            console.error("Invalid Height property, Please enter positive number");
        }
    }

    get width(){
        return `${this._width.toFixed(1)}cm`;
    }
    get height(){
        return `${this._height.toFixed(1)}cm`;
    }
    get area(){
        return `${(this._width * this._height).toFixed(1)}cm^2`;
    }
}

const rectangle = new Rectangle(-5, -10);

rectangle.width = 20;
rectangle.height = 50;

console.log(rectangle.width);
console.log(rectangle.height);
console.log(rectangle.area);



// 43. Destructuring = Destructuring is a JavaScript expression that allows
//                      you to unpack values from arrays, or properties
//                      from objects, into distinct variables.
//                      Destructuring allows you to extract data from arrays

//                   =  Extract values from arrays and objects, then assign them to variables in convenient ways 
//                      [] = to perform array destructuring 
//                      {} = to perform object destructuring

//  --------------// EXAMPLE 1 //--------------
//  Swap the values of two variables

let da1 = 1;
let da2 = 2;

[da1, da2] = [da2, da1];

console.log(`da1: ${da1}`);
console.log(`da2: ${da2}`);


//  --------------// EXAMPLE 2 //--------------
//  Swap 2 Elements in the array

const colors = ["Red", "Green", "Yellow", "Blue", "Black", "White"];

[colors[0], colors[4], colors[1]] = [colors[4], colors[0], colors[5]];

console.log(colors);


// -----------------// EXAMPLE 3 //---------------
//  Assign Array Elements to Variables

const [firstColor, secondColor, thirdColor, fourthColor, fifthColor, sixthColor] = colors;

console.log(`First Color: ${firstColor}`);
console.log(`Second Color: ${secondColor}`);
console.log(`Third Color: ${thirdColor}`);
console.log(`Fourth Color: ${fourthColor}`);
console.log(`Fifth Color: ${fifthColor}`);
console.log(`Sixth Color: ${sixthColor}`);


// -----------------// EXAMPLE 4 //---------------
// Extract values from objects

const personD1 = {
    nameD: "John",
    ageD: 30,
    cityD: "New York",
    jobD: "WWE Wrestler"
};

const personD2 = {
    nameD: "Jane",
    ageD: 25,
    cityD: "Los Angeles"
};

const {nameD, ageD, cityD, jobD="unemployed"} = personD1;       // Values extracted can even have default values 

console.log(`Name: ${nameD}`);
console.log(`Age: ${ageD}`);
console.log(`City: ${cityD}`);
console.log(`Job: ${jobD}`);


// -----------------// EXAMPLE 5 //---------------
// DESTRUCTURE IN FUNCTION PARAMETERS

function displayPersonDes({nameD, ageD, cityD, jobD="unemployed"}){
    console.log(`Name: ${nameD}`);
    console.log(`Age: ${ageD}`);
    console.log(`City: ${cityD}`);
    console.log(`Job: ${jobD}`);
}

displayPersonDes(personD2);


// 44. Nested Objects = Objects can be nested within other objects to create
//                      hierarchical data structures
//                      can be nested within other objects, arrays, or even

//                      Objects Inside the Object
//                      Allows you to represent more complex data structure 
//                      Child Object is enclosed by Parent Object

//                      Person{Address{}, ContactInfo{}}
//                      ShoppingCart{Address{}, ContactInfo{}}

const personN1 = {
    nameN: "Jason",
    ageN: 30,
    cityN: "Florida",
    jobN: "COP",
    addressN: {
        streetN: "123 Main St",
        cityN: "Miami",
        stateN: "FL",
        zipN: "10001"
    },
    contactInfoN: {
        phoneN: "123-456-7890",
        emailN: "jason@example.com"
    }
};


console.log(personN1.nameN);
console.log(personN1.cityN);
console.log(personN1.jobN);
console.log(personN1.contactInfoN.phoneN);
console.log(personN1.contactInfoN.emailN);

for (const property in personN1.addressN){
    console.log(personN1.addressN[property]);
}

class PersonN2{
    constructor(nameN2, ageN2, ...addressN2){
        this.nameN2 = nameN2;
        this.ageN2 = ageN2;
        this.addressN2 = new AddressN2(...addressN2);
    }
}

class AddressN2{
    constructor(streetN2, cityN2, stateN2, zipN2){
        this.streetN2 = streetN2;
        this.cityN2 = cityN2;
        this.stateN2 = stateN2;
        this.zipN2 = zipN2;
    }
}

const personN2 = new PersonN2("Lucia", 28, "123 Main St", "Miami", "FL", "10001");

console.log(personN2.nameN2);
console.log(personN2.addressN2.cityN2);



// 45. Arrays of Objects
//                  Arrays can contain objects
//                  Objects can be nested within other objects
//                  Arrays can be nested within other arrays
//                  Arrays can be nested within other objects

const fruitsAO = [  {name: "Apple", color: "Red"}, 
                    {name: "Banana", color: "Yellow"}, 
                    {name: "Orange", color: "Orange"}, 
                    {name: "Pear", color: "Green"}, 
                    {name: "cherry", color: "Red"} ];
for (var f = 0; f < fruitsAO.length; f++){
    console.log(fruitsAO[f].name, fruitsAO[f].color);
}

fruitsAO.push({name: "fig", color: "Yellow"});
console.log(fruitsAO[5].name);


// 46. sort()   =   method used to sort element of an array in place,
//                  Sorts elements in strings in lexicographic order, not alphabetical order
//                  lexicographic = (alphabet + numbers + symbols) as string

//                  Arrays.sort() = sorts elements in place
//                  sort() = returns a new array with sorted elements

fruits.sort();

console.log(`Sorted fruits array: ${fruits}`);

let ranNum = [43, 23, 654, 56, 1, 9, 0, 87, 124, 76];

ranNum.sort((a, b) => a - b);     // sort the numbers in ascending order
console.log(ranNum);

fruitsAO.sort((a,b) => a.name.localeCompare(b.name));
console.log(fruitsAO);


// 47. Shuffle an Array
//                  Shuffles elements in an array

// Fisher-Yates algorithm

const cards = [`A`, 2, 3, 4, 5, 6, 7, 8, 9, 10, `J`, `Q`, `K`];

function shuffle(array){
    for(let i = array.length - 1; i > 0; i--){
        const randomC = Math.floor(Math.random() * (i + 1));

        [array[i], array[randomC]] = [array[randomC], array[i]]
    }
}

shuffle(cards);
console.log(cards);



// 48. Date Objects =   Objects used to represent dates
//                      Date objects can be created using Date() constructor
//                      Date objects can be created using new Date() constructor
//                      Date objects can be created using new Date(year, month, day, hours, minutes, seconds, milliseconds) constructor

//                      Object that contains values that represents date and times
//                      These date objects can be changed and formatted

const date = new Date();
console.log(date); 

const year = date.getFullYear();
const month = date.getMonth();
const day = date.getDay();
const hours = date.getHours();
const minutes = date.getMinutes();
const seconds = date.getSeconds();
const milliseconds = date.getMilliseconds();
const dayOfWeek = date.getDay();

console.log(`Year: ${year}, Month: ${month}, Day: ${day}, Hours: ${hours}, Minutes: ${minutes}, Seconds: ${seconds}, Milliseconds: ${milliseconds}, Day of Week: ${dayOfWeek}`);

const date1 = new Date();

date1.setDate(date1.getDate() + 1);  // add 1 day to current date
date1.setFullYear(2022);            // set year to 2022
date1.setMonth(1); // set month
date1.setDate(1); // set day
date1.setHours(0); // set hour
date1.setMinutes(0); // set minute
date1.setSeconds(0); // set second
date1.setMilliseconds(0); // set millisecond

console.log(date1);



// 49. Closure =   A closure is a function that has access to the parent scope
//                  when it was created, even after the parent function has
//                  returned

//                  A function defines inside of another function, the inner function has access to
//                  variables and scope of outer function.
//                  Allow for private variables and state maintenance used frequently in js 
//                  framework: React, Angular, Vue

function outerFunction(){
    let outerFun = "Outer Function";

    function innerFunction(){
        let innerFun = "Inner Function";
        console.log(outerFun);
        console.log(innerFun);
    }

    innerFunction();
}

outerFunction();

function createGame(){
    let score = 0;
    function increaseScore(points){
        score+= points;
        console.log(`+${score}pts`);
    }
    function decreaseScore(points){
        score-= points;
        console.log(`-${score}pts`);
    }
    function getScore(points){
        return score;
    }

    return {increaseScore, decreaseScore, getScore};
    
}

const game = createGame();
game.increaseScore(10);
game.increaseScore(20);
game.decreaseScore(5);
console.log(`Score: ${game.getScore()}`);



// 50. setTimeout() =   function in javaScript that executes after a specified time
//                      setTimeout() = executes after a specified time
//                      setTimeout() = returns a timer ID
//                      function in javaScript that allows you to schedule
//                      the execution of a function after a specified time(milliseconds)
//                      Time are  approximate (Various based on the workload of the javascript runtime env.)
//                      setTimeout(callback, delay)

setTimeout(() => console.log("Hello from setTimeout"), 2000);
setTimeout(() => window.alert ("Hello from setTimeout"), 4000);


// clearTimeout(timeoutId) =    can cancel a timeout before it triggers

const timeoutId = setTimeout(() => console.log("Hello from clearTimeout"), 3000);
clearTimeout(timeoutId);

let timeoutId1

function startTimer(){
    timeoutId1 = setTimeout(() => console.log("Hello from setInterval"), 5000);
}

function clearTimer(){
    clearTimeout(timeoutId1);
}



// 51. ES6 Modules =  A module is a file that contains both code and information about the code itself and its dependencies and exports them to other modules or the global scope of the program in which they are declared in.

//                  =   An external file that contains reusable code that can be imported into another javascript files.
//                      Write reusable code for many different apps.
//                      Can contain variables, classes, functions... and more
//                      Introduced as part of ECMAScript 2015 update.

import { PI1, calculateArea, calculateCircumference, calculateDiameter, calculateVolume } from "./mathUtil.js";

console.log(PI1);
console.log(calculateArea(8));
console.log(calculateCircumference(4));
console.log(calculateDiameter(10));
console.log(calculateVolume(2));



// 52. Synchronous & Asynchronous
//      Synchronous =   The code is executed line by line
//                      Executes the code line by line consecutively in a sequencial manner 
//                      code that waits for the previous code to finish before executing or wait for operations to finish

function func1(callback) {
    setTimeout(() => {
        console.log("Synchronous Task");
        console.log("Task 1");
        callback();
    }, 2000);
    
}

function func2(){
    console.log("Task 2");
    console.log("Task 3");
    console.log("Task 4");
}

func1(func2);

//      Asynchronous =   The code is executed in parallel
//                      Allows multiple operations to be performed concurently without waiting for them to finish
//                      (I/O opertaions, network requests, fetching data)
//                      Handled with: Callbacks, Promise, Async/Await

async function func3() {
    console.log("Asynchronous Task");
    await new Promise((resolve) => setTimeout(resolve, 2000));
    console.log("Task 5");
    console.log("Task 6");
}

func3();


//      Promise =   A promise is a JavaScript object that represents the eventual completion (or failure) of an asynchronous operation
//                  Promises are used to handle asynchronous operations in JavaScript.
//                  Promises provide a way to handle asynchronous code in a more readable and structured way.

function createPromise() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve();
        }, 4000);
    });
}

createPromise().then(() => console.log("Promise resolved"))




// 53. Error Handling
//                      Errors =   Errors are problems that occur during the execution of a program
//                      Exceptions =   An exception is an error that occurs during the execution of a program
//                      An object that is created to represent a problem that occurs
//                      Occur with user input or with external code or establishing connections

// NETWORK ERROR
// PROMISE REJECTION
// SECURITY ERRORS

//  try {}      =   The try block is used to define a block of code to be tested for errors
//                  Enclose code that might potentially cause an error in the try block
//  catch {}    =   The catch block is used to define a block of code to be executed, if an error occurs in the try block
//                  Catch and handle any thrown Errors from try {}
//  finally {}  =   (Optional) Always executes. Used mostly for cleanup
//                  ex. close files , close connections, release resources

//  try{} block at line no 463 & 472
//  catch{} block at line 468 & 477 

try {
    const response = await fetch("https://api.example.com/data");
    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    console.log(data);
} catch (error) {
    console.error("There has been a problem with your fetch operation:", error);
}




// 54. DOM          =   Document Object Model
//                    The Document Object Model (DOM) represents an HTML document as an object
//                    It allows you to manipulate the document using JavaScript objects and methods 
//                        DOM is a programming interface for HTML and XML (including SVG and MathML) documents and applications on the web.
//                          Object{} that represents the page you see in the web browser
//                      and provides you wiht an API to interact with it.
//                      web browser constructs 

console.log(document);
console.dir(document);

document.title = "JS Title";

const headNameMsg = " Java Script";
const headMsg = document.getElementById("Dom-H1-User-msg");

headMsg.textContent += headNameMsg === "" ? `Guest` : headNameMsg;




// 55. Element Selectors        =   Method used to target and manipulate HTML elements
//                                  They allow  you to select one or multiple HTML elements
//                                  from the DOM (Document Object Model)

//  1. document.getElementById()            // ELEMENT OR NULL
//  2. document.getElementByClassName()     // HTML COLLECTION
//  3. document.getElementByTagName         // HTML COLLECTION
//  4. document.querySelector()             // ElELEMENT NULL
//  5. document.querySelector()             // NODELIST 
 





