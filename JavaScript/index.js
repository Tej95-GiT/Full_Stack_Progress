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
