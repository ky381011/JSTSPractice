const fs = require('fs'); // fsモジュールを読み込む
const path = require('path'); // pathモジュールを読み込む

console.log('__dirname:', __dirname); // このファイル自体が存在する現在のディレクトリの絶対パスを表示

console.log("+       => " + __dirname + "../dist/sample.txt")
const distPath = path.resolve(__dirname, "../dist/sample.txt")
console.log('resolve =>', distPath); // ../dist/sample.txtの絶対パスを表示