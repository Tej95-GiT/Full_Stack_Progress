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

userId = userId.trim();
let letter = userId.charAt(0);
letter = letter.toUpperCase();

let extraChars = userId.slice(1);
extraChars = extraChars.toLowerCase();
userId = letter + extraChars;

console.log(userId);


// ------------- METHOD CHAINING --------------------


let userId2 = window.prompt("Enter you user id2: ");
userId2 = userId2.trim().charAt(0).toUpperCase() + userId2.trim().slice(1).toLowerCase();
console.log(userId2);


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





