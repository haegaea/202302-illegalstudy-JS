[7장] 연산자 - 2번 과제
==============
### 암묵적 타입 변환 또는 타입 강제 변환에 대해서 알아보시오.

- 프로그래밍 언어에서 데이터 타입을 자동으로 변환하는 것
- 서로 다른 데이터 타입 간의 연산이나 값을 비교할 때 발생

<br>

### 문자열과 숫자 간의 연산

```JavaScript
console.log(5 + '5') // 문자열 "55"으로 변환됨
```

<br>

### 논리 연산에서의 값 변환

```JavaScript
var num = 5;
if (num) {
  // 이 블록은 실행됨, num이 0이 아니므로 true로 간주
}
```

- if 문에서는 0이 아닌 숫자는 true, 0은 false로 간주되어 암묵적 타입 변환이 발생한다.

<br>

### 비교 연산자에서의 값 변환

```JavaScript
var num = 5;
var str = "5";
if (num == str) {
  // 이 블록은 실행됨, 값이 같으므로 true로 간주
}
```

<br>

### Boolean() 함수 호출

```JavaScript
var str = "Hello";
var boolValue = Boolean(str); // true로 변환됨
```

- Boolean() 함수는 인자를 논리 값으로 변환하며, 문자열은 비어 있지 않으므로 true로 간주된다.