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
let a = oddFriend(friends);
console.log(a);