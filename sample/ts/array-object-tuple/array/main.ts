const colors: string[] = ['Red', 'Green', 'Blue'];
console.log(colors); // ['Red', 'Green', 'Blue']

const mixedArray: (string | number | boolean)[] = ['Hello', 42, true];
console.log(mixedArray); // ['Hello', 42, true]

// ひとつづつ出力
console.log(colors[0]); // 'Red'
console.log(colors[1]); // 'Green'
console.log(colors[2]); // 'Blue'
console.log(colors.length); // 3
// 末尾を取得
console.log(colors[colors.length - 1]); // 'Blue'

// 空配列
const emptyArray: number[] = [];
console.log(emptyArray); // []