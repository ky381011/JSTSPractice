// for(変数 of iterableオブジェクト) {
//     // 繰り返し処理
// }
// iterableオブジェクトは、配列や文字列などの反復可能なオブジェクトのことを指します。

export {};
const colors = ['red', 'green', 'blue'];

for (const color of colors) {
    console.log(color);
}

const str = 'Typescript';
for (const char of str) {
    console.log(char);
}