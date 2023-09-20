// Great Magicians: Start with a copy of your program from Exercise 39. Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name. Call show_magicians() to see that the list has actually been modified.

function show_magicians(magicians: string[]) {
    for (const magician of magicians) {
      console.log(magician);
    }
  }
  
  function make_great(magicians: string[]) {
    for (let i = 0; i < magicians.length; i++) {
      magicians[i] = "the Great " + magicians[i];
    }
  }
  
  const magicianNames: string[] = ["Magician1", "Magician2", "Magician3"];
  
  show_magicians(magicianNames);
  
  make_great(magicianNames);
  
  console.log("After making them great:");
  
  show_magicians(magicianNames);


  export {};
  
   
  
  