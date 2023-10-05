// [12장] 함수 - 추가 과제 3번 과제
// function을 사용하여 120줄 이상 코드 작성하기
// 콜백 필수, 재귀함수 필수, 화살표 생성 방식 필수

const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

// 사용자 입력을 받는 함수
function getInput() {
    rl.question('원하는 프로그램을 입력하세요 (계산기 - cal, 팩토리얼 - fac, 종료 - exit) : ', (input) => {
        if (input.toLocaleLowerCase() === "exit") {
            rl.close();
            return;
        }

        // 입력 문자열에서 공백 제거
        input = input.split(" ").join("");

        switch (input.toLowerCase()) {
            case 'cal':
                calculator();
                break;
            case 'fac':
                factorialStart();
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
                console.log('더하기 연산결과 : ' + add(num1, num2));
                break;
            case "-":
                console.log('빼기 연산결과 : ' + sub(num1, num2));
                break;
            case "*":
                console.log('곱하기 연산결과 : ' + mul(num1, num2));
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
                    console.log('나누기 연산결과 : ' + div(num1, num2));
                }
                break;
            case "%":
                console.log('나머지 연산결과 : ' + rem(num1, num2));
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
            console.log('팩토리얼 연산결과 : ' + factorial(input));
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

var add = (x, y) => x + y;
var sub = (x, y) => x - y;
var mul = (x, y) => x * y;
var div = (x, y) => x / y;
var rem = (x, y) => x % y;

// 프로그램 시작
getInput();

rl.on("close", () => {
    console.log("프로그램을 종료합니다.");
    process.exit();
});