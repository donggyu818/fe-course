/*
    destructure object : 구조 분해 할당
    - 객체의 구조를 분해하여 변수에 자동으로 할당
*/
// 1. 배열 객체
let numbers = [1, 2, 3, 4, 5];      // 각 배열을 따로따로 지정하고 싶을 때 let a = numbers[0];
// let [a, b, c, d, e] = numbers;
let [a, b, ...nlist] = numbers;
console.log(numbers);
// console.log(a, b, c, d, e);
console.log(a, b, nlist);

// 2. 오브젝트 리터럴
console.log();
let hong = {
    name: '홍길동',
    age: 30,
    job: '개발자'
}
// let name = hong.name;
// let age = hong.age;
// let job = hong.job;
let {name, age, job} = hong;      // 객체 타입에 따라 묶기. hong이 객체로 묶여있으니 이것도 객체로 묶음.
console.log(name, age, job);

console.log();

// 오브젝트 리터럴을 반환하는 함수
const createObj = () => {
    return {
        aname: 'apple',
        color: 'red',
        emoji: '🍎'
    }
}
let {aname, color, emoji} = createObj();         // 여기에 있는 애들은 프로퍼티의 이름과 일치해야 함. 일치하지 않으면 undefined.
                                                // 구조 분해 할 때에는 순서 상관이 없음. 위에 프로퍼티 이름을 바꿔도 Obj 정의된 순서로 나옴.
let price = 1000;           // 이 let 을 위에 정의할 때 괄호 안에 써도 괜찮음.
let source = '강원도';
console.log(aname, color, emoji);
console.log(aname, color, emoji, price, source);

