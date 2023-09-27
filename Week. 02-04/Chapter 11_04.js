// [11장] 대신 하는 얕은 복사 깊은 복사
// 아래의 코드를 실행해보고 이유를 생각해보시오.
function deepCopy(obj) {
    if (obj === null || typeof obj !== "object") {
            return obj;
    }

    let copy = {};
    for (let key in obj) {
            copy[key] = deepCopy(obj[key]);
    }
    return copy;
}

const obj = {
    a: 1,
    b: {
            c: 2,
    },
    func: function () {
            return this.a;
    },
};

const newObj = deepCopy(obj);

newObj.b.c = 3;

console.log(obj);
console.log(obj.b.c === newObj.b.c);

// 출력 결과
// { a: 1, b: { c: 2 }, func: [Function: func] }
// false