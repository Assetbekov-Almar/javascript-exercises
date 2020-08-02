const removeFromArray = function(array,...deletedElement) {
let newArray = [];

    for (let element of deletedElement){
        for (let i = 0; i < array.length;i++) {
    if( array[i] === element)  array.splice(i,1); 
}
}
return array;
}

// const removeFromArray = function(...args) {
//     const array = args[0];
//     const newArray = [];
//     array.forEach(element => {
//         if(!args.includes(element)) newArray.push(element);
//     });
//     return newArray;
// }

// const removeFromArray = function(...args) {
// const array = args[0];
// return array.filter(element => !args.includes(element));
// }

module.exports = removeFromArray
