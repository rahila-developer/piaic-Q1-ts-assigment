// Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.
// • Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.

// • Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.

// • Print a message to each of the two people still on your list, letting them know they’re still invited.

// • Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program.


let personList = ["Hadiya", "kiran", "shiba"];
// let removePerson  = personList.pop();
personList.push('biya','rabi', 'kanwal');

console.log(personList);
personList.unshift("maria");
console.log(personList);

personList.splice(4,0,'warda');
console.log(personList);

personList.push('maham');

for(let i of personList){
    console.log(`hi dear ${i} \nyou are invited to join`);	
}


// Add a new line that prints a message saying that you can invite only two people for dinner.

console.log("you can invite only two people for dinner");

// • Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.

 let removeGuest1= personList.pop();
console.log(`${removeGuest1} you are not invited. and arraylength is`+ personList.length);
let removeGuest2= personList.pop();
console.log(`${removeGuest2} you are not invited.and arraylength is` + personList.length);
let removeGuest3= personList.pop();
console.log(`${removeGuest3} you are not invited.and arraylength is ` + personList.length);
let removeGuest4= personList.pop();
console.log(`${removeGuest4} you are not invited.and arraylength is ` + personList.length);
let removeGuest5= personList.pop();
console.log(`${removeGuest5} you are not invited.and arraylength is ` + personList.length);
let removeGuest6= personList.pop();
console.log(`${removeGuest6} you are not invited.and arraylength is ` + personList.length);
let removeGuest7= personList.pop();
console.log(`${removeGuest7} you are not invited.and arraylength is ` + personList.length);

// • Print a message to each of the two people still on your list, letting them know they’re still invited.

for (let i of personList){
    console.log(`hi dear ${i} \nyou are still invited`);
}


// • Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program.

let removeGuest8= personList.pop();
console.log(`${removeGuest8} you are not invited.and arraylength is ` + personList.length);

let removeGuest9= personList.pop();
console.log(`${removeGuest9} you are not invited.and arraylength is ` + personList.length);


// • Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program.

console.log(`this is an empty array ${personList}`);


export {};