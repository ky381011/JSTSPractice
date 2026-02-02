// require('./calc'); // calcモジュールを読み込む
// // 実行するファイルそのものからの相対パスで指定する
// // 拡張子.jsは省略可能
// const plus = require('./calc');
// const result = plus(3, 5); // calcモジュールのplus関数を使用する
// console.log('3 + 5 =', result); // 結果を表示

import { plus, minus } from './calc.js';

const result1 = plus(3, 5);
console.log('3 + 5 =', result1);

const result2 = minus(10, 7);
console.log('10 - 7 =', result2);