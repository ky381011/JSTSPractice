// const colors: string[] = ['Red', 'Green', 'Blue'];
// console.log(colors); // ['Red', 'Green', 'Blue']

// const mixedArray: (string | number | boolean)[] = ['Hello', 42, true];
// console.log(mixedArray); // ['Hello', 42, true]

// // ひとつづつ出力
// console.log(colors[0]); // 'Red'
// console.log(colors[1]); // 'Green'
// console.log(colors[2]); // 'Blue'
// console.log(colors.length); // 3
// // 末尾を取得
// console.log(colors[colors.length - 1]); // 'Blue'

// // 空配列
// const emptyArray: number[] = [];
// console.log(emptyArray); // []

const colors = ['Red', 'Green', 'Blue'];
console.log(colors); // ['Red', 'Green', 'Blue']

// 末尾に追加
colors.push('Yellow');
console.log(colors); // ['Red', 'Green', 'Blue', 'Yellow']

// 先頭に追加
colors.unshift('Purple');
console.log(colors); // ['Purple', 'Red', 'Green', 'Blue', 'Yellow']

// インデックス1の要素を変更
colors[1] = 'Orange';
console.log(colors); // ['Purple', 'Orange', 'Green', 'Blue', 'Yellow']

const insertArray = ['A', 'B', 'C', 'D'];

insertArray.splice(1, 0, 'D'); // インデックス1に'D'を追加
insertArray.splice(2, 0, 'X', 'Y', 'Z'); // インデックス2に'D'を追加
console.log(insertArray); // ['A', 'D', 'X', 'Y', 'Z', 'B', 'C', 'D']

insertArray.splice(2, 2); // インデックス2から2つ削除
console.log(insertArray); // ['A', 'D', 'Z', 'B', 'C', 'D']

const arr1 = ['X', 'Y', 'Z'];
const arr2 = ['A', 'B', 'C'];
const combinedArray = arr1.concat(arr2);
console.log(combinedArray); // ['X', 'Y', 'Z', 'A', 'B', 'C']
// 元の配列は変更されない
console.log(arr1); // ['X', 'Y', 'Z']
console.log(arr2); // ['A', 'B', 'C']

const arr3 = ['1', '2', '3', '4', '5'];
arr3.shift(); // 先頭の要素を削除
console.log(arr3); // ['2', '3', '4', '5']

arr3.pop(); // 末尾の要素を削除
console.log(arr3); // ['2', '3', '4']

const arr4 = [10, 20, 30, 40, 50];
const arr5 = [60, 70, 80, ...arr4];
console.log(arr5); // [60, 70, 80, 10, 20, 30, 40, 50]