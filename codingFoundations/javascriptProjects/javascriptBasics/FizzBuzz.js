let num = 15;

if ((num % 3 == 0)&&(num % 5 == 0)) {
    console.log("Fizz Buzz")
} else if (num % 3 == 0) {
    console.log("Fizz")
} else if (num % 5 == 0) {
    console.log("Buzz")
} else { console.log(num)
};

switch (true) {
    case num%3===0&&num%5===0 :
        console.log("Fizz Buzz");
        break;
    case num%3===0 :
        console.log("Fizz");
        break;
    case num%5===0:
        console.log("Buzz");
        break;
    default:
        console.log(num);
};

((num % 3 == 0)&&(num % 5 == 0)) ? console.log("Fizz Buzz") : num % 3 == 0 ? console.log("Fizz") : num % 5 == 0 ? console.log("Buzz") : console.log(num);