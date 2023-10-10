// [14장] 전역 변수의 문제점 - 4번 과제
// 전역변수 + 지역변수 관련된 해석을 본인이 직접 30줄 이상의 코드를 작성해서 서술해보세요.

let x = 1;

function outer()
{
    let x = 10;
    function inner()
    {
        let x = 100;
        console.log(x);
    }
    inner();
    console.log(x);
}

outer();
console.log(x);

function outer2()
{
    function inner()
    {
        let b = null;
        if (typeof b !== 'undefined')
            console.log('b is defined');
        else
            console.log('b is not defined');
    }
    inner();
    if (typeof b !== 'undefined')
        console.log('b is defined');
    else
        console.log('b is not defined');
}

outer2();