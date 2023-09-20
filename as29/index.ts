//Favorite Fruit: Make a array of your favorite fruits, and then write a series of independent if statements that check for certain fruits in your array.
//• Make a array of your three favorite fruits and call it favorite_fruits.

//• Write five if statements. Each should check whether a certain kind of fruit is in your array. If the fruit is in your array, the if block should print a statement, such as You really like bananas!

let favorite_fruits = ['apple', ' banana', ' orange', 'mango', 'grapes'];

for (let i of favorite_fruits) {
if (i === 'apple') {
console.log (' Your favorite fruit is ' + i);
}

if (i === 'orange') { 
    console.log (' Your favorite fruit is ' + i);
}
if (i === 'banana') {
    console.log (' Your favorite fruit is ' + i);
}

if (i === 'mango') {
    console.log (' Your favorite fruit is ' + i);
}
if (i === 'grapes') {
    console.log (' Your favorite fruit is ' + i);
};


};


// other method 

let favorite_fruit = ['apple', 'banana', 'orange'];

if (favorite_fruit.includes('apple')) {
    console.log("You really like apples!");
}

if (favorite_fruit.includes('banana')) {
    console.log("You really like bananas!");
}

if (favorite_fruit.includes('orange')) {
    console.log("You really like oranges!");
}

if (favorite_fruit.includes('strawberry')) {
    console.log("You really like strawberries!");
}

if (favorite_fruit.includes('grape')) {
    console.log("You really like grapes!");
}
