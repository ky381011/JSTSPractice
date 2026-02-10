// グローバル化を防ぐためにexport{}を追加
export {};

let num = 1;

switch (num) {
  case 1:
    console.log('Gold') ;
    break;
  case 2:
    console.log('Silver');
    break;
  case 3:
    console.log('Bronze');
    break;
  default:
    console.log(`${num}th place`);
    break; // defaultのbreakは省略可能
}