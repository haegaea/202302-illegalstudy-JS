// [7장] 연산자 - 1번 과제
// 아래의 코드 실행해보기.
var a = '1';

console.log(+a, typeof +a); // 1 'number'
console.log(a, typeof a);   // 1 string

a = true;
console.log(+a, typeof +a); // 1 'number'
console.log(a, typeof a);   // true 'boolean'

a = false;
console.log(+a, typeof +a); // 0 'number'
console.log(a, typeof a);   // false 'boolean'

a = 'Hi';
console.log(+a, typeof +a); // NaN 'number'
console.log(a, typeof a);   // Hi string