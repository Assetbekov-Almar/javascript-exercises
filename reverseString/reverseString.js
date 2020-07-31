const reverseString = function(string) {
// let splitedStr = string.split();
// let ans = "";
// for (let i = string.length; i > 0 ; i--) {
//    ans += splitedStr[i];
// }
// return ans;
return string.split("").reverse().join("");
}

module.exports = reverseString
