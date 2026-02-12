const user = {
  name: "Alice",
  gender: "female",
  age: 30,
}

console.log(user.name); // "Alice"
console.log(user.gender); // "female"
console.log(user.age); // 30

console.log(user['name']); // "Alice"
console.log(user['gender']); // "female"
console.log(user['age']); // 30

user.age = 31;
console.log(user.age); // 31

console.log(Object.keys(user).length);
console.log(Object.keys(user));

const user2: {
  name: string,
  gender: string,
  age: number,
} = {
  name: "Bob",
  gender: "male",
  age: 25,
}

interface User {
  name: string;
  gender: string;
  age: number;
}

const user3: User = {
  name: "Charlie",
  gender: "male",
  age: 28,
}