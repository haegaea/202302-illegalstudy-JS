// [15장] let, const 키워드와 블록 레벨 스코프 - 1번 과제
// 하단의 코드를 실행하고, 에러가 난다면 왜 나는지 설명하시오.

let a = 1;

{
		let a = 2;
		let b = 3;
}

console.log(a);
console.log(b);

// 출력 결과
// 1
// ReferenceError: b is not defined

// b는 {}안에 선언되었기 때문에 9번 줄에서 스코프가 변경되면서 전역 스코프에서 console.log(b);가 실행되었기에 b가 정의되지 않았다고 오류가 발생한다.