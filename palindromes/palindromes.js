const palindromes = function(string) {
let newString = [];
let x ;
for ( let i = 0; i < string.length; i++) {
    // if (string[i] === ' ' || string[i] === ',' || string[i] === '.' || string[i] === '!' || string[i] === '?') continue;
    if(!(string[i].toLowerCase().charCodeAt()>=97 && string[i].toLowerCase().charCodeAt()<=122)) continue;
    else newString.push(string[i]);
}
for ( let i = 0; i < newString.length; i++) {
    if (newString[i].toLowerCase() === newString[newString.length-1-i].toLowerCase()) x = true;
    else{
    x= false;
        break;
}
}
return x;
// let newString = string.toLowerCase().replace(/[^A-za-z]/g, "");
// return (newString.split("").reverse().join("")=== newString);
}

module.exports = palindromes
