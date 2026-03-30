/*
    중복된 배열 객체를 입력받아, 중복을 제거한 후 출력하는 함수 생성
*/
function filter(array) {
    return new Set(array);      // mdn 사이트에 Set 을 쳤을 때 생성자 페이지에 iterable 이 있으면 가능.
}
let numbers = [1, 2, 3, 4, 5, 5, 4, 3, 2, 1];       // 같은 값은 필터링 됨.
console.log(numbers);
console.log(filter(numbers));                       // 요소를 받아서 set 타입으로 바꿈.
console.log(filter(['홍길동', '스미스', '이순신', '홍길동']));  // 이렇게 직접 값을 넣어도 됨.

console.log();

let mySet = new Set();
mySet.add(100);
mySet.add('홍길동');

let myArray = new Array(mySet)
console.log(myArray);   // 요소에 주소값 0이 들어감. mdn 사이트 - Array - 생성자 페이지에 iterable 이 없으니 특성을 바꾸지 않고 주소만 넣어 출력.
console.log(myArray[0]);

console.log();

/*
    구조 분해 할당
*/
const getObject1 = () => {
    return{
        name: '홍길동',
        age: 30,
        job: '개발자',
        address: '서울시'
    }
}

const getObject2 = () => {
    return [1, 2, 3, 4, 5];
}

let {name, age, job, address} = getObject1();       // 객체 안의 변수명은 프로퍼티 값과 똑같아야 함.
let [n1, n2, n3, n4, n5] = getObject2();            // 얘는 변수 지정 순서에 따라 출력 순서가 달라질 수 있음.

console.log(name, age, job, address);
console.log(n1, n2, n3, n4, n5);

// textList 를 입력받아, 3글자 이상의 text 이면 새로운 배열 생성
const textFilter = (textList) => {
    return textList.filter( (text) => text.length >= 3)     // text 또한 배열이므로 length 로 글자 수 측정 가능
}

// textList 를 입력받아, 3글자 이하의 text 이면 새로운 배열 생성
const textFilter2 = (textList) => {
    return textList.filter( (text) => text.length <= 3)     // "!text.length" 라고 쓰면 안 됨. ! 는 불린(true/false)타입만 사용 가능하기 때문.
                                                            // !를 주려면 "!(text.length <= 3)" 으로 줘야 함.
}
let result = textFilter(['javascript', 'react', 'html', 'css', 'a', 'ab']);
let result2 = textFilter2(['javascript', 'react', 'html', 'css', 'a', 'ab']);
console.log(result);
console.log(result2);
