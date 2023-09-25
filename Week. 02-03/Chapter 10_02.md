[10장] 객체 리터럴
==================
### 브라우저 환경과 Nodejs 환경을 준비하고 아래의 코드를 돌려봅시다.

<br>

- 코드 전체를 한 번에 실행 시에 **SyntaxError: Unexpected string** 오류가 발생하기 때문에 한 줄 씩 실행하였습니다.

<br>

```JavaScript
// 브라우저 환경
var wind = {
    'last-name' : 'park',
    1: 10
};
    
wind.'last-name';   // SyntaxError: Unexpected string
wind.last-name;     // NaN
    
wind[last-name];    // ReferenceError: last is not defined
wind['last-name'];  // 'park'
    
wind.1;             // SyntaxError: Unexpected number
wind.'1';           // SyntaxError: Unexpected string
wind[1];            // 10
wind['1'];          // 10
```

<br>

```JavaScript
// Nodejs 실행 결과
var wind = {
    'last-name' : 'park',
    1: 10
};
    
wind.'last-name';    // SyntaxError: Unexpected string
wind.last-name;      // ReferenceError: name is not defined
    
wind[last-name];     // ReferenceError: last is not defined
wind['last-name'];   // 정상 실행
    
wind.1;              // SyntaxError: Unexpected number
wind.'1';            // SyntaxError: Unexpected string
wind[1];             // 정상 실행
wind['1'];           // 정상 실행
```