// [15장] let, const 키워드와 블록 레벨 스코프 - 1번 과제
// 지금까지 했던 코드를 기반으로 let, const 키워드를 적절히 사용해서 var 키워드 대신 써보세요.
// 기존 코드 수정 사항 127 ~ 131번째 줄 var에서 let으로 수정

const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

// 사용자 입력을 받는 함수
function getInput() {
    rl.question('원하는 프로그램을 입력하세요 (계산기 - cal, 팩토리얼 - fac, 369게임 - 369, 종료 - exit) : ', (input) => {
        if (input.toLocaleLowerCase() === "exit") {
            rl.close();
            return;
        }

        // 입력 문자열에서 공백 제거
        input = input.split(" ").join("");

        switch (String(input.toLowerCase())) {
            case 'cal':
                calculator();
                break;
            case 'fac':
                factorialStart();
                break;
            case '369':
                threeSixNineStart();
                break;
            case "exit":
                rl.close();
                return;
            default:
                console.error('잘못된 입력입니다!!!');
        }
        // 다음 입력을 기다리기 위해 setTimeout으로 getInput() 호출
        setTimeout(function () {
            getInput();
        }, 1000);
    });
}

// 계산기 프로그램 함수
function calculator() {
    let num1;
    let num2;
    let operator;
    rl.question('각 입력 사이에는 공백을 입력해주세요 (입력 가능한 연산자 : +, -, *, /, %) : ', (input) => {

        // 입력 문자열에서 공백 제거
        input = input.split(" ").join("");

        let category = input.split("");

        if (category.length !== 3) {
            console.error('잘못된 입력입니다. 입력 형식은 "숫자 연산자 숫자" 여야 합니다.');
            // 다시 입력을 받기 위해 setTimeout으로 getInput() 호출
            setTimeout(function () {
                getInput();
            }, 1000);
            return; // 함수 종료
        }

        operator = String(category[1]);
        num1 = Number(category[0]);
        num2 = Number(category[2]);

        if (isNaN(num1) || isNaN(num2)) {
            console.error('숫자가 아닌 값이 포함되어 있습니다.');
            // 다시 입력을 받기 위해 setTimeout으로 getInput() 호출
            setTimeout(function () {
                getInput();
            }, 1000);
            return; // 함수 종료
        }

        switch (operator) {
            case "+":
                console.log('------------------------------');
                console.log('더하기 연산결과 : ' + add(num1, num2));
                console.log('------------------------------');
                break;
            case "-":
                console.log('------------------------------');
                console.log('빼기 연산결과 : ' + sub(num1, num2));
                console.log('------------------------------');
                break;
            case "*":
                console.log('------------------------------');
                console.log('곱하기 연산결과 : ' + mul(num1, num2));
                console.log('------------------------------');
                break;
            case "/":
                if (num2 === 0) {
                    console.error('0으로 나눌 수 없습니다.');
                    // 다시 입력을 받기 위해 setTimeout으로 getInput() 호출
                    setTimeout(function () {
                        getInput();
                    }, 1000);
                    return; // 함수 종료
                } else {
                    console.log('------------------------------');
                    console.log('나누기 연산결과 : ' + div(num1, num2));
                    console.log('------------------------------');
                }
                break;
            case "%":
                console.log('------------------------------');
                console.log('나머지 연산결과 : ' + rem(num1, num2));
                console.log('------------------------------');
                break;
            default:
                console.error('지원하지 않는 연산자입니다.');
                break;
        }

        // 다시 입력을 받기 위해 setTimeout으로 getInput() 호출
        setTimeout(function () {
            getInput();
        }, 1000);
    });
}

let add = (x, y) => x + y;  // 기존 var에서 let으로 수정
let sub = (x, y) => x - y;  // 기존 var에서 let으로 수정
let mul = (x, y) => x * y;  // 기존 var에서 let으로 수정
let div = (x, y) => x / y;  // 기존 var에서 let으로 수정
let rem = (x, y) => x % y;  // 기존 var에서 let으로 수정

// 팩토리얼 계산 시작 함수
function factorialStart() {
    rl.question('숫자를 입력해주세요 : ', (input) => {
        if (isNaN(input)) {
            console.error("잘못된 입력입니다.");
            // 다음 입력을 기다리기 위해 setTimeout으로 getInput() 호출
            setTimeout(function () {
                getInput();
            }, 1000);
        } else {
            console.log('------------------------------');
            console.log('팩토리얼 연산결과 : ' + factorial(input));
            console.log('------------------------------');
}

        // 다시 입력을 받기 위해 setTimeout으로 getInput() 호출
        setTimeout(function () {
            getInput();
        }, 1000);
    });
}

// 팩토리얼 계산 함수
function factorial(n) {
    if (n == 1 || n == 0)
        return 1;

    return n * factorial(n - 1);
}

function threeSixNineStart()
{
    rl.question('숫자를 입력해주세요 : ', (input) => {
        if (isNaN(input))
        {
            console.error("잘못된 입력입니다.");
            setTimeout(function () {
                getInput();
            }, 1000);
        }
        else
        {
            console.log('------------------------------');
            console.log('       369 게임 실행 결과      ');
            console.log('------------------------------');
            threeSixNine(input);
        }
        setTimeout(function () {
            getInput();
        }, 1000);
    });
}

function threeSixNine(input)
{
    let i;
    for (i = 1; i <= input; i++)
    {
        let count = 0;
        let result = i;
        let num = i.toString().split("")

        num.forEach(function(number)
        {

            if (number == 3)
            {
                count++;
            }

            if (number == 6)
            {
                count++;
            }

            if (number == 9)
            {
                count++;
            }
        });

        if (count != 0)
        {
            result = '';
            for (let j = 0; j < count; j++)
            {
                result += '짝'
            }
        }

        console.log(result);
    }
    console.log('------------------------------');
}

// 프로그램 시작
getInput();

rl.on("close", () => {
    console.log("프로그램을 종료합니다.");
    process.exit();
});