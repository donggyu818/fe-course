/*
    shallow copy (얕은 복사) - Array.from(original)
    복사본의 속성이 복사본이 만들어진 원본 객체와 같은 (메모리 내의 같은 값을 가리킴)를 
    공유하는 복사입니다. 따라서 원본이나 복사본을 변경하면, 다른 객체 또한 변경될 수 있습니다.
    ❗ 객체의 요소가 원시데이터 타입인 경우에는 독립적으로 관리되고,
    객체의 요소가 참조데이터 타입인 경우에는 주소가 공유된다.
*/
/*
let a = 100; // 객체가 아니니 대상이 아님.
let list = [1, 2, 3];   // 얜 안에 '원시 데이터 - 숫자형' 이므로
let list2 = [{name:'홍길동'}, {name:'이순신'}]; // 얜 안에 객체가 들어감. 얘가 얕은 복사의 대상.
*/

// 1. 객체의 요소가 원시 데이터 타입인 경우
let fruits = ['apple', 'orange', 'lemon']; // 원시 데이터 타입 인 글자형
let fruitsCopy = Array.from(fruits);
console.log(fruits, typeof fruits);
console.log(fruitsCopy, typeof fruitsCopy);

fruitsCopy[0] = 'mango';
fruits[0] = '🍎'
console.log('fruits의 요소가 원시데이터이므로 fruitsCopy 에만 변경됨.');
console.log(fruits, typeof fruits);
console.log(fruitsCopy, typeof fruitsCopy);

// 2. 객체의 요소가 참조 데이터 타입인 경우
let fruitsObj = [
    {name: 'apple', emoji : '🍎'},
    {name: 'orange', emoji : '🍊'},
    {name: 'lemon', emoji : '🍋'}
];
let fruitsObjCopy = Array.from(fruitsObj); // shallow copy
console.log(fruitsObj, typeof fruitsObj);
console.log(fruitsObjCopy, typeof fruitsObjCopy);

fruitsObj[0].emoji = '🍏'
console.log();

console.log(fruitsObj, typeof fruitsObj); 
console.log(fruitsObjCopy, typeof fruitsObjCopy); // fruitsObjCopy 에도 함께 적용