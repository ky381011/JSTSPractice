// ファイルへの書き込み
// __dirname, __filename
const fs = require('fs'); // fsモジュールを読み込む

console.log('__dirname:', __dirname); // このファイル自体が存在する現在のディレクトリの絶対パスを表示
console.log('__filename:', __filename); // このファイル自体の絶対パスを表示

// fs.writeFileSync('./test.txt', 'Hello Node.js!'); // 相対パスはnodeコマンドを実行したディレクトリからのパス

fs.writeFileSync(__dirname + '/test.txt', 'Hello Node.js!'); // __dirnameを使って絶対パスで指定
