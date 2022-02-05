// // Problem solving1 anaToVori 

// function anaToVori(ana) {
//     var vori = ana / 16;
//     if (ana <= 0) {
//         console.log("Can't do the calculation");
//     }
//     else {
//         return vori;
//     }
// }

// var Result = anaToVori(16);
// console.log(Result);


// problem solving2 pandaCost

function paperRequirements(b1, b2, b3) {
    const book1stPages = 100;
    const book2ndPages = 200;
    const book3rdPages = 300;
    const totalPage = (b1 * book1stPages) + (b2 * book2ndPages) + (b3 * book3rdPages);
    if (b1 <= 0) {
        console.log("Please give the number from 0 onwards ");
    }
    else {
        return totalPage;
    }
}
// let banglaBook=0, englishBook=2, mathBook=1;
let myBill = paperRequirements(0, 0, 4)
console.log(myBill);

// console.log('you need total:',totalPage,'pages');



function pandaCost(singra, somocha, gilapi) {

    let totalCost = (singra * singraPerPise) + (somocha * somochaPerPise) + (gilapi * gilapiPerPise);

    const singraPerPise = 7;
    const somochaPerPise = 10;
    const gilapiPerPise = 15;

    if (singra <= 0) {
        console.log("please enter a positive number");
    }
    else {
        return (totalCost);
    }

}
let singra = 3, somocha = 0, gilapi = 5;
const total = pandaCost(singra, somocha, gilapi);