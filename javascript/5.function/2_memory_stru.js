/*
    함수 생성 및 호출
*/

import { toNumber } from "../commons/utils.js";

// 데이터 타입에 상관없이 add 함수가 정상적으로 실행되도록 문자 => 숫자로 변환하는 함수 생성해야 함.


add(100, 200);
add(200, 300);

add('100', '200'); // 문자열로 주게 된다면 단어가 옆으로 나열되어 100200 으로 나오게 됨.

/*
    function 이 코드 상에 있으면 인터프리터 방식으로 순서대로 읽기 전에 메모리에 올려두기 때문에 함수 위에서 선언 가능.
    이를 '호이스팅 방식' 이라고 함.
*/

// 두 수를 입력하여, 합계를 출력
// 호이스팅(hoisting) 되어 add 함수 호출 전 메모리에 저장됨.
function add(num1, num2) { // 변수명 지정 시 let으로 하면 에러 뜸. 변수명만 쓰기.
    // num1, num2 는 add 블록에서만 존재하는 지역변수로 선언됨.
    let n1 = parseInt (num1);   // 정수값으로 바꿈
    let n2 = parseInt (num2);

    console.log(`sum = ${n1 + n2}`);
}

// function 과 똑같이 위로 보냈을 때 오류 나며 출력되지 않음. = add2 함수는 호이스팅이 되지 않기 때문.
// add2(100, 400);
// add2(200, 400);

// arrow function(화살표 함수)
// 호이스팅 되지 않으므로, 반드시 선언한 후에 호출되어야 함
const add2 = (num1, num2) => { // 위의 num1, num2 는 지역 변수이기 때문에 지역이 끝나면 사라져서 사용 가능함.
    let obj = toNumber(num1, num2);
    console.log(`sum2 = ${obj.num1 + obj.num2}`);
}

console.log();
add2(100, 400);
add2(200, 400);
add2('500', '700'); // 맨 위에서 num1, num2 를 숫자로 변환하고 to Number 변수명을 obj 받아서 출력하면 됨.
