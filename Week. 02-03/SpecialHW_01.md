[추가 과제] 반복문과 조건문을 이용한 프로그램
=================================

<br>

- 입력값 : 1 이상 ~ 9999 이하의 홀수

<br>

```JavaScript
const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

// 입력 받기
function getInput() {
    rl.question(`홀수를 입력하세요 (1 이상 ~ 9999 이하의 홀수, 종료하려면 'exit'를 입력하세요): `, (input) => {
        if (input.toLowerCase() === "exit") {
            rl.close();
            return;
        }

        const num = Number(input);

        if (isNaN(num) || num < 1 || num > 9999 || num % 2 === 0) {
            console.log(`올바른 홀수를 입력하세요 (1 이상 ~ 9999 이하의 홀수).`);
        } else {
            printReverseDiamond(num.toString()); // 문자열로 변환하여 출력
        }

        getInput(); // 다음 입력 받음
    });
}

// 역마름모 출력 함수
function printReverseDiamond(height) {
    const halfHeight = Math.floor(Number(height) / 2);
    const lines = [];

    // 위쪽 반쪽 역마름모 생성
    for (let i = halfHeight; i >= 0; i--) {
        let row = " ".repeat(halfHeight - i);
        row += "*".repeat(2 * i + 1);
        lines.push(row);
    }

    // 아래쪽 반쪽 역마름모 생성
    for (let i = 1; i <= halfHeight; i++) {
        let row = " ".repeat(halfHeight - i);
        row += "*".repeat(2 * i + 1);
        lines.push(row);
    }

    // 배열을 문자열로 변환하여 출력
    console.log(lines.join("\n"));
}

getInput(); // 입력 시작

rl.on("close", () => {
    console.log("프로그램을 종료합니다.");
    process.exit();
});
```