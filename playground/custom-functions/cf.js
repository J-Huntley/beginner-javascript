console.log("it works!");
function calculateBill(myBill, myRate){
    //this is the function
    console.log("calcBill is running");
    const total = myBill*(1+myRate);
    return total;
}
const myTotal = calculateBill(100, 0.13);
const myTotal2 = calculateBill(200, 0.15);
console.log(`Your totals are: ${myTotal} and ${myTotal2}`);