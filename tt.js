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

// // // problem 3 : picnicBudget

function picnicBudget(participant) {

    const firstPepole = 5000;
    const secPepole = 4000;
    const thirdPepole = 3000;

    if (participant < 0) {
        return 'not valid number'
    }

    else if (participant <= 100) {
        const totalCost = participan * firstPepole;
        return totalCost;
    }

    else if (participant <= 200) {
        const firstPepolecost = firstPepole * 100;
        const restpepole = participant - 100;
        const restTotalCost = secPepole * restpepole;
        const totalCost = firstPepolecost + restTotalCost;
        return totalCost;
    }

    else {
        const firstPepolecost = firstPepole * 100;
        const secPepolecost = secPepole * 100;
        const restpepole = participant - 200;
        const resttotalcost = thirdPepole * restpepole;
        const totalCost = firstPepolecost + secPepolecost + resttotalcost;
        return totalCost;
    }

}

var budget = picnicBudget(101);
console.log(budget);




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