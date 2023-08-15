let ingredients = 'Salmon';

switch (ingredients) {
    case "Ground Beef":
        console.log("I'll make hamburgers")
        break;
    case "Salmon":
        console.log("I'll make grilled salmon")
        break;
    case "Chicken":
        console.log("I'll make chicken tacos")
        break;
    default:
        console.log("I guess I should order something")
};

// Can add multiple cases per break 

let answer = "E";

switch (answer) {
    case "A":
    case "B":
        console.log("Gryffindor")
        break;
    case "C":
    case "D":
        console.log("Hufflepuff")
        break;
    default:
        console.log("Must be a muggle")
};
