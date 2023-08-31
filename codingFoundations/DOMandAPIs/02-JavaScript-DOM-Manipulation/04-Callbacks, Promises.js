// function callbackFunction (){
//     const data = {
//         name: "Robert Casad",
//         age: 33,
//         occupation: 'Developer',
//     }
//     return data;
// };

// let data = callbackFunction()

// function showGreeting(dataFromFunction){
//     return "Hello " + data.name + ", I hear you're the greatest?!"
// }
// console.log(showGreeting(callbackFunction))

// Promises

// Boolean Declaration

let amIGood = false;

// Promise

let iCanHaveGift = new Promise(
    function (resolve, reject) {
        if (amIGood) {
            var gift = {
                brand: "HasMattelBro",
                item: "Turbo-Man Action Figure"
            };
            resolve(gift); //fulfilled
        } else {
            var naughty = "You've made Santa's naughty list; enjoy your coal!";
            reject(naughty); //rejected
        }
    }
)

// Promise Call

var checkTwice = function() {
    iCanHaveGift
    .then(function (fulfilled) {
        //nice list = gift
        console.log(fulfilled)
    })
}