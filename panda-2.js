// // // problem 2 : pandaCost

function pandaCost(singara, samocha, jilamp) {
    var singaraPrice = 7;
    var samochaPrice = 10;
    var jilampPrice = 15;

    var singaraResult = singara * singaraPrice;
    var samochaResult = samocha * samochaPrice;
    var jilampResult = jilamp * jilampPrice;
    var totalPrice = singaraResult + samochaResult + jilampResult

    // singara price validation
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
