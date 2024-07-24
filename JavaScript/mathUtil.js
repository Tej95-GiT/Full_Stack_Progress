// 51. ES6 Modules =  A module is a file that contains both code and information about the code itself and its dependencies and exports them to other modules or the global scope of the program in which they are declared in.

//                  =   An external file that contains reusable code that can be imported into another javascript files.
//                      Write reusable code for many different apps.
//                      Can contain variables, classes, functions... and more
//                      Introduced as part of ECMAScript 2015 update.


export const PI1 = 3.14;

export function calculateArea(radius) {
    return PI1 * radius ** 2;
}

export function calculateCircumference(radius) {
    return 2 * PI1 * radius;
}
export function calculateDiameter(radius) {
    return 2 * radius;
}
export function calculateVolume(radius) {
    return (4 / 3) * PI1 * radius ** 3;
}
