// 非同期処理
let a = 0;
console.log("Start:", a);

new Promise((resolve, reject) => {
// 1秒後に a に 10 を代入する非同期処理
setTimeout(() => {
  a = 10;
  console.log(a);
  resolve(a);
}, 1000);
}).then((x) => {
  console.log(x);
  return x;
}).then((y) => {
  console.log(y);
}).catch((c) => {
  console.log("Catachが実行されました", c);
});