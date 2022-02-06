// // // // problem 4 : oddFriend

// var friends = ["alamin", "roni", "mamun", "razu", "kalam"];

// function oddFriend(friends) {

//     for (let i = 0; i <= 4; i++) {
//         var newFriend;
//         newFriend = friends[i];
//         var stringLength = newFriend.length;
//         if (stringLength % 2 == 0) {
//             // It means it is Even
//         } else {
//             // Or it means it is Odd
//             break;
//         }
//     }

//     return newFriend;
// }

// let Result = oddFriend(friends);
// console.log(Result);





// // ৪. [ ফাংশন নেম দিতে হবে oddFriend]: বিস্তারিত ভিডিওতে দেখো। 


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