// [14장] 전역 변수의 문제점 - 1번 과제
// 아래 콘솔로그에서 무엇이 나올지 실행해보기


var x = 'globaaaaal';

function banana() {
		console.log(x);   // 여기선 뭐가 나올까?
		var x = 'locccccccccccccccccal';
}

banana();
console.log(x);

// 실행 결과
// undefined
// globaaaaal

// 이유
// banana() 함수가 호출되면서 변수 호이스팅으로 var x 선언, 아직 값은 undefined
// console.log(x); 실행, undefined 출력
// 변수 x에 'locccccccccccccccccal' 값 할당
// 이후 banana() 함수 종료
// 전역 스코프에서 console.log(x); 실행, 'globaaaaal' 출력