let userName = 'ashKetchem';
const stateName = 'Indiana';
let currentLanguage = "JavaScript";
let a_long_phrase = "The quick brown fox jumped over the lazy dog"
let emptyString = '';

// Escape Sequences

let escapedString = 'I can\'t deal with this.'
// backslash before apostrophe - will not end the string
// or use double quotes
let doubleQuotes = "I can't deal with this."
let quote = 'The doctor asked "where is the patient?"'
console.log(quote)

// Template Trings / String Interpolation

let firstName = 'Robert';
let age = 32;
let greeting = `Hello, my name is ${firstName}, and I am ${age} years old!`;
console.log(greeting);

// String Methods

// ? Index
const daysOfTheWeek = "SMTWTFS";
let firstDay = daysOfTheWeek[0];
console.log(firstDay);

// ? Includes

let stockChoices = 'AAPL, MSFT, GOOG, AMZN, FB';
let stockCheck = stockChoices.includes('AAPL')
console.log(stockCheck)

// Uppercase / Lowercase

let userEmail = 'notASusEmail@email.com';
console.log(userEmail.toUpperCase());
console.log(userEmail.toLowerCase());