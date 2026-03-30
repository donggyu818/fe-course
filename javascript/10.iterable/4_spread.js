/*
    Spread Operator (전개 구문) : 객체가 가지고 있는 요소를 펼쳐 놓음(전개)
    - iterable object, object literal
    - 함수 호출, 배열, 스트링, 오브젝트 리터럴 등에서 사용
    예) 함수 호출 : "myFunction(...객체명);" - 보내는 쪽 / 배열, 스트링, 오브젝트 리터럴 : "let testArray = [...객체명];"
    ** "..." 은 6_destructure 까지 나오는데, 이 형태 차이점을 잘 정리해두기.
*/

// 배열 객체를 복사 :: shallow copy - 새로운 객체 생성(요소 : 원시데이터 - 독립, 참조데이터 - 공유)
let numbers = [1, 2, 3, 4, 5];
let copyNumbers = [...numbers];     // numbers 의 요소들을 펼쳐놓는다는 의미. 이거는 새로운 객체가 복사된 것. 서로 요소가 안 바뀜.
        // 배열 객체이므로 "Array.from(numbers);" 도 사용 가능.
let copyNumbers1 = numbers;         // 이거는 주소를 공유한 형태. 즉, 하나의 요소를 바꾸면 나머지의 요소도 바뀜.
let concatNumbers = [...numbers, 100, ...copyNumbers];

console.log(numbers, typeof numbers);
console.log(copyNumbers, typeof copyNumbers);
console.log(concatNumbers, typeof concatNumbers);

// 오브젝트 리터럴 복사
let fruit = {
    name: 'apple',
    emoji: '🍎'
};
let copyFruit = {...fruit};
let updateFruit = {
    ...fruit,
    color : 'red'
};

console.log(fruit, typeof fruit);
console.log(copyFruit, typeof copyFruit);
console.log(updateFruit, typeof updateFruit);

let list = [
    {...fruit},
    {...copyFruit},
    {...updateFruit}
];

console.log(list, typeof list);