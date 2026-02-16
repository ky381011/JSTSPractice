import {myName, age as myAge} from './sample.js'; // tscでコンパイルしたjsファイルをインポートする場合は、拡張子も必要
console.log(myName); 
console.log(myAge);
// asはimport、export両方で使用できる。インポートする際に、名前を変更してインポートすることができる。