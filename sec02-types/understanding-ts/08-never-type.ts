let userInput: unknown;
let userName: string;

userInput = 50;
userInput = "Lets assign a string";

// type checking before we can assign to a variable of type "unknown".
if (typeof userInput === "string") {
  userName = userInput;
}

// Return type of this function is :never because it crashes our app
// Hoverring over this may show return type of :void but to be clearer
// that we intentionally do not want to return anything we can use
// :never
function generateError(message: string, code: number): never {
  throw { message: message, errorCode: code }; // essentially nothing is returned because this crashes our app
  // while(true);
}

const result = generateError("An error occurred!", 500);
console.log(result);
