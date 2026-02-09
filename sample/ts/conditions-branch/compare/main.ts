// 以上
const a = 100;
if (a >= 100) {
    console.log("100以上");
}

// より大きい
const b = 101;
if (b > 100) {
    console.log("100より大きい");
}

// 以下
const c = 100;
if (c <= 100) {
    console.log("100以下");
}

// 未満
const d = 99;
if (d < 100) {
    console.log("100未満");
}

// 等しい
const e = 100;
if (e === 100) {
    console.log("100と等しい");
}

// 等しくない
let f = 99;
if (f !== 100) { // constの場合は条件式の結果が常に一定になるためエラーになる
    console.log("100と等しくない");
}