// falsy => 真偽値において false と評価される値
// truthy => 真偽値において true と評価される値

/*
false
0 (数値のゼロ)
0n (BigInt のゼロ)
"" (空文字列)
null
undefined
NaN
*/

const value = "";
let result = value ? "Truthy" : "Falsy";
console.log("result:", result); // "Falsy"

const falsy = 0;
const truthy = 1;
console.log(Boolean(falsy)); // false
console.log(Boolean(truthy)); // true

// 論理積について
console.log("==論理積 (AND) の場合==");
console.log("\"\" && \"Hello\":", "" && "Hello" ? "Truthy" : "Falsy"); // "Falsy"
console.log("42 && \"Hello\":", 42 && "Hello" ? "Truthy" : "Falsy"); // "Truthy"

// 論理和について
console.log("==論理和 (OR) の場合==");
console.log("\"\" || \"Hello\":", "" || "Hello" ? "Truthy" : "Falsy");
console.log("0 || null:", 0 || null ? "Truthy" : "Falsy"); // "Falsy"
console.log("42 || \"Hello\":", 42 || "Hello" ? "Truthy" : "Falsy"); // "Truthy"