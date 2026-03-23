/*
    함수는 객체(object) 이고, 힙(Heap)에 저장됨.
    일반적인 함수형식(function) 으로 선언되면, 호이스팅 되어 전역으로 맨 먼저 힙에 저장됨.
    함수 안의 변수명은 힙에 함수와 같이 저장됨.

    2번에 toNumber를 숫자로 변환한 작업이 있음. 2번에서 정의된 함수를 불러올 수 있음.
    commons > utils.js 에 해당 함수를 넣었음. 여기에 자주 사용할 함수를 저장하고 불러올 거임.
*/

import { toNumber } from "../commons/utils.js";

function add(num1, num2) {
    let obj = toNumber(num1, num2)
    console.log(`sum = ${obj.num1 + obj.num2}`);
}

let add2 = add;     // add 가 객체이기 때문에 call by reference 로 복제.
add(100, '200');
add2('400', '300');
console.log(add, typeof add);
console.log(add, typeof add2);
console.log(add === add2);  // 주소 동일

