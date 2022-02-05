// // // Problem 1 : anaToVori 

function anaToVori(ana) {
    var vori = ana / 16;
    if (ana <= 0) {
        console.log("Can't do the calculation");
    }
    else {
        return vori;
    }
}

var Result = anaToVori(16);
console.log(Result);


// // // problem 2 : pandaCost

function pandaCost(singara, samocha, jilamp) {
    var singaraPrice = 7;
    var samochaPrice = 10;
    var jilampPrice = 15;

    var singaraResult = singara * singaraPrice;
    var samochaResult = samocha * samochaPrice;
    var jilampResult = jilamp * jilampPrice;
    var totalPrice = singaraResult + samochaResult + jilampResult

    if (singaraPrice <= 6 || samochaPrice <= 9 || jilampPrice <= 14) {
        console.log("Price Is Not Valid");
    }
    else {
        return totalPrice;
    }

}

var singara = 5;
var samocha = 5;
var jilamp = 5;

var totalPrice = pandaCost(singara, samocha, jilamp);
console.log(totalPrice);

















// // // problem 4 : oddFriend

var friends = ["alamin", "roni", "mamun", "razu", "kalam"];

function oddFriend(friends) {

    for (let i = 0; i <= 4; i++) {
        var newFriend;
        newFriend = friends[i];
        var stringLength = newFriend.length;
        if (stringLength % 2 == 0) {
            // It means it is Even
        } else {
            // Or it means it is Odd
            break;
        }
    }

    return newFriend;
}

let Result = oddFriend(friends);
console.log(Result);