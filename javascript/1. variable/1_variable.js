/* 
* ES6 기준의 문법형식을 적용
* 변수 : 데이터를 메모리에 저장하는 공간
* 변수를 선언하는 키워드 : var, let, const(상수)
    - var는 안 써도 됨. var를 사용하여 진행하는 경우, 중복된 변수가 사용될 수 있으므로 권장하지 않음.
    - let 변수 선언, 선언한 데이터 수정 가능.
    - const 상수 선언, 선언한 데이터 수정 불가능.

* 변수를 선언하는 형식
* 문법 : [변수선언 키워드] 변수명 = 데이터; 예_let number = 100;
* 자바하고 다른 점 : 자바는 변수명에 형식을 알려줘야 하는데 얘는 변수명, 데이터만 넣으면 됨.
*/

// name 이라는 변수에 '홍길동' 데이터 저장

let name = '홍길동';
let name2 = '홍길동';
console.log('name=',name,',','name2=',name2);


// number 변수에 정수 100을 저장
let number = 100;
console.log('number=' , number);

// DB 연동(비동기식처리)

// flag 변수에 true 값 저장
let flag = true;
console.log(flag);

// cname 변수에 상수로 '이순신' 저장
const cname = '이순신';
console.log(cname);