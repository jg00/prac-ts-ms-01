// const person: {
//   name: string;
//   age: number;
//   hobbies: string[];
//   role: [number, string]; // tuple
// } = {
//   name: "Lisa",
//   age: 30,
//   hobbies: ["Sports", "Cooking"]
//   role: [2, "author"]
// };

// const ADMIN = 0
// const READ_ONLY = 1
// const AUTHOR = 2

enum Role {
  ADMIN = "ADMIN",
  READ_ONLY = 100,
  AUTHOR = 200
}

// You can provide mix of values
// enum Role {
//   ADMIN = 'ADMIN',
//   READ_ONLY = 100,
//   AUTHOR = 200
// }

const person = {
  name: "Lisa",
  age: 30,
  hobbies: ["Sports", "Cooking"],
  role: Role.AUTHOR
};

// person.role.push("admin");
// person.role[1] = 10;

let favoriteActivities: string[]; // 4 you could use any[] if you want any JS type in the array.
favoriteActivities = ["Sports"];
// favoriteActivities = 'Sports' // errors
// favoriteActivities = ['Sports', 1] // errors mixed array

console.log(person.name); // Lisa
// console.log(person.email); // Will error

for (const hobby of person.hobbies) {
  console.log(hobby.toUpperCase()); // Advantage is now we can use string methods because it knows with certainty that hobbies is string[]
  // console.log(hobby.map()); // Error because .map() is only availabe for arrays and not strings
}

if (person.role === Role.AUTHOR) {
  console.log("is author");
}
