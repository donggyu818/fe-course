/*
    forEach 메소드는 Iterator 심볼 객체를 상속한 객체에서 사용됨
    - Iterator 상속 객체.forEach(callback)
    - Array(배열).forEach() 사용 가능.
*/

let numbers = [1, 2, 3, 4, 5, 6];
numbers.forEach((number, idx) => {console.log(`numbers[${idx}] = ${number}`);});      // callback : 파라미터가 들어가는 자리에 함수가 들어가는 것. 여기는 화살표 함수가 들어감. 
        // console : return 이 포함되어 있는 것. 값을 반환하고 출력까지 하는 애임.
        // for 문 류가 아닌데도 끝날 때까지 반복해서 출력함.

let fruits = new Array('🍈','🍌','🥭','🍎','🍓');
// fruits.forEach(item => console.log(item));  // 화살표 함수의 앞에 파라미터가 들어가는 곳의 괄호는 요소가 1개라면 괄호 생략 가능.

console.log();

// '🍎' => '🍑' 로 변경, 출력
fruits.forEach((item, idx) => {     // forEach 가 완전히 끝나고 나서 바뀌게 됨. else 에 출력하게 하면 바뀌지 않은 채로 나오게 됨.
    if (item === '🍎') {
        fruits.splice(idx, 1, '🍑')
    }
});
console.log(fruits);

// '🍑' => '🍅' 로 변경, 출력, 확장 for...of
let idx = 0;                // 아래 for 문 안에 이미 item이 있고 여기에 idx를 추가해서 여러개 주는 건 불가능. for 문 외부에서 줌.
for(let item of fruits) {
    if (item === '🍑') {
        fruits.splice(idx, 1, '🍅');
    }
    idx++;
}
console.log(fruits);
