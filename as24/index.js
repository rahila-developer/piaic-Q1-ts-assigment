"use strict";
//More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
//• Tests for equality and inequality with strings
Object.defineProperty(exports, "__esModule", { value: true });
let fruit1 = "banna";
let fruit2 = " apple";
console.log('fruit1 == fruit2 ? its false ', fruit1 === fruit2);
//• Tests using the lower case function
console.log(" is 'Hello' lower case is equal to 'hello' ? its true ", 'Hello'.toLowerCase() == 'hello');
//• Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
let age1 = 25;
let age2 = 30;
console.log(" is Age 1 == to age 2 ? its false ", age1 == age2);
console.log(" is Age 1 > to age 2 ? its false ", age1 > age2);
console.log(" is Age 1 < to age 2 ? its trur ", age1 < age2);
console.log(" is Age 1 == to age 2 ? its false ", age1 >= age2);
console.log(" is Age 1 == to age 2 ? its true ", age1 <= age2);
//• Tests using "and" and "or" operators
console.log(" is age1 = 25 && age2 > 30 ? its false ", age1 >= 25 && age2 > 30);
console.log(" is age1 = 25 || age2 > 30 ? its true ", age1 <= 25 || age2 > 30);
//• Test whether an item is in a array
let numbers = [1, 2, 3, 4, 5];
console.log("Is 4 in the numbers array? I predict True.");
console.log(numbers.includes(4));
//• Test whether an item is not in a array
console.log("Is 6 not in the numbers array? I predict True.");
console.log(!numbers.includes(6));
