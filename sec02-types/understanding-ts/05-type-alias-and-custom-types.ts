// Type Aliases and Custom Types
type Combinable = string | number;
type ConversionDescriptor = "as-number" | "as-text";

// Literal types specify specific values that can be used.  Literal types can be used with Union types.
function combine(
  input1: Combinable,
  input2: Combinable,
  resultConversion: ConversionDescriptor
) {
  let result;

  if (
    (typeof input1 === "number" && typeof input2 === "number") ||
    resultConversion === "as-number"
  ) {
    result = +input1 + +input2;
  } else {
    result = input1.toString() + input2.toString();
  }

  return result;
}

const combinedAges = combine(30, 50, "as-number");
console.log(combinedAges);

const combinedNames = combine("Anna", "James", "as-text");
console.log(combinedNames);
