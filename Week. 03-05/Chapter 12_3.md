[12장] 함수 - 3번 과제
======================
### 선언문에서는 **함수 이름을 생략할 수 없다.**

### 만약 함수 이름을 생략하면 나오는 **에러**는 어떤 것인지 확인해보세요.

```JavaScript
function (x, y) {
		return x + y;
}
```

<br>

- SyntaxError: Function statements require a function name 오류 발생
- 위의 코드는 함수 표현식이 아닌 함수 선언문의 형태를 가지고 있기 때문에 SyntaxError가 발생