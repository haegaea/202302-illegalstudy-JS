[12장] 함수 - 추가 과제 1번 과제
======================
### CommonJS, ES6 차이점 알아보기

<br>

- module
    - 기존 : html 파일에서 `<script>` 태그를 이용해서 필요한 자바스크립트 파일을 호출
        - 호출된 자바스크립트들이 서로 다른 파일들임에도 상호의존적이고, 파일들을 호드하는 순서도 중요해짐
    - 이러한 점을 보완하기 위해서 등장한것이 모듈(module) 시스템
    - 외부에서 사용할 수 있게 특정 함수나 오브젝트 등을 모듈화하는 방식
    - 모듈을 정의하기 위한 문법 다수 존재
        - 대표적으로 CommonJs, ES6, AMD (Asynchronous Module Definition) 등이 존재

<br>

- CommonJS
    - 내보내기 : exports (module.exports 참조) 및 module.exports
    - 가져오기 : require
    - Node.js 표준
    - 모듈 로드 방식 : 동기

<br>

- ES6
    - 내보내기 : named export 및 export default
    - 가져오기 : import
    - React 표준, Node.js 지원 (완벽 호환 X)
    - 적용
        - Node.js : package.json -> `{ "type" : "module" }`
        - React : `type="module"` 기술 필요
    - 모듈 로드 방식 : 비동기