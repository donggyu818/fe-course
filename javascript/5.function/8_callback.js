/*
    callback(콜백)함수 : 함수의 파라미터에 입력되는 익명함수(anonymous)
    한 번만 쓰고 사라짐.
*/

// callback 은 파라미터 자리에 들어감.

const job = (a, b, callback) => { // 현재 job이 계산 / 출력 하고 있는데, 이 과정을 다른 애한테 맡기기 => callback
    callback(a, b);
}

const print = (a, b) => {
    console.log(a, b);
}

job(1, 2, (a, b)=>{console.log(a,b)}); // 한 번만 쓰고 말거면 이렇게
job(1, 2, print);       // 여러번 쓸 거면 위에서 미리 선언하고 주소 넘기는 방식으로 쓰기
job(10, 20, (a, b) => {console.log(a + b);});


console.clear();

// [참고] 비동기식 처리 함수 : setTimeout(funcRef(callback), delay);
// 내장함수, 전역함수 라 언제든 호출 가능.
setTimeout(() => {
    console.log('setTimeout 실행 결과');
}, 1000);     // 1초 후에 콜백 함수를 실행 = 비동기
// '() => {}' callback 함수 형식.

console.log('console 에 로그 출력'); // 위의 함수를 1초 미룬 사이에 이 함수가 먼저 출력됨.
