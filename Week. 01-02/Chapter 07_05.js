// [7장] 연산자 - 5번 과제
// `typeof` 연산자를 사용하여 아래 반환값들을 모두 나타내보시오.
// `string`, `number`, `boolean`, `underfined`, `symbol`, `object`, `function`
console.log(typeof 'a');    // string
console.log(typeof 1);      // number
console.log(typeof true);   // boolean
console.log(typeof a);      // underfined

var symbol = Symbol("symbol");
console.lon(typeof symbol); // symbol

const person = { name : "Kyung"};
console.log(typeof person); // object

console.log(typeof Symbol); // function