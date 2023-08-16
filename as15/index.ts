// Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.

//• Start with your program from Exercise 14. Add a print statement at the end of your program stating the name of the guest who can’t make it.

//• Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.

//• Print a second set of invitation messages, one for each person who is still in your list.


let personList = ["Hadiya", "kiran", "shiba"];
let removePerson  = personList.pop();


for(let i of personList){
    console.log(`Dear ${i} \nYou are cordially invited to a dinner at my place on Saturday `);
}

console.log(`Dear ${removePerson} \nYou are not invited `);


personList[1]="maria";

for(let i of personList){
    console.log(`Dear ${i} \nYou are cordially invited to a dinner at my place on Saturday `);
}

export {};