// [7장] 연산자 - 4번 과제
// 아래의 결과는 왜 다를까요?
- 0 === 0 ;         // true, 값과 타입이 같음
Object.is(-0,0);    // false, 0과 -0을 다른 값으로 간주함.

NaN === NaN;        // false, NaN은 자기 자신과도 같지 않음
Object.is(NaN,NaN); // true, NaN이 자기 자신과 일치하기 때문

// Object.is() 함수 :  ECMAScript 6에서 도입된 메서드, 값이 같을 때 true를 반환, 더 엄격한 동등성 비교를 수행