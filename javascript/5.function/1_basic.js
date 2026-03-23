/*
    함수 : 기능을 구현하고 있는 자바스크립트 객체(object)

    1. 일반적인 함수 정의 방법 - stack frame 생성되는 변수명은 함수명
    function 함수명(파라미터) {
        실행 코드;
        return 반환값;
    }

    2. 화살표 함수(Arrow function) 정의 - 
    const 함수명 = (파라미터) => {
        실행 코드;
        return 반환값;
    }

    3. 자바스크립트 엔진에는 빌트인 함수(내장 함수)가 포함되어 있음
        - parseInt(), parseDouble(), ...

    4. 함수 호출 방법 : 함수명(파라미터);

*/

// parseInt :: 문자열 -> 정수로 반환
let str = '100';
let str2 = '100.1234';
let num1 = parseInt(str);
let num2 = parseInt(str2);

console.log(str, typeof str);
console.log(str2, typeof str2);
console.log(num1, typeof num1);
console.log(num2, typeof num2); // 얘는 100으로 나오는데, 이는 parse로 인해 정수로 바뀌어서 뒤에가 잘린 것.

let num3 = parseFloat(str2);
console.log(num3, typeof num3);



// let list = [1, 2, 3, 4, 5];

// function test(params) {     // 함수명 = 변수명. 여기서 변수명은 test 가 되는 거임.
//     console.log('test!!');
    
// }

// const test = () => {        // 화살표 함수 표현식. 이게 직관적이긴 한데, 둘 다 씀.
//     console.log('test!!');
    
// }

// 함수 호출 (함수 지정 전에 호출해 봄)
func_sum();     // 실행 됨. 자바스크립트는 일반 함수가 있으면 프로그램 실행 전,
                // 미리 메모리에 저장을 시켜둠. 그래서 함수 지정 전에 호출해도 실행 됨.
// arrow_sum();    // 실행 안 됨.

// 일반 함수 선언하는 방법
function func_sum() {
    console.log(`func_sum = ${10 + 20}`);
}


// 화살표 함수 선언하는 방법
const arrow_sum = () => {
    console.log(`arrow_sum = ${10 + 20}`);
}

// 함수 호출 (위에서 함수 선언 후에 호출)
func_sum();
arrow_sum();