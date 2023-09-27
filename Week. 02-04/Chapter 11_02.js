// [11장] 대신 하는 얕은 복사 깊은 복사
// 아래의 코드를 실행해보고 이유를 생각해보시오.


/*
const obj = { a: 1 };
const newObj = Object.assign({}, obj);
newObj.a = 2;
console.log(obj);
console.log(obj === newObj);
*/
// 출력 결과
// { a: 1 }
// false
// 1차원 객체의 경우 assign()을 사용하면 깊은 복사가 되기 때문에 비교했을 때 false가 출력된다

/*
const obj = {
a: 1,
b: {
c: 2,
},
};
const newObj = Object.assign({}, obj);
newObj.b.c = 3;
console.log(obj);
console.log(obj.b.c === newObj.b.c);
*/
// 출력 결과
// { a: 1, b: { c: 3 } }
// true
// 2차원 객체의 경우 assign()을 사용하면 얕은 복사가 되기 때문에 비교했을 때 true가 출력된다