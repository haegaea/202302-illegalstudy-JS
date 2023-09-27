// [11장] 대신 하는 얕은 복사 깊은 복사
// 아래의 코드를 실행해보고 이유를 생각해보시오.
const original = [
    [18, 18, 18, 18],
    [19, 19, 19, 19],
    [20, 20, 20, 20],
    [21, 21, 21, 21],
    ];
    
    const copy = original.slice();
    
    console.log(JSON.stringify(original) === JSON.stringify(copy));
    
    copy[0][0] = 99;
    copy[2].push("02");
    
    console.log(JSON.stringify(original) === JSON.stringify(copy));
    console.log(original);
    console.log(copy);

// 실행 결과
/*
true
true
[
  [ 99, 18, 18, 18 ],
  [ 19, 19, 19, 19 ],
  [ 20, 20, 20, 20, '02' ],
  [ 21, 21, 21, 21 ]
]
[
  [ 99, 18, 18, 18 ],
  [ 19, 19, 19, 19 ],
  [ 20, 20, 20, 20, '02' ],
  [ 21, 21, 21, 21 ]
]
*/

// 이렇게 나오는 이유
// slice()를 통해서 하는 복사가 얕은 복사이기 때문에 복사한 변수의 값을 변경하면 원본 변수의 값도 변겨오디기때문에 비교를 해보면 true가 출력이 되고 변수의 값을 출력하면 2개의 변수의 값이 동일하게 출력된다.