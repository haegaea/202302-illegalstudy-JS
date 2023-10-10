[14장] 전역 변수의 문제점 - 3번 과제
======================

### 아래 키워드로 전역변수 사용 억제법 찾아보기

- 즉시 실행 함수
- 네임스페이스 객체
- 모듈 패턴
- ES6 모듈

<br>

### 즉시 실행 함수 (IIFE, Immediately Invoked Function Expression)
- 즉시 실행 함수는 정의되자마자 즉시 실행되는 JavaScript 함수
- 이 방법을 사용하면 함수 내부에 변수를 캡슐화하여 전역 스코프에서 변수 이름이 충돌하는 것을 방지할 수 있음

```JavaScript
(function() {
    var a = 10;
    console.log(a); // 10
})();

console.log(typeof a);  // "undefined"
```

<br>

### 네임스페이스 객체
- 네임스페이스는 코드 내에 있는 특정 그룹이나 범주의 코드를 묶어주는 역할
- 객체를 사용하여 네임스페이스를 만들고, 그 안에 변수와 함수를 선언함으로써 전역 스코프의 오염을 줄일 수 있습니다.

```JavaScript
var MyApp = MyApp || {};

MyApp.namespace1 = {
    a: 10,
    b: 20
};

MyApp.namespace2 = {
    c: 30,
    d: 40
};

console.log(MyApp.namespace1.a);    // 10
```

<br>

### 모듈 패턴
- 모듈 패턴은 자바스크립트에서 클래스와 비슷한 효과를 내는 패턴
- 클로저와 즉시 실행 함수를 사용하여 private와 public 멤버를 정의할 수 있음

```JavaScript
var myModule = (function() {
    var privateVar = 10;

    function privateMethod() {
        console.log('This is private!');
    }

    return {
        publicVar: 20,
        publicMethod: function() {
            privateMethod();
            console.log('This is public!');
        }
    };
})();

myModule.publicMethod(); // "This is private!" 그리고 "This is public!"
console.log(myModule.publicVar); // 20
console.log(myModule.privateVar); // undefined
```

<br>

### ES6 모듈
- ES6 부터 JavaScript는 import와 export 키워드를 사용한 모듈 시스템을 지원
- 각 모듈은 자체 스코프를 가지므로 전역 스코프를 오염시키지 않음

```JavaScript
// myModule.js
const privateVar = 10;

export const publicVar = 20;

export function publicMethod() {
    console.log('This is public!');
}

function privateMethod() {
    console.log('This is private!');
}
```
```JavaScript
// main.js
import { publicVar, publicMethod } from './myModule.js';

publicMethod(); // "This is public!"
console.log(publicVar); // 20
console.log(privateVar); // Error: privateVar is not defined
```