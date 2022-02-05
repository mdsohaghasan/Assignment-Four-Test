// // // problem 1 : anaToVori

// function anaToVori(ana) {
//     var Result = ana / 16;
//     return Result;
// }

// var myana = 16;
// var Vori = anaToVori(myana);
// console.log(Vori);

// // // // problem 2 : pandaCost
// function pandaCost(singara, somocha, jilapi) {
//     var singaraResult = singara * 7;
//     var samochaResult = somocha * 10;
//     var jilapiResult = jilapi * 15;
//     var Result = console.log(singaraResult, samochaResult, jilapiResult);
//     return Result;
// }

// var singara = 5;
// var samocha = 5;
// var jilamp = 5;
// var totalPrice = pandaCost(singara, samocha, jilamp);
// console.log(totalPrice);

// // // problem 3 : picnicBudget

// picnicBudget



// // // problem 4 : oddFriend
var friends = ["sohada", "roni", "mamon", "kkki", "aaa"];
console.log(friends[4]);

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
let a = oddFriend(friends);
console.log(a);

// Difference -  let , var , const
// const a = 'ssss';
// let a = 'ssss';
// a = 'dda';
// console.log(a);

