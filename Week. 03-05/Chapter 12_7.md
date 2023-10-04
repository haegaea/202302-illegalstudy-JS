[12장] 함수 - 7번 과제
======================
### **Call by Reference, Call by Value**에 대해 자유롭게 조사하고 공부해오기.

### 분량이나 형태는 상관이 없으나 **본인이 공부했다는 티**는 나야 합니다.

<br>

- Call by Reference(참조에 의한 호출)
    - 함수 호출시 인자로 전달되는 변수의 레퍼런스를 전달
    - 따라서 함수 안에서 인자의 값이 변경되면, 아규먼트로 전달된 객체의 값도 함께 변경

```JavaScript
function modifyArray(arr) {
    arr.push(4);
    console.log(arr);
}
let myArray = [1, 2, 3];
modifyArray(myArray); // myArray는 [1, 2, 3, 4]로 변경됨
```

<br>

- Call by Value(값에 의한 호출)
    - 함수 호출시 전달되는 변수의 값을 복사하여 함수의 인자로 전달
    - 복사된 인자는 함수 안에서 지역적으로 사용되는 local value의 특성
    - 따라서 함수 안에서 인자의 값이 변경되어도, 원본 값은 변경되지 않음

```JavaScript
function increment(x) {
    x = x + 1;
    console.log(x);
}

let num = 5;
increment(num); // num은 여전히 5로 유지됨
```