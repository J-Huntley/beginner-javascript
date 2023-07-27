console.log("it works!");
function calculateBill(){
    //this is the function
    console.log("calcBill is running");
    const total = 100 *1.13;
    console.log(total);
    return total;
}
const myTotal = calculateBill();
console.log(`Your total is: ${myTotal}`);