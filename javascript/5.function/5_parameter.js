/*
    함수 호출 시 파라미터(인자, 입력되는 값) --> 함수의 변수(지역 안)에 자동 매핑
    이름만 중복되지 않게 하기.
    💯래스트 파라미터(Rest Parameter): '...'의 기호를 파라미터에 입력. 꼭 외우기.
    래스트 파라미터로 입력되는 인자는 *배열*에 저장됨.
*/

// 코드 비교해서 채워넣어야 함.

console.log(add(1, 2));    // 1, 2 를 파라미터 라고 부름.
console.log(add(1, 2, 3)); // 함수에서 n1 과 n2 만 줬으니 1+2 합이 3으로 나옴
console.log(add(1, 2, 3, 4));


function add(n1, n2) {     // 매개변수 라고 함, 지역 변수로 저장됨.
    return n1 + n2;
}

function add(n1, n2, n3) {  // 위의 add 와 중복이므로, 위의 add 함수는 이 add 함수로 대체됨.
    return n1 + n2 + n3;    // add(1, 2) 에서 n3 가 없으므로 undifinded 가 됨. => NaN 출력. 에러는 X.
}

function add(n1, n2, n3, n4) {
    return n1 + n2 + n3 + n4;
}

console.log(add(1, 2, 0, 0)); // 0 으로 두면 n1 ~ n4 까지만 있을 때 정상적으로 뜸.

function add(... args) { //args 가 배열 객체가 됨.
    //args 배열의 합을 구하여 반환
    // let sum = 0;    // [중요] 밖에서 선언해야 함. 
    // for(i=0; i<args.length; i++) {
    //     sum += args[i];
    // }
    // return sum;
    // 위에 처럼 써도 됨.

    // 배열. reduce() 이용해본 것. - 배열 객체의 원소가 숫자이며, 누적합을 구하는 경우에 사용.
    let sum = args.reduce((sum, curValue) => sum + curValue); // 블록을 나올 때는 return 키워드가 있어야 함.
    return sum;
    // let sum = args.reduce((sum, curValue) sum + curValue);
    // return sum;
}
// 이렇게 하면 객체가 몇 개이던 출력할 수가 있게 됨.


console.log(add2('홍길동', 20, 1, 2, 3, 4, 5));


function add2(name, age, ... args) {
    // let sum = 0;
    // for (i = 0; i<args.length; i++) {
    //     sum += args[i];
    // }
    let sum = args.reduce((s, c) => s+c);
    return {        // return 키워드는 한 번에 하나만 사용할 수 있음.
        name: name,
        age: age,
        score: sum
    }
}