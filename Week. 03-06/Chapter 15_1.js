// [15장] let, const 키워드와 블록 레벨 스코프 - 1번 과제
// 아래 콘솔로그의 결과값을 추론해보세요.

var x = 1;
var y = 1;

var x = 100;
var y;

console.log(x);
console.log(y);

// 추론 결과
// 100
// undefined

// 실행 결과
// 100
// 1