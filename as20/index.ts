// Think of something you could store in a array. For example, you could make a list of mountains, rivers, countries, cities, languages, or anything else you’d like. Write a program that creates a list containing these items.

type list ={[key: string]: string[]};
const list : list = {
    Mountains :  ['Karakoram Range', 'Himalaya Range', 'Salt Range'],
    Riverses : ['Indus', 'Jhelum' , 'Chenab' , 'Ravi'],
    Countries : ['United States', 'Pakistan', ' Canada' , 'Germany'],
    Cities : ['Sargodha', ' Faisalabad' , 'Lahore'],
    Languages : ["English", "Arabic " , "French " , "Spanish"]
  };

for (const items in list) {
console.log(`list of ${items} is`);
for (const keyItem of list[items]) {
    console.log(`*** ${keyItem}`);
}
}

export {};



