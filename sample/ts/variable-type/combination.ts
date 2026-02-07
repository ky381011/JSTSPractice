// 演算子を使った文字列結合
const firstName: string = "John";
const lastName: string = "Doe";

const message1: string = "Hello, I am " + firstName + " " + lastName + ".";
console.log(message1); // Hello, I am John Doe.

// テンプレートリテラルを使った文字列結合
const message2: string = `Hello, I am ${firstName} ${lastName}.`; // 使い方 : ${変数名}
console.log(message2); // Hello, I am John Doe.

// 改行を含むテンプレートリテラル
const message3: string = `Hello, 
I am ${firstName} ${lastName}.`; // 使い方 : ${変数名}
console.log(message3); // Hello, I am John Doe.