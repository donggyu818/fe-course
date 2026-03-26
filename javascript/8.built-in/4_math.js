/*
    Math 클래스 - 모든 메소드와 속성이 static 으로 정의되어 있음.
        ㄴ : MDN 사이트 가서 Math 쳐보면 왼쪽에 정적 밖에 없음. 정적 = static 으로 할 수 있는 것.
    - 호출 : Math.메소드명(), Math.속성
*/

let a = 1234.5678;
console.log(`Math.abs(value) :: ${Math.abs(a)}`);       // abs : 절댓값
console.log(`Math.floor(value) :: ${Math.floor(a)}`);   // floor : 정수.
console.log(`Math.truck(value) :: ${Math.trunc(a)}`);   // trunc : 소수점 n 자리까지 출력. (확인 예정)
console.log(`Math.round(value) :: ${Math.round(a)}`);   // round : 반올림
console.log(`Number.toFixed(value) :: ${a.toFixed(2)}`);        // toFixed : 소수점 n 자리까지 반올림해서 출력.
console.log(`Math.max(value) :: ${Math.max(1, 2, 3, 4, 5)}`);   // max : 최대값 출력.
console.log(`Math.min(value) :: ${Math.min(1, 2, 3, 4, 5)}`);   // min : 최소값 출력.
console.log(`Math.random(value) :: ${Math.random()}`);   // random : 0 ~ 1 사이의 임의의 값 출력.

// 1 ~ 100 사이의 숫자를 임의로 생성하는 함수 정의
const randNumber = () => {
    return Math.floor(Math.random() * 100 + 1)
}   // (복습) {} 랑 return 은 한 줄일 경우 생략 가능.



// 1 ~ 100 사이의 숫자를 임의로 생성
let number = Math.floor(Math.random() * 100 + 1); // 0 ~ 1 까지의 숫자이므로 0이 나올 수 있음. => + 1 하기.
console.log('number = ', number);
console.log('number = ', randNumber());
