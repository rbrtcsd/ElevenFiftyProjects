//if statements

if (10 > 5) {
    console.log("Yep, 10 is greater than 5");
} else {
    console.log("10 is not greater than 5")
};

// if else statements

if (10 < 5) {
    console.log("This code will not run, 10 is not greater than 5!")
} else {
    console.log("10 is not less than 5")
};

let weather = "rainy";

if (weather === "rainy") {
    console.log("Bring an umbrella!")
} else {
    console.log("You wont need an umbrella")
};

// else if statements

let character = 'Wizard';

if (character === 'Bard') {
    console.log("You sing nice songs")
} else if (character === 'Warrior') {
    console.log('You beat things up.')
} else if (character === 'Rogue') {
    console.log('You use stealth')
} else if (character === 'Wizard') {
    console.log('You use magic') 
} else {
    console.log('What type of character is this??')
};

// Order is important! 

let temp = 85;

if (temp >= 50){
  console.log('It is cool.')
} else if (temp >= 65){
  console.log('It is warm.')
} else if (temp >= 80) {
  console.log('It is hot.')
} else {
  console.log('It is cold.')
};