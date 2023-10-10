[13장] 스코프 - 1번 과제
======================

### Lexical Environment는 무엇을 뜻하는 걸까?

- 스코프와 변수를 관리하는 방법 중 하나
- `Lexical Environment`는 **Environment Record,  Outer Environment Reference** 이렇게 두 부분으로 구성

<br>

### Environment Record
- 현재 컨텍스트에서 선언된 모든 로컬 변수, 함수 선언, 매개변수 등을 저장하는 데 사용

<br>

### Outer Environment Reference
- 상위 스코프, 즉 바깥쪽 컨텍스트에 대한 참조
- 이것은 스코프 체인을 형성하는 데 도움이 되며, 하나의 Lexical Environment가 바깥쪽 컨텍스트의 변수와 함수에 접근할 수 있게 해줌

<br>

### 컨택스트(context)
- 실행 중인 코드의 실행 환경
- 일반적으로 함수 또는 블록 레벨에서 생성