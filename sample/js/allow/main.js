function doubleNumber(num) {
    return num * 2;
}
console.log("基本 : ", doubleNumber(5)); // Output: 10

const doubleNumberArrow = (num) => num * 2;
console.log("アロー関数 : ", doubleNumberArrow(5)); // Output: 10

const doubleNumberArrowObj = (num) => ({ result: num * 2 });
console.log("アロー関数でオブジェクトを返す : ", doubleNumberArrowObj(5)); // Output: { result: 10 }