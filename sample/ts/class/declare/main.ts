class User {
    name: string = 'Unknown';
    age: number = NaN;
}

const olivia = new User();
console.log(olivia.name); // 'Unknown'
console.log(olivia.age); // NaN
olivia.name = 'Olivia';
olivia.age = 30;
console.log(olivia.name); // 'Olivia'
console.log(olivia.age); // 30