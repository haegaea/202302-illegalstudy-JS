[12장] 함수 - 5번 과제
======================
### 하단의 에러는 왜 날까?

<br>

```JavaScript
var add1 = (function() {
		var a = 10;
		return function (x, y){
				return x + y + a;
		};
}());

console.log(add1(1,2)); // 13

var add2 = (function() {
		var a = 10;
		return new Function('x', 'y', 'return x + y + a;')
}());

console.log(add2(1,2)); // ReferenceError: a is not defined
```
- **new Function('x', 'y', 'return x + y + a;')** 이 함수가 전역으로 실행되기 때문에 add2 함수 내부에 선언된 a 변수에 대한 접근 할 수 없기 때문이다.