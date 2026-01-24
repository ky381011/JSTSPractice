// スプレッド演算子 : ...
const nums = [3, 1, 4, 1, 5, 10, 2, 6];

const maxValue = Math.max(...nums);
console.log("最大値: ", maxValue);

const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
// 直接配列を代入すると参照がコピーされるだけで配列は同じものになる
const newArr = arr1
// スプレッド演算子を用いると完全に独立した配列を作成できる
const duplicatedArr = [...arr1];
const combinedArr = [...arr1, ...arr2];
console.log("配列の複製: ", duplicatedArr);
console.log("配列の結合: ", combinedArr);
console.log("arr1 == newArr: ", arr1 === newArr); // true
console.log("arr1 == duplicatedArr: ", arr1 === duplicatedArr); // false
