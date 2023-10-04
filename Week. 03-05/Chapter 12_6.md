[12장] 함수 - 6번 과제
======================
### 아래의 함수를 실행해보고 그 결과 값을 적으시오.

<br>

```JavaScript
function add(x, y){
		console.log(x,y);
		return x+y;
}

add(2, 5);
console.log(x, y);
```

<br>

- 결과값
```
2 5
ReferenceError: x is not defined
```

<br>

```JavaScript
function add(x, y) {
		return x + y;
}

console.log(add(2));
```

<br>

- 결과값
```
NaN
```

<br>

```JavaScript
function add(x, y) {
		console.log(arguments);
		return x + y;
}

console.log(add(2,5,10));
```

<br>

- 결과값
```
[Arguments] { '0': 2, '1': 5, '2': 10 }
7
```