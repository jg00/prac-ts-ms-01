// 1a Explicitly defining the type but better to let TS infer the type.
// const person: { name: string; age: number } = {

const person: {
  name: string;
  age: number;
  hobbies: string[];
  role: [number, string]; // Define a tuple (ie restrict to fixed number of items with specific types)
} = {
  name: "Lisa",
  age: 30,
  hobbies: ["Sports", "Cooking"], // 3 TS infered string[] b/c we only have strings in the array.
  role: [2, "author"] // TS infers (string|number)[].
};

person.role.push("admin"); // This works however as an exception to tuple
// person.role[1] = 10;

let favoriteActivities: string[]; // 4 you could use any[] if you want any JS type in the array.
// favoriteActivities = 'Sports' // errors
// favoriteActivities = ['Sports', 1] // errors mixed array

console.log(person.name); // Lisa
// console.log(person.email); // Will error

for (const hobby of person.hobbies) {
  console.log(hobby.toUpperCase()); // Advantage is now we can use string methods because it knows with certainty that hobbies is string[]
  // console.log(hobby.map()); // Error because .map() is only availabe for arrays and not strings
}

/*
  // 1b TS type infers that person is below.  
  -> This is the object type inferred by TS./
  -> name: string (key:type pairs)

  const person: {
    name: string; // Notice ;.  This is not a JS object.
    age: number;
  }

*/

/* 
  // 2 You could use object type to person2 but this will error.
  const person2: object = {
    name: "Ren",
    age: 20
  };

  console.log(person2.name)  // Will error
 */
