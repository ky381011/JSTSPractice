export {};

class User {
    readonly name: string = 'Unknown';
    age: number = 0;
}

const olivia = new User();
console.log(olivia.name); // 'Unknown'
console.log(olivia.age); // 0
olivia.age = 30;
console.log(olivia.age); // 30
// olivia.name = 'Olivia'; // エラー: nameは読み取り専用プロパティであるため、値を変更できません。