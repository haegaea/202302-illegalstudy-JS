[선택 과제] 단축 평가 코드 작성
============================

<br>

```JavaScript

const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

function getInput()
{
    rl.question(`숫자를 입력하세요 (1 이상 ~ 9999 이하의 홀수, 종료하려면 'exit'를 입력하세요): `, (input) => {
        
        if (input.toLowerCase() === "exit")
        {
            rl.close();
            return;
        }

        const num = Number(input);

        if (isNaN(num) || num < 1 || num > 9999)    // 단축 평가 사용, 조건 중 하나라도 만족하면 빠르게 참으로 판단하고 추가적인 연산을 수행하지 않음
        {  
            console.log(`올바른 홀수를 입력하세요 (1 이상 ~ 9999 이하의 홀수).`);
        }
        else
        {
            short_circuit_evaluation(num);
        }

        getInput();
    });
}

function short_circuit_evaluation(num)
{
    if (num >= 1 && num <= 9999 && num % 2 === 1)   // 단축 평가 사용, 조건 중 하나라도 만족하지 않으면 빠르게 거짓으로 판단하고 추가적인 연산을 수행하지 않음
    {
        console.log(`입력된 숫자 ${num}은(는) 올바른 홀수입니다.`);
    }
    else
    {
        console.log(`입력된 숫자 ${num}은(는) 올바른 홀수가 아닙니다.`);
    }
}

getInput();

rl.on("close", () => {
    console.log("프로그램을 종료합니다.");
    process.exit();
});
```