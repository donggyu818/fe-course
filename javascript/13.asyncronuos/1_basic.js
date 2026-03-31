/*
    동기식(sync) VS 비동기식(async)
    (1) 동기식
    - 순차적으로 한 번에 하나씩 작업 실행. 싱글 스레드 이기 때문.
    - 코드 실행 > call stack > 바로 처리

    (2) 비동기식
    - 대량의 작업을 모아서 나중에 처리 -> call stack 이 비어있는 상태일 때
    - 코드 실행 > call stack > Web API(크롬), Background(NodeJS) 영역에 저장.
        > Task Queue(타스크 큐)에 순차적으로 이동/저장 > call stack 이 비어 있으면
        > Event Loop 객체가 Task Queue 에 있는 작업들을 call stack 으로 보냄
        > call stack 작업 처리 후 종료
    - setTimeout(), fetch(), axios(), DB 연동, 파일 I/O, ...
*/
// ** 처리 순서를 아는 게 중요
function a() {
    b();    // return address.
    setTimeout( () => { console.log(`Task Queue 에 바로 저장됨!`); } );
    console.log(`------- A -------`);
}
function b() {
    setTimeout( () => { console.log(`Task Queue 에 1초 후에 저장됨!`); } , 1000 );  // 얘가 제일 먼저 실행되지만, setTimeout 때문에 저장해둠.
    console.log(`------- B -------`);   // 실제로 제일 먼저 출력되는 거.
}
function c() {
    a();    // return address. c에서 a 로 갔다가 다시 여기로 돌아올 때 이 곳의 주소를 저장해둠.
    console.log(`------- C -------`);
}

c();

// 만약 비동기 안에 비동기와 동기가 있고 동기에 비동기 변수명이 있다면 동기에 
// 비동기 변수가 Null 로 나오기 때문에 강제적으로 동기를 늦게 처리하게 만들어야 함. (나중에 배움)