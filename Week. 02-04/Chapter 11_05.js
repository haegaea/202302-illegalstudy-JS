// [11장] 대신 하는 얕은 복사 깊은 복사
// Lodash 라이브러리에 대해서 조사하고, cloneDeep 메서드도 조사해보세요.
const lodash = require("lodash");

const obj = {
	a: 1,
	b: {
		c: 2,
	},
	func: function () {
		return this.a;
	},
};

const newObj = lodash.cloneDeep(obj);

newObj.b.c = 3;
console.log(obj);
console.log(obj.b.c === newObj.b.c);

// 출력 결과
// { a: 1, b: { c: 2 }, func: [Function: func] }
// false