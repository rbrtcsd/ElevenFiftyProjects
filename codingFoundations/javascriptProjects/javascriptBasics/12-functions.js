function hello() {
    console.log("Hello World!")
};

// calling a function - just use name of function and parenthesis
hello()

// Arguments (calling a function) and Parameters (creating a function)

function numChoice (num) {
    console.log(`You chose ${num}`)
};

numChoice(16);
numChoice(23498943923);

let firstName = "Robert"

function greet(greeting, name) {
    console.log(`${greeting}, my name is ${name}!`)
};

greet("Good morning", firstName);

// Returns

function battingAverage(atBats, numberOfHits){
    let myAverage = numberOfHits / atBats
    return(myAverage)
};

console.log(battingAverage(234, 7))


