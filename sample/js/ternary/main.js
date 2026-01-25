// 参考演算子
const a = true;

let resultA = a ? 10 : -10;
console.log("resultA:", resultA);

const b = false;
let resultB = b ? 10 : -10;
console.log("resultB:", resultB);

function getResult(){
  return a ? "true" : "false";
}

console.log("getResult():", getResult());