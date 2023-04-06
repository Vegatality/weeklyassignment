import { createInterface } from "readline";
let rl = createInterface({
    input: process.stdin,
    output: process.stdout,
});

let ballBox = [];
let numBox = Array(10).fill().map((v, i) => i)
while (ballBox.length < 3) {
    let index = Math.floor(Math.random() * numBox.length)
    let ballNum = numBox[index]
    if (ballBox.includes(ballNum)) {
        continue
    } else {
        ballBox.push(ballNum)
    }
}
let question = ballBox.join("")
let count = 1
let B = 0;
let S = 0;

console.log("컴퓨터가 숫자를 생성하였습니다. 답을 맞춰보세요!")
rl.on("line", (answer) => {
    console.log(`${count}번째 시도 : ${answer} `)
    for (let a of question) {
        for (let b of answer) {
            if ((a === b) && (question.indexOf(a) === answer.indexOf(b))) {
                S++
            } else if (a === b) {
                B++
            }
        }
    }
    console.log(`${B}B${S}S`)
    if (question === answer) {
        console.log(`${count}번만에 맞히셨습니다.`)
        console.log("게임을 종료합니다.")
        rl.close();
        process.exit();
    } else {
        B = 0;
        S = 0;
        count ++
    }
})  // >>> close가 없으면 입력을 무한히 받는다!!!