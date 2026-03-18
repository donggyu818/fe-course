/*
    참조 데이터 타입 : 객체(Object)
    - 배열(Array) : [데이터, 데이터, ...]
    - 객체(Object) : {'프로퍼티' : 데이터, '프로퍼티' : 데이터, ...}
*/

let apple = null; // 객체 타입을 넣겠다는 의미.
apple = {
    // 'name' : 'apple',
    // 'color' : 'red',
    // 'emoji' : '🍎' 
    // 프로퍼티에 ''를 넣어야 정상적으로 실행이 되지만, 개별로 사용할 때만 가능하고, 외부에 제공해서 JSON 객체로 쓸 때는 꼭 '' 붙여야 함.
    name : 'apple',
    color : 'red',
    emoji : '🍎'
}
console.log(typeof apple, apple);
// 만약에 이모지가 깨진다면 log 두 개 주고 하나는 typeof, 하나는 apple 출력
console.log(apple.name);
console.log(apple.color);
console.log(apple.emoji);
// 프로퍼티 하나만 찾으려면 .(프로퍼티) 라고 써야 함.

// orange 객체를 생성 후 타입, 객체, name, color, price, emoji 를 각각 출력하기.

let orange = null;
orange = {
    'name' : 'orange',
    'color' : 'coral',
    'price' : 2000,
    'emoji' : '🍊'
}
console.log(typeof orange);
console.log(orange); // 만약 여기서 오타나서 오류가 났다면 인터프리터 방식이기 때문에 여기까지만 작업이 처리됨. 밑은 작업 X.
console.log(orange.name);
console.log(orange.color);
console.log(orange.price);
console.log(orange.emoji);

// 배열 - 배열 선언 시 동일한 데이터 타입과 공통적인 속성들을 선언하는 것을 추천.
let fruitList = null;
fruitList = ['apple', '🍎', 100, 200, true]; // 지금처럼 다양한 데이터 타입을 저장할 수 있다. 하지만 권장은 안 함.
console.log(fruitList);

fruitList = ['🍎', '🍊', '🍓', '🍑']; // 이렇게 동일한 데이터 타입을 주는 것을 추천.
console.log(fruitList);

console.log(fruitList[0]);
console.log(fruitList[3]);
console.log(fruitList[fruitList.length-2]);
console.log(fruitList.length); // 길이가 몇인지 알아보는 거.

// 객체 타입을 요소로 하는 배열 생성
let fruitListObj = null;
fruitListObj = [apple, orange];    // 여기서 쓰려면 위에 이미 지정을 한 상태여야 가능함.
                                    // apple과 orange는 Heap로 가서 찾는 게 아니라 
                                    // Stack에서 apple을 찾고 그 apple의 코드를 찾아서 지정하게 됨.
                                    // 이후 출력 시 해당 코드를 타고 들어가서 불러옴.
console.log(fruitListObj);
console.log(fruitListObj[0].name);
console.log(fruitListObj[1].emoji);
