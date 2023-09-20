"use strict";
// Cars: Write a function that stores information about a car in a Object. The function should always receive a manufacturer and a model name. It should then accept an arbitrary number of keyword arguments. Call the function with the required information and two other name-value pairs, such as a color or an optional feature. Print the Object that’s returned to make sure all the information was stored correctly.
Object.defineProperty(exports, "__esModule", { value: true });
function createCar(manufacturer, modelName, ...options) {
    const carInfo = {
        manufacturer: manufacturer,
        modelName: modelName,
    };
    for (let i = 0; i < options.length; i += 2) {
        const key = options[i];
        const value = options[i + 1];
        carInfo[key] = value;
    }
    return carInfo;
}
// Call the function with required and optional information
const car = createCar("Toyota", "Camry", "color", "blue", "year", 2022);
console.log(car);
