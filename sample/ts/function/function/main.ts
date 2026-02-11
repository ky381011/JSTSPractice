// 四角形の面積を求める関数
function getRectangle(height: number, width: number): number { // 戻り値の型は推論される
    return height * width;
}

console.log(getRectangle(10, 5)); // 50
// console.log(getRectangle('abc', 5)); // エラー
// 型 'string' の引数を型 'number' のパラメーターに割り当てることはできません。

function hello(): void { // void型は関数の戻り値がないことを示す
    console.log("Hello TypeScript");
}

hello(); // Hello TypeScript