/*
console.log("it works");
console.log(doctorize2('wes'));
//function is hoisted, function expression would not
const doctorize = function (firstName) {
    return `Dr. ${firstName}`;
}
function doctorize2 (firstName) {
    return `Dr. ${firstName}`;
}
const inchToCM = (inches) => inches * 2.54;
*/

const wes = {
    name: "Wes",
    sayHi: function sayHi(){
        console.log(`hey ${this.name}`);
        return "Hey wes!";
    }
}

const button = document.querySelector(".clickMe");
console.log(button);