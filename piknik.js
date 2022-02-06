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

var budget = picnicBudget(10);
console.log(budget);
