/*
    비동기 로직(미래의 작업)을 구현하는 객체.
    - resolve : 작업 성공 시 반환
    - reject : 작업 실패 시 반환
    - Promise 객체 생성
    예) const 프로미스 객체 = new Promise((resolve, reject) => { 비동기 로직(미래의 작업) });
    - Promise 객체 호출
    예) 프로미스 객체.then(성공 시 callback).catch(실패 시 callback);
*/
// Promise 객체 생성
const promise = new Promise((resolve, reject) => {  // reject 는 안 썼으니 없어도 무관.
    // 비동기 로직 (미래의 작업)
    let success = false;
    if(success) {
        resolve('성공!');
    } else {
        reject('실패!');
    }
});

console.log(`----- promise 객체 호출 -----`);

promise // Web API 로 보냄. Task Queue 로 보내고, 동기 처리가 없으면 바로 call stack 으로 보내서 처리.
.then((result) => {     // then 은 여러 개 나올 수도 있음.
    console.log('result => ', result);
})      // resolve가 주는 결과값 = result 로 썼음.
.catch((error) => {
    console.log('error => ', error);
});     // reject 가 주는 결과값 = error 로 썼음.

console.log(`----- 프로그램 종료 -----`);