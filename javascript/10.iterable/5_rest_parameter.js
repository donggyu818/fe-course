/*
    Rest Parameter(나머지 인자) : 파라미터 인자를 배열로 저장함
    - 함수의 매개변수에 정의함
    - "function 함수명(...Rest Parameter) {}"
    - "const 함수명 = (...Rest Parameter) => {}"
*/

function add(a, b, ...numbers) {        // numbers 요소들은 배열로 묶이게 됨.
    let sum = numbers.reduce( (acc, cur) => acc + cur );
    console.log(a, b, numbers, sum);
    return a + b + sum;
}
// sum 정의한 거를 return 뒤 sum 에 그대로 넣고 log 에 sum 을 지워도 출력이 됨.
/*function add(a, b, ...numbers) {
    return a + b + numbers.reduce( (acc, cur) => acc + cur );
}
*/

let result1 = add(1, 2, 3, 4, 5);
add(1, 2, 3, 4, 5);
console.log(result1, add);

const fadd = (f1, ...fruits) => {   // 매개 변수의 ...fruits : Rest Parameter
    console.log(f1, ...fruits);
    return {f1, ...fruits};
    // return[f1, ...fruits];
}

let fruits = ['🍎', '🍋', '🍊'];
let fobj = fadd('🍓', ...fruits);       // 함수 호출하는 부분에서의 ...fruits : Speread 연산자(전개 구문)
console.log('fobj = ', fobj);           // 키 밸류가 없어서 index 번호가 출력. 이 번호는 알파벳 순이라 숫자가 먼저 나옴.

