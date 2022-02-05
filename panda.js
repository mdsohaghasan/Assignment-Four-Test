// // // problem 2 : pandaCost mathod : 1

function pandaCost(singara, samocha, jilapi) {
    var singaraResult = singara * 7;
    var samochaResult = samocha * 10;
    var jilapiResult = jilapi * 15;
    var Result = console.log(singaraResult, samochaResult, jilapiResult);
    return Result;
}

var singara = 5;
var samocha = 5;
var jilamp = 5;
var totalPrice = pandaCost(singara, samocha, jilamp);
console.log(totalPrice);

// // // problem 2 : pandaCost  mathod : 2

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



// ২. [ ফাংশন নেম দিতে হবে pandaCost]: তিনটা প্যারামিটার লাগবে। ভিডিও ভালো করে দেখবে।

// ১ টি সিঙ্গারা এর দাম – ৭ টাকা

// ১ টি সমুচা এর দাম – ১০ টাকা

// ১ টি জিলাপি এর দাম – ১৫ টাকা

// এখন সে যদি বিভিন্ন সংখ্যার সিঙ্গারা, সমুচা, আর জিলাপি এর অর্ডার দেয় তাহলে টোটাল কত টাকা খরচ হবে হলো সেই সংখ্যা রিটার্ন করতে হবে। 