// Interfaces

// Note that at runtime, no output for 'interfaces' exists.  This is purely a development
// feature to help with compilation and writing code.

// Interface can be used instead of custom function types
// type AddFn = (a: number, b: number) => number;
interface AddFn {
  (a: number, b: number): number; // Anonymous function
}

let add: AddFn;

add = (n1: number, n2: number) => {
  return n1 + n2;
};

interface Named {
  readonly name?: string; // Optional property in an interface
  outputName?: string; // Optional property in an interface
}

// Can be used to define structure of an object and allows us to type check based on that structure.
interface Greetable extends Named {
  greet(phrase: string): void;
}

class Person implements Greetable {
  name?: string; // Optional property in a class

  age = 30;
  constructor(n?: string) {
    if (n) {
      this.name = n; // Remember name? means optional
    }
  }

  greet(phrase: string) {
    if (this.name) {
      console.log(phrase + " " + this.name);
    } else {
      console.log("Hi!");
    }
  }
}

let user1: Greetable; // Interface

user1 = new Person();

user1.greet("Hi there - I am");
console.log(user1);
