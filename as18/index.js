"use strict";
// Seeing the World: Think of at least five places in the world you’d like to visit.
// • Store the locations in a array. Make sure the array is not in alphabetical order.
let locations = ['Paris', 'Switzerland', 'London', 'Canada', 'Germany'];
// • Print your array in its original order.
console.log(locations);
// • Print your array in alphabetical order without modifying the actual list.
// locations.sort();
//console.log(locations);
// • Show that your array is still in its original order by printing it.
// using spread operator 
let locationsAlphabatic = [...locations].sort();
console.log(`Alphabetical Array `, locationsAlphabatic);
console.log(`Original Array `, locations);
// • Print your array in reverse alphabetical order without changing the order of the original list.
locationsAlphabatic.reverse();
console.log(`Alphabetical Array reverse `, locationsAlphabatic);
// • Show that your array is still in its original order by printing it again.
console.log(`Original Array `, locations);
// • Reverse the order of your list. Print the array to show that its order has changed.
locations.reverse();
console.log(locations);
// • Reverse the order of your list again. Print the list to show it’s back to its original order.
locations.reverse();
console.log(locations);
// • Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
// • Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.
