const num = 6;

// 入れ子構造はなるべく少なくするべき
// if(num % 2 === 0) {
//     if (num % 3 === 0) {
//         console.log(`${num}は2の倍数かつ3の倍数です`);
//     }
// }

if (num % 2 === 0 && num % 3 === 0) {
    console.log(`${num}は2の倍数かつ3の倍数です`);
}


