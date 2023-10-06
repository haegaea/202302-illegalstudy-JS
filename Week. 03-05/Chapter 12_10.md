[12장] 함수 - 10번 과제
======================
### 아래의 코드 중, 어떤 것이 순수 함수이며 어떤 것이 비순수 함수인지 서술하시오.

<br>

```JavaScript
// 순수 함수
var count = 0;

function increase(n) {
		return ++n;
}

count = increase(count);
console.log(count);

count = increase(count);
console.log(count);
```

<br>

```JavaScript
// 비순수 함수
var count = 0;

function increase() {
		return ++count;
}

count = increase(count);
console.log(count);

count = increase(count);
console.log(count);
```