const repeatString = function(str,num) {
if (num < 0) return "ERROR";
let i = 0;
let word = "";
while (i < num) {
word += str;
i++;
}
return word;
}

module.exports = repeatString
