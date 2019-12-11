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
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 5] = "ADMIN";
    Role[Role["READ_ONLY"] = 6] = "READ_ONLY";
    Role[Role["AUTHOR"] = 7] = "AUTHOR";
})(Role || (Role = {}));
var person = {
    name: "Lisa",
    age: 30,
    hobbies: ["Sports", "Cooking"],
    role: Role.AUTHOR
};
// person.role.push("admin");
// person.role[1] = 10;
var favoriteActivities; // 4 you could use any[] if you want any JS type in the array.
favoriteActivities = ["Sports"];
// favoriteActivities = 'Sports' // errors
// favoriteActivities = ['Sports', 1] // errors mixed array
console.log(person.name); // Lisa
// console.log(person.email); // Will error
for (var _i = 0, _a = person.hobbies; _i < _a.length; _i++) {
    var hobby = _a[_i];
    console.log(hobby.toUpperCase()); // Advantage is now we can use string methods because it knows with certainty that hobbies is string[]
    // console.log(hobby.map()); // Error because .map() is only availabe for arrays and not strings
}
if (person.role === Role.AUTHOR) {
    console.log("is author");
}
