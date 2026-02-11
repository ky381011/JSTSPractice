const pi = 3.14;
const getCircle = (radius: number): number => { // アロー関数
    return pi * radius ** 2;
}

console.log(getCircle(5)); // 78.5

// 一行で書くこともできる
const getTriangle = (base: number, height: number): number => 0.5 * base * height;
console.log(getTriangle(10, 5)); // 25