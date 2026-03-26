/*
    MDN 사이트에서 Array 클래스 메소드 확인
    - push(), pop(), ...
*/

let numbers = [1, 2, 3, 4, 5];
let fruits = new Array('🍈','🍌','🥭','🍎','🍓');

console.log(numbers.length);
console.log(fruits.length);

// 1. 요소 추가 : push()
numbers.push(6);
fruits.push('🍋');

console.log(numbers);
console.log(fruits);

console.log();

// 2. 요소 출력 : keys()
let itNumbers = numbers.keys();
console.log(itNumbers);
// for (값을 저장하는 변수 선언) of (출력할 요소) : 확장 for 문 - for 내부에서 인덱스를 관리.
for(let key of itNumbers) {         // index 값이 출력.
    console.log(`key = ${key}`);
}


for ( number of numbers ) {        // index=0 : 1.
    console.log(`number = ${number}`);
    
}

for ( fruit of fruits ) {
    console.log(`fruit = ${fruit}`);
    
}

console.log();

// 3. 요소 삭제 : pop(), splice()
// 3.1 마지막 요소 삭제
console.log(fruits);
console.log(`fruits.pop = ${fruits.pop()}`);        // 마지막 요소 삭제한다는 알림
console.log(fruits);

console.log();

// 3.2 선택적 요소 삭제 및 교체, 추가
// splice(시작index, 삭제할갯수, 교체아이템)
console.log('fruits.splice = ', fruits.splice(1, 2));       // 아이템 요소만 삭제
console.log(fruits);

console.log('fruits.splice = ', fruits.splice(0, 1, '🍳'));       // 아이템 요소 삭제 후 교체
console.log(fruits);

console.log('fruits.splice = ', fruits.splice(0, 0, '🍔'));       // 아이템 요소 추가
console.log(fruits);

console.log();

// 4. 요소 추출 : slice(시작 인덱스, 종료 인덱스) - 새로운 배열 객체 반환
console.log(numbers);
let subNumbers = numbers.slice(0,3);
console.log(subNumbers);       // 반환하는 결과가 배열 타입임. (타입을 잘 봐야 함.)

console.log();

// 5. 얕은 복사 (Shallow Copy) : 배열의 요소가 원시 데이터 타입이면 독립적으로 생성.
                            // 참조 데이터 타입(객체)이면 주소를 공유. 참조는 깊은 복사 하면 생성.

// 5.1 배열의 요소가 원시 데이터 타입인 경우
const sfruit = ['🍉','🍊','🍋',];
const sfruitCopy1 = sfruit.slice(0, 3);     // 3 대신 sfruit.length 로 줘도 됨. 오히려 수정할 필요 없어서 편함.
const sfruitCopy2 = Array.from(sfruit);

// sfruit 의 0 번지 과일을 딸기로 수정
sfruit[0] = '🍓';

console.log(sfruit);
console.log(sfruitCopy1);
console.log(sfruitCopy2);

// 5.2 배열의 요소가 객체(참조형 데이터 타입)인 경우
const sfruitObj = [
    {name: 'orange', emoji:'🍊'},
    {name: 'apple', emoji:'🍎'},
    {name: 'lemon', emoji:'🍋'},
]
const sfruitObjCopy1 = sfruitObj.slice(0, sfruitObj.length);
const sfruitObjCopy2 = Array.from(sfruitObj);

// sfruitObj 의 '🍎' 를 '🍏' 로 변경.
sfruitObj[1].emoji = '🍏';

console.log(sfruitObj);
console.log(sfruitObjCopy1);
console.log(sfruitObjCopy2);

console.log();

// 6. concat : 배열 객체를 결합하는 것.
let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
let arrConcat = arr1.concat(arr2);
console.log(arrConcat);

console.log();

// 7. join : 배열 객체를 구분자로 분리하여 문자열로 반환
console.log(arrConcat);

let strJoin = arrConcat.join('');       // 괄호 안에 구분자 주면 사이에 들어가서 구분감을 줌.
console.log(strJoin, typeof strJoin);

let spliteArray = strJoin.split('-');   // 같이 기억해주기.
console.log(spliteArray, typeof spliteArray);
