const array = [1, 2, 3, 4, 5];
const newArray = [];

for (let i = 0; i < array.length; i++) {
    newArray.push(array[i] * 2);
}
console.log("従来のfor文: ", newArray);

// mapメソッドは配列のすべての値に対して同じ処理を実行し、新しい配列を返す
const mapArray = array.map(num => num * 2);
console.log("mapメソッド: ", mapArray);

// 5以上を配列に含める
// 1. 新しい配列を作る
const newArray2 = array.map(num => num * 2);

// 2. filterメソッドで条件に合う値だけを抽出する
const newArray3 = newArray2.filter(num => num >= 5);
console.log("5以上の値: ", newArray3);

// 3. チェーンで書く
const newArray4 = array
    .map(num => num * 2)
    .filter(num => num >= 5);
console.log("チェーンで5以上の値: ", newArray4);

// 分割代入
// 配列
const A = [10, 20];
const [a, b] = A;
console.log("分割代入: ", a, b);

// オブジェクト
const O = { x: 100, y: 200 };
const {x, y} = {y : 200, x: 100};
console.log("オブジェクトの分割代入: ", x, y);

// 配列は順番が重要
const fnArray = ([country, state, city ]) => {
    console.log("==配列の分割代入==");
    console.log("国: ", country);
    console.log("州: ", state);
    console.log("市: ", city);
};

fnArray(['Japan', 'Tokyo', 'Shibuya']);