// // problem solving:3 picnic Budget

// function picnicBudget(totalPeople) {
//     const first100 = 5000;
//     const sec100 = 4000;
//     const third100 = 3000;
//     // let totalCost1 = (first100 * totalPeople);
//     // let totalCost2 = (first100 * totalPeople * sec100);
//     // let totalCost3 = (first100 * totalPeople * sec100 * third100);
//     // switch (totalPeople <= 0) {
//     //     case console.log("Please give the number from 0 onwards "):

//     //         break;
//     //     case (totalPeople <= 100):
//     //         console.log(totalCost1);
//     //         break;
//     //     case (totalPeople <= 200):
//     //         console.log(totalCost2);
//     //         break;
//     //     case (totalPeople <= 300):
//     //         console.log(totalCost3);
//     //         break;
//     //     default:
//     //         text = "Please give the number from 0 onwards ";

//     // }

//     if (totalPeople <= 0) {
//         console.log("Please give the number from 0 onwards ");
//     }
//     else if (totalPeople <= 100) {
//         console.log(first100 * totalPeople);
//     }
//     else if (totalPeople <= 200) {
//         console.log(first100 * totalPeople * sec100);
//     }
//     else if (totalPeople > 200) {
//         console.log(first100 * totalPeople * sec100 * third100);
//     }
// }

// picnicBudget(101);































// problem solving:3 picnic Budget

function picnicBudget(participant) {
    const firstPepole = 5000;
    const secPepole = 4000;
    const thirdPepole = 3000;

    switch (participant <= 0) {

        case console.log("participant number is not valid . enter valid number"):

            break;
        case (participant <= 100):
            console.log(firstPepole * participant);
            break;
        case (participant <= 200):
            console.log(firstPepole * participant * secPepole);
            break;
        case (participant <= 300):
            console.log(firstPepole * participant * secPepole * thirdPepole);
            break;
        default:
            text = "participant number is not valid";

    }

}

picnicBudget(155);





// ৩. [ ফাংশন নেম দিতে হবে picnicBudget]: প্যারামিটার হিসাবে নিবে কয়জন পিকিনিক এ যাবে সেই সংখ্যা। যদি ১০০ বা তার কম যায় তাহলে প্রত্যেক এর জন্য খরচ হবে ৫০০০ টাকা করে। যদি ১০০ এর বেশি কিন্তু ২০০ এর কম বা সমান যায় তাহলে প্রথম ১০০ জন এর প্রতি জন এর জন্য ৫০০০ টাকা করে দিতে হবে। আর ১০০ এর বেশি (অর্থাৎ ১০১ নম্বর থেকে) যতজন আছে তাদের প্রত্যেক ওই জন্য ৪০০০ টাকা করে দিতে হবে। আর যদি ২০০ এর বেশি যায় তাহলে প্রথম ১০০ জন এর প্রতি জন এর জন্য ৫০০০ টাকা করে দিতে হবে। আর ১০০ এর বেশি যতজন আছে তাদের প্রত্যেকের জন্য ৪০০০ টাকা করে দিতে হবে। এর ২০০ এর বেশি (অর্থাৎ ২০১ নম্বর থেকে) যতজন আছে তাদের প্রত্যেক এর জন্য ৩০০০ টাকা করে দিতে হবে।  এখন আমি একটা প্যারামিটার দিবো। সেটা যেকোন সংখ্যা হতে পারে। সেই সংখ্যা অনুসারে তুমি ফাংশন থেকে রিটার্ন দিবে কতটাকা পিকনিক এর বাজেট হতে হবে। ইনপুট প্যারামিটার সংখ্যাটা ১০০ এর কম হতে পারে। ১০০ থেকে ২০০ এর মধ্যে হতে পারে। আবার ২০০ এর বেশিও হতে পারে। তাই সব কেইস ভালো করে টেস্ট করে নিবে।