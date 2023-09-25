[9장] 타입 변환과 단축 평가(심화)
======================
### 아래 설명에 따라 단축 평가를 이용하여 아래의 if문처럼 작동하는 true 값 여부를 판별하는 코드를 빈칸에 알맞게 작성해보시오. 결과도 내시길 바랍니다

<br>

- 빈칸의 길이와 정답의 길이가 상이할 수 있습니다.

```JavaScript
// 문제
var isThereMessage = true;
var message ='';
if(isThereMessage) message = '멘토는 죽어있다.';
message = _______ _______ _______ ;
console.log(message);
```

```JavaScript
// 정답
var isThereMessage = true;
var message ='';
if(isThereMessage) message = '멘토는 죽어있다.';
message = isThereMessage && '멘토는 죽어있다.';
console.log(message);
```

```JavaScript
// 결과
멘토는 죽어있다.
```