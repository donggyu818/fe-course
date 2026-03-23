/*
    return : 함수 실행 결과를 반환 키워드
    반환결과가 1개 값일 경우 -> 변수로 반환
    반환결과가 2개 이상일 경우 -> 객체로 반환

*/

/*
    object 와 list 는 Heap 에 저장되는데, 이때 저장된 걸 그저 불러와서 출력하기만 할 뿐.
    아래 function 같은 경우에는 Heap 에 가서 작업을 수행하고 불러옴.
*/

function add1() {
    // console.log(`sum = ${1 + 2}`); 콘솔이 여기 있으면 add1 이 실행되면서 출력까지 됨.
    return 1 + 2 , 100;   // 위의 console.log 대신 이걸 쓰면 add1 함수는 계산만 하고 아래 add1으로 넘김. 단, 마지막 1개만.
}

add1(); // add1 은 함수이고 Heap 에 저장되어 있으므로, 위의 함수로 가서 add1 을 실행함. 
        // 계산할 동안 18줄에 멈춰있다가 console.log 가 실행되어 add1 이 끝나면 다시 돌아와서 아래 console.log(100+200) 을 실행
        // 이 add1(); 을 return address 라고 함.
console.log(100 + 200);

console.log(add1());
let result = add1();
console.log(result);

// name, age 를 입력받아 객체를 리턴하는 함수 생성
// 이렇게 만들면 아래에서 같은 형식을 입력할 때마다 불러오기 쉬움.
function createObj(name, age) {
    return {
        name: name,
        age: age
    }
}

let hong = createObj('홍길동', 30);
let lee = createObj('이순신', 40);
console.log(hong.name, hong.age);
console.log(lee.name, lee.age);

// 홍길동, 이순신, 김유신 객체를 배열에 저장 후 출력
let objList = [
    createObj('홍길동', 30),
    createObj('이순신', 40),
    createObj('김유신', 35),
]
console.log(objList[1].name);
console.log(objList[2].age);

for(i=0; i<objList.length; i++) {
    let obj = objList[i];
    console.log(`name = ${obj.name}`);
    console.log(`age = ${obj.age}`);
    
}


// let person = {   // (비교용)원래 하던 객체 생성 방식
//     name : '홍길동',
//     age : 30
// }