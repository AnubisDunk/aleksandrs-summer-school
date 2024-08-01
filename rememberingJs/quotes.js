const NAME = 'Aleksandrs';
let born = 1998;
const d = new Date();
let age = d.getFullYear() - born;

let sentence = `Hello \nMy name is ${NAME} I am ${age} years old`;

console.log(sentence);
