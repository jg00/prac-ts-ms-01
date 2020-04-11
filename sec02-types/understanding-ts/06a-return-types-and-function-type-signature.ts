// 1 Return types and 'void'
function add(n1: number, n2: number): number {
  return n1 + n2;
}

function printResult(num: number): void {
  console.log("Result: " + num);
}

printResult(add(5, 12));

// 2 Function type are types that describe the signature of a function.
// let combineValues // has type : any
// let combineValues: Function; // Any function of any signature

// (params) => return type
let combineValues: (a: number, b: number) => number; // More precise using signature

combineValues = add; // add has the same signature defined for combineValues
// combineValues = printResult; // TS will complain b/c printResult does not take two arguments like how we call it below > combineValues(8,8)
// combineValues = 5; // Issue is combineValues no longer holds a function and will error on next line

console.log(combineValues(8, 8));

// undefined is a valid type in TS
// let someValue: undefined
