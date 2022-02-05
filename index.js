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
