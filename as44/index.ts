// Sandwiches: Write a function that accepts a array of items a person wants on a sandwich. The function should have one parameter that collects as many items as the function call provides, and it should print a summary of the sandwich that is being ordered. Call the function three times, using a different number of arguments each time.

function orderSandwich(...items : any[]) {
    console.log("Sandwich order:");
    for (const item of items) {
      console.log(`- ${item}`);
    }
    console.log("Enjoy your sandwich!\n");
  }
  
  // Call the function with different numbers of arguments
  orderSandwich("Ham", "Cheese", "Lettuce", "Tomato");
  orderSandwich("Turkey", "Swiss");
  orderSandwich("Peanut Butter", "Jelly");
  

  export {};
  