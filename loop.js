const number = [80, 90, 100, 300, 400, 40, 50, 303];
let i = 0;

let pushingNumber = [];
while(number[i]){
    pushingNumber.push(number[i])
    i++;
}
let forcingNumber = [];
for(let i = 0; i <= number.length-1; i++){

    forcingNumber.push(number[i]);

}
console.log(...forcingNumber)

