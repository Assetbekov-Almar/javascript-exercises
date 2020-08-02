let findTheOldest = function(people) {
    let age = [];
    let d = new Date();
    for ( let i = 0 ; i < people.length; i++) {
        if (!people[i].yearOfDeath) age[i] = d.getFullYear() - people[i].yearOfBirth;
        else age[i] = people[i].yearOfDeath - people[i].yearOfBirth;
    }
   
    let max = age[0];
    let maxIndex = 0;
    for ( let i = 1 ; i < people.length; i++) {
        if (age[i] > max){
        max = age[i];
        maxIndex = i;
    }
}
    
    
    return people[maxIndex];

    // change people into array
// return array.reduce((oldest,currentPerson) => {
//     const oldestAge = getAge(oldest.yearOfBirth, oldest.yearOfDeath);
//     const currentAge = getAge(currentPerson.yearOfBirth, currentPerson.yearOfDeath);
//     return oldestAge < currentAge ? currentPerson : oldest;
// })
// }

// const getAge = (birth,death) => {
//     if(!death) death = new Date().getFullYear();
//     return death-birth;
// }
}
 module.exports = findTheOldest
