/*
    try~catch~finally : 자바스크립트에서 예외를 처리하는 구문
    ~finally : 예외 발생에 상관없이 무조건 출력되는 구문
*/
// 자바스크립트의 배열은 동적으로 관리됨. 원래 index = 3 은 없지만 numbers[3] 을 줬을 때 확장되어 에러가 안 뜨고 undefined 가 뜸.
let numbers = [1, 2, 3];
console.log(numbers[0]);
console.log(numbers[1]);
console.log(numbers[2]);
console.log(numbers[3]);        // 다른 프로그램은 에러가 보통임.

numbers[99] = 1000;
console.log(numbers[99]);
console.log(numbers);

// Number 클래스 생성
let numbers2 = new Number(12345);
try {
    for (const number of numbers2) {    //iterable 객체가 아니라서 에러남. try catch 구문으로 인해 어디서 에러가 났는지 파악 가능.
    console.log(number);
}
} catch (error) {                       // 에러가 나면 출력
    console.log('------에러------\n', error);   // error 라고 안 쓰면 입력한 문구만 뜨고 각종 에러 메세지가 안 뜸.
} finally {                             // 에러가 나든 안 나든 무조건 출력.
    console.log('----number2 실습----');
}


let numbers3 = new String('12345');
try {
    for (const number of numbers3) {
        console.log(number);
    }
} catch (error) {
    console.log('------에러------\n', error);
} finally {
    console.log('----number3 실습----');
}