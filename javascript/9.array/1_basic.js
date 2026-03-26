/*
    ** 해당 9번 폴더의 메소드 들은 다 외워야 함. 중요한 부분.
    배열(Array) : 동일한 데이터 타입을 가진 요소를 물리적인 공간에 연속적으로 저장.
    - 배열은 참조 데이터 타입이며, 힙에 생성.
    - [], Array 클래스를 이용하여 객체 생성.
    - 배열 객체의 요소는 기본형, 참조형 모두 저장 가능.
*/

let array1 = [];
let array2 = new Array(2);      // 2개의 배열로 구성되어 있으나, 값을 안 줬기 때문에 undefined
let array3 = new Array(5);

console.log(array1.length, array2.length, array3.length);

console.log();

let names = ['홍길동', '스미스', '이순신'];
let fruits = ['🍋', '🍎', '🍊', '🍍'];
console.log(names.length, fruits.length);

// names 배열에 요소 추가
names[3] = '제임스';        // 다른 프로그램이면 index 가 없다고 보통 에러 나지만 여기서는 에러 발생 X. 위의 3개 배열의 names 를 없애고 4개 짜리로 새로 만듦.
console.log(names);
