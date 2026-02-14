for(let i = 0; i < 3; i++) {
    for(let j = 0; j < 3; j++) {
        console.log(`i: ${i}, j: ${j}`);
    }
}

// 2次元配列の要素を取り出す
const scores = [
    [80, 90, 100],
    [70, 85, 95],
    [60, 75, 85]
];
for(let i = 0; i < scores.length; i++) {
    for(let j = 0; j < scores[i].length; j++) {
        console.log(`scores[${i}][${j}]: ${scores[i][j]}`);
    }
}