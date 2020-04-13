"use strict";
// 1 Functions, Function type definition, Pass functions of specific Function type as arguments
const add = (a, b = 1) => a + b; // returns result; Also remember default arguments have to be last.
// We define a function with specific signature. We can then pass to it a function of the matching signature.
// a) Function type and b) the function that matches it
//    a) const printOutput: (a:number | string) => void
//    b) output => console.log(output);
const printOutput = (output) => console.log(output);
printOutput(add(5));
// 2a ...spread operator supported by TS
const hobbies = ["sports", "cooking", "fishing", "reading"];
const activeHobbies = ["hiking"];
activeHobbies.push(...hobbies);
console.log(activeHobbies);
// 2b ...spread operator for objects
const person = {
    firstName: "Ted",
    age: 30,
};
const copiedPerson = Object.assign({}, person);
person.age = 40;
// console.log("person:", person);
// console.log("copiedPerson:", copiedPerson);
// 3 Rest Parameter Operator (params placed into an array) - Be explicit to the array type
// reduce() overall will return a number and we can then return that value to the calling code.
const add2 = (...numbers) => {
    return numbers.reduce((accumulator, current) => {
        return accumulator + current;
    }, 0);
};
const addNumbers = add2(5, 10, 2, 3.7);
console.log("Total Numbers:", addNumbers);
// 4a Array destructuring
const [hobby1, hobby2, ...remainingHobbies] = hobbies;
console.log(hobby1, hobby2, remainingHobbies[0]);
// 4b Object destructuring
const { firstName: fn } = person;
console.log(fn);
