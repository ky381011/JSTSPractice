// require('./calc'); // calcモジュールを読み込む
// // 実行するファイルそのものからの相対パスで指定する
// // 拡張子.jsは省略可能
// const plus = require('./calc');
// const result = plus(3, 5); // calcモジュールのplus関数を使用する
// console.log('3 + 5 =', result); // 結果を表示

const calc = require('./calc'); // calcモジュールを読み込む
console.log(calc);

const result1 = calc.plus(10, 7); // calcモジュールのplus関数を使用する
console.log('10 + 7 =', result1); // 結果を表示
const result2 = calc.minus(10, 7); // calcモジュールのminus関数を使用する
console.log('10 - 7 =', result2); // 結果を表示

const {plus} = require('./calc'); // calcモジュールを読み込む
console.log(plus);

const result3 = plus(20, 15); // calcモジュールのplus関数を使用する
console.log('20 + 15 =', result3); // 結果を表示