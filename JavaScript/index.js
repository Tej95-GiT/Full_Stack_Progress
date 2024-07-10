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