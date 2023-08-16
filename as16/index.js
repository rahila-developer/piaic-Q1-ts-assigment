"use strict";
// More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
//• Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.
Object.defineProperty(exports, "__esModule", { value: true });
//• Add one new guest to the beginning of your array.
//• Add one new guest to the middle of your array. 
// • Use append() to add one new guest to the end of your list. • Print a new set of invitation messages, one for each person in your list.
let personList = ["Hadiya", "kiran", "shiba"];
// let removePerson  = personList.pop();
personList.push('biya', 'rabi', 'kanwal');
console.log(personList);
personList.unshift("maria");
console.log(personList);
personList.splice(4, 0, 'warda');
console.log(personList);
personList.push('maham');
for (let i of personList) {
    console.log(`hi dear ${i} \nyou are invited to join`);
}
