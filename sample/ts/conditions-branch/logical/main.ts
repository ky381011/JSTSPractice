// && 論理AND
console.log("&& 論理AND");
console.log("true  && true  :", true && true);   // true
console.log("true  && false :", true && false);  // false
console.log("false && true  :", false && true);  // false
console.log("false && false :", false && false); // false

// || 論理OR
console.log("|| 論理OR");
console.log("true  || true  :", true || true);   // true
console.log("true  || false :", true || false);  // true
console.log("false || true  :", false || true);  // true
console.log("false || false :", false || false); // false

// ! 論理NOT
console.log("! 論理NOT");
console.log("!true  :", !true);   // false
console.log("!false :", !false);  // true

// ! && ||
console.log("! && || の組み合わせ");
console.log("true  && false || true  :", true && false || true);   // true
console.log("true  && (false || true) :", true && (false || true));  // true
console.log("!(true  && false) || true  :", !(true && false) || true);  // true
console.log("!(true  && (false || true)) :", !(true && (false || true))); // false  