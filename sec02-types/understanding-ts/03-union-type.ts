// Union types allow us to specify what types we allow at compile time. We may need to have a check for types at run time.
function combine(input1: string | number, input2: number | string) {
  let result;

  if (typeof input1 === "number" && typeof input2 === "number") {
    result = input1 + input2;
  } else {
    result = input1.toString() + input2.toString();
  }

  return result;
}

const combinedStrings = combine("30", "50");
console.log(combinedStrings);
const combinedAges = combine(30, 50);
console.log(combinedAges);
