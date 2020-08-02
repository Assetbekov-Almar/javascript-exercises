const sumAll = function(num1, num2) {
if(typeof(num1) !== 'number' || typeof(num2) !== 'number' || num1 < 0 || num2 < 0) return 'ERROR';
else {
let sum = 0;

let temp;
if (num1 > num2) {
    temp = num1;
    num1 = num2;
    num2 = temp;
}
for (let i = num1; i <= num2; i++){
    sum += i;
   }
   return sum;
}
}

module.exports = sumAll
