/*
    callback : 함수의 인자에 입력되는 함수로직, anonymous(무기명) 함수
    - setTimeout(callback, delay)
*/
function runDelay(callback, delay) {
    setTimeout(callback, delay);
}
runDelay( () => {
    console.log(`3초 후에 Task Queue 에 저장!`);
} , 3000 );    // Web API 에 있다가 3초 후에 Task Queue 저장. 시간이 되면 Task Queue > callstack 으로 넘어와 callback 함수 실행.

runDelay( function() {
    console.log(`Task Queue 에 바로 저장!`);
});             // Task Queue 에 바로 저장, 실행은 동기식 끝나고 call stack 이 비어있을 때 실행.

runDelay( () => {
    console.log(`1초 후에 Task Queue 에 저장!`);
} , 1000 );    // 1초 후에 Task Queue 저장. 시간이 되면 Task Queue > callstack 으로 넘어와 callback 함수 실행.

console.log('--------- 프로그램 종료 ---------');   // 동기식이라 제일 먼저 나옴.
