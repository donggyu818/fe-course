/*
    wrapper 클래스 - 기본형(원시) 데이터 타입을 객체로 생성하기 위한 클래스 타입
    - 기본형(원시) 데이터 타입의 클래스는 **첫 글자를 대문자로 정의한 Pascal Case.
    - Number : number (클래스타입 : 기본형 데이터 타입)
    - String : string
    - Boolean : boolean
    - 클래스를 통해 객체 생성 시 메소드 호출이 가능.
    ** '기본형 타입.메소드' 형태로 쓰면 '객체형 타입.메소드' 로 자동 변환해줌.
*/

let num1 = 100;     // 기본형으로 선언 및 데이터 할당
let num2 = new Number(100);     // 참조형 선언 및 객체 생성 후 주소 할당.
    // new 로 만들어지면 무조건 객체 생성. => Heap 에 저장.
console.log(num1, typeof num1);
console.log(num2, typeof num2);     // wrapper 클래스는 무조건 객체형이라 object 로 나옴.
console.log(num1 == num2);
console.log(num1 === num2);
console.log('num1.valueOf =', num1.valueOf()); 
    // num1 은 Stack 에 저장되기에 값을 배당받지 않음. 하지만, '기본형.메소드' => '객체형.메소드' 자동변환 되어서 값이 나오는 거.
console.log('num2.valueOf =', num2.valueOf());

console.log();

let str1 = '자바스크립트, JavaScript';
let str2 = new String('자바스크립트');  // Heap 에 생성
// 문자열로 주면 String 하나하나 배열 형태로 저장함. 예_'자바스크립트'는 '자' 가 index 0번지, '트' 는 index str1.length-1
console.log(str1, typeof str1);
console.log(str2, typeof str2);
console.log(str1 == str2);
console.log(str1 === str2);
console.log(str1.length);   // 공백, 쉼표, 영어 등 모든 게 다 하나 당 1을 차지. length 도 '객체형.메소드' 로 자동 변환.

console.log('str1, typeof = ', typeof str1);    // 위에서 '객체형.메소드' 로 자동 변환 된 거는 해당 부분(31줄)에서만 유효. 여기서 찍으면 다시 string으로 출력.
console.log(str2.length);

console.log();

let flag1 = true;
let flag2 = new Boolean(true);
console.log(flag1, typeof flag1);
console.log(flag2, typeof flag2);
console.log(flag1 == flag2);
console.log(flag1 === flag2);

