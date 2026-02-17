import { User } from "./user.js";

const user = new User();
user.name = "Alice";
user.age = 25;
console.log(`${user.name} is ${user.age} years old.`);
console.log(`Is ${user.name} an adult? => ${user.isAdult() ? "Yes" : "No"}`);