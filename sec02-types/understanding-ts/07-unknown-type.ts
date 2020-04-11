// Unknown type vs any type
// unknown - "We dont know yet what the user will eventually enter."
// With unknown, when reassigning a variable of a type, we cannot just assign it
// unless we do some type checking
let userInput: unknown; // a bit more restrictive than "any" type
let userName: string;

// userInput below works unless we assign itself to another variable of a specified type
userInput = 50;
userInput = "Lets assign a string";

// This will error because userInput is of type "unknown" is not assignable to type string
// userName = userInput;

// What we have to do is do some type checking
if (typeof userInput === "string") {
  userName = userInput;
}

console.log(userInput);
