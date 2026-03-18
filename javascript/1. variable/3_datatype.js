/*
    Primitive DataType(원시형 데이터 타입) - 이 중에서 데이터 크기가 큰 경우 Call Stack 대신, Heap에 저장됨.
    - 정수형(Integer) : 100, 200, ... ( -2^31 ~ 2^31-1 ) <- 이 범위 내의 정수는 가능.
    - 실수형(Float, Double) : 3.14, ...                                    - Heap에 저장
    - 문자형(Character(=String Type) : '', "") : '한글', "english", ...     - Heap에 저장
    - 불린형(Boolean) : true(1), false(0)

    - ❗ 정수형 범위(64bit : -2^31 ~ 2^31-1) 안의 정수 선언 시 Stack Frame에 저장
    - ❗ 정수형 범위(64bit : -2^31 ~ 2^31-1) 를 넘어서면 Heap에 저장
    - ❗ 실수형, 문자형은 Heap에 저장 후 포인터(변수)는 Stack Frame에 저장


    Reference DataType(참조형 데이터 타입) 
    - 객체형(Object, {}), 배열(Array, []), 클래스(Class), JSON(객체형, 배열 모두 포함)
    - ❗ 다 데이터 크기가 크므로, 무조건 Heap에 저장됨.
    
    // let obj = {'name':'홍길동', 'age':100} // << 얘는 원시형이 될 수 없음.

*/

// 1. 정수형
let inumber1 = 2**31-1; //Stack에 저장
let inumber2 = 2**31;   //Heap에 저장
console.log(inumber1, inumber2)

// 2. 실수형
let fnumber = 1234.1234567
console.log(fnumber);

// 3. 문자형
let name = '홍길동';
let cname = '홍길동'; // 문자열이 같을 경우 먼저 저장된 변수명과 같은 코드로 Heap에 저장됨. 따로 저장 되는 게 아님.
console.log(name);
console.log(cname);

// 4. 불린형
let flag = true;
console.log(flag);

// 5. 배열(Array)
let nameArray = ['홍길동', '이순신', '김유신']
console.log(nameArray);

// 6. 객체(Object)
let obj = {
    "name" : '홍길동',
    "age" : 30
}
// obj 안에는 = 이 아니라 :
console.log(obj);

// 7. JSON
let jsonObj = {
    "name" : "홍길동",
    "score" : [100, 50, 80]
}
console.log(jsonObj);

// 8. 초기화 값 / 객체
let x = undefined; // 초기화 되어지는 값. Primitive 초기화
let xy = null; // 아직 값을 할당하지 않은 상태. Reference 초기화. 객체 타입 넣을 거라는 얘기.

x = 100;
x = [1, 2, 3];
// ㄴ 이래도 에러는 안 남. 데이터 타입을 정의하지 않기 때문. 중간에 정수로 바뀔 수도, 언어로 바뀔 수도 있음.

// 9. typeof : 데이터 비교
let xx = 10;
let xxx = 10;
let yy = '10'; // '' 을 줘서 문자로 주면 typeof yy = string 으로 나옴.
let oo = {'name': 'object'};

console.log('데이터 타입 확인 : typeof');

console.log(xx, typeof xx);
// typeof xx 는 number 로 출력됨. 데이터 타입을 알아보는 것이기 때문.
console.log(xx, typeof yy);
console.log(oo, typeof oo);

console.log('데이터 타입 확인 및 비교');
console.log(typeof xx == typeof xxx);
console.log(typeof xx == typeof yy); // == : 값 비교. 단, typeof 포함 시 데이터 타입까지 비교.
console.log(xx === yy); // === : typeof 를 넣지 않아도 값과 typeof 둘을 비교함.  false 나옴
console.log(xx == yy); // == : 값만 비교. 숫자의 10과 문자의 10을 같다고 보는 것.  true 나옴


