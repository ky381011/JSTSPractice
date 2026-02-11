export {};

// 匿名関数や無名関数とよばれる

const getRectangle = function (height: number, width: number): number {
    return height * width;
};

console.log(getRectangle(10, 5)); // 50
