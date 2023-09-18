// 각각의 console.log의 출력 값을 알아오시오.
console.log(a);
var a;
a = 11;
console.log(a);

// 출력값 1. undefined, 2. 11
// 1번이 출력값이 undefined인 이유는 호이스팅 때문에 var a로 선언은 먼저 되었지만 첫번쨰 console.log가 출력되기 전에 a에 값이 할당되지 않았기 때문에 undefined가 출력되었다.
// 그 다음에 11이 할당되어서 2번째 console.log에서는 11이 출력되었다.

// 각각의 console.log의 출력 값을 알아오시오.
console.log(a);
a = 10;
var a;
console.log(a);

// 출력값 1. undefined, 2. 10
// 1번째 출력값이 undefined인 이유는 호이스팅 때문에 var a로 선언이 먼저 되었지만 첫번쨰 console.log가 출력되기 전에 a에 값이 할당되지 않았기 때문에 undefined가 출력되었다.
// 그 다음에 10이 할당되어서 2번째 console.log에서는 10이 출력되었다.
