const caesar = function(string,number) {
// let code;
// let cipher = "";
// for (let i = 0; i < string.length; i++) {
//     code = string[i].charCodeAt(0) + number;
// if( string[i] === "!" || string[i] === "," || string[i] === " ") 
// cipher += string[i]
// else if (string[i] === string[i].toUpperCase()) {
// if (code >=65 && code <=90) {
// cipher += String.fromCharCode(code);
// }
// else if (code > 90) {
//     let check = (string[i].charCodeAt(0) + number)%91;
//     while (check > 26) {
//         check = check%26;
//     }
//     code = 65 + check;
//     cipher += String.fromCharCode(code);
// }
// else if (code < 65){
//     code = 90 - 64%(string[i].charCodeAt(0) + number);
//     cipher += String.fromCharCode(code);
// }
// }
// else if (string[i] === string[i].toLowerCase()) {
// if (code >=97 && code <=122) {
//     cipher += String.fromCharCode(code);
// }
// else if ( code > 122) {
//     let check = (string[i].charCodeAt(0) + number)%123;
//     while (check > 26) {
//         check = check%26;
//     }
//     code = 97 + check;
//     cipher += String.fromCharCode(code);
// }
// else if ( code < 97) {
//     code =  122 - 96%(string[i].charCodeAt(0) + number);
//     cipher += String.fromCharCode(code);
// }
// }

// }
// return cipher;
return string.split("").map(char => ShiftChar(char,number)).join("");
}

const codeSet = (code) => (code < 97 ? 65 :97);
const ShiftChar = (char,number) => {  
let code =char.charCodeAt();
if (code >=65 && code <=90 || code >=97 && code <=122) {
    return String.fromCharCode(((code+number - codeSet(code))%26+26)%26 + codeSet(code));
    
}
return char;
}



module.exports = caesar
