export {};
class User {
    name?: string;
    age: number = 0;
}

const olivia = new User();
console.log(olivia.name); // undefined
console.log(olivia.age); // 0
olivia.name = 'Olivia';
console.log(olivia.name); // 'Olivia'