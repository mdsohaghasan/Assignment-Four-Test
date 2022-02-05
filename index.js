// Problem 1 : anaToVori 

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