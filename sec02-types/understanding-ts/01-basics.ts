function add(n1: number, n2: number, showResult: boolean, phrase: string) {
  // if (typeof n1 !== "number" || typeof n2 !== "number") {
  //   throw new Error("Incorrect input!");
  // }

  const result = n1 + n2;
  if (showResult) {
    // console.log(phrase + n1 + number2); // 58.2
    console.log(phrase + result); // Result is 7.8
  } else {
    return n1 + n2;
  }
}

/* 
let number01: number; // If you do not initialize
number01 = "5"; // Will cause compiler error.
 */

const number1 = 5; // Type inference
const number2 = 2.8;
const printResult = true;
let resultPhrase = "Result is "; // type string
// resultPhrase = 0;

add(number1, number2, printResult, resultPhrase);
