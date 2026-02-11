export {};

// デフォルト引数を持つ関数
const getRectangleArea = (width: number, height: number = 10): number => {
    return width * height;
}
console.log(getRectangleArea(5)); // 50
console.log(getRectangleArea(5, 20)); // 100

// デフォルト値は引数の後ろに配置する必要がある
// 以下はエラーになる
// const invalidFunction = (a: number = 5, b: number): number => {
//     return a + b;
// }
// => デフォルト値が設定されている変数をスキップする機能がないため
