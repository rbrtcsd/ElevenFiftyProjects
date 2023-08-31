// function functionOne(num1, num2) {
//     console.log(`${num1}+${num2}=${num1+num2}`)
// };

// functionOne(16, 32)

// function fullName(firstName, lastName) {
//     let fullName =  firstName + ' ' + lastName;
//     return(fullName);
// }

// console.log(fullName('Robert', 'Casad'))



// function tipCalculator(preTipTotal, tipPercent) {
//     let billTaxTotal = preTipTotal * 1.07
//     let tipAmount = billTaxTotal * tipPercent
//     let billTotal = billTaxTotal+tipAmount
//     return(billTotal)
// }

// console.log(tipCalculator(10, .20))

function isFizzBuzz(num){
    if (num % 15 === 0) {
        console.log("Fizz Buzz")
    } else if (num % 3 == 0) {
        console.log("Fizz")
    } else if (num % 5 == 0) {
        console.log("Buzz")
    } else { console.log(num)
    };
}

for (x=1; x<=100; x++) {
    isFizzBuzz(x)
}