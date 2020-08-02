const fibonacci = function(number) {
if(number < 0) return 'OOPS';
let array = [];
array[0] = 0;
array[1] = 1;
for (let i = 2; i <= number; i++) {
    array [i] = array[i-1] + array[i-2];
}
return array[number];
}
module.exports = fibonacci
