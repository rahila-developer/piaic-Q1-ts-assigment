"use strict";
// Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() with a copy of the array of magicians’ names. Because the original array will be unchanged, return the new array and store it in a separate array. Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name.
Object.defineProperty(exports, "__esModule", { value: true });
function show_magicians(magicians) {
    for (const magician of magicians) {
        console.log(magician);
    }
}
function make_great(magicians) {
    const modifiedMagicians = [];
    for (const magician of magicians) {
        modifiedMagicians.push("the Great " + magician);
    }
    return modifiedMagicians;
}
const magicianNames = ["Magician1", "Magician2", "Magician3"];
const modifiedMagicians = make_great([...magicianNames]); // Create a copy of the original array
console.log("Original Magicians:");
show_magicians(magicianNames);
console.log("\nModified Magicians:");
show_magicians(modifiedMagicians);
