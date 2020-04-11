// 1 Return types and 'void'
function add(n1: number, n2: number): number {
  return n1 + n2;
}

function printResult(num: number): void {
  console.log("Result: " + num);
}

// 3a Calback
function addAndHandle(n1: number, n2: number, cb: (num: number) => void) {
  const result = n1 + n2;
  cb(result); // Because of void return type it just tells us that anything returned by cb will not be used here.
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

// 3b Callback
addAndHandle(10, 20, (result) => {
  console.log(result);

  return result; // Will not do anything because we sepecified the return type of the cb to be void.
});
