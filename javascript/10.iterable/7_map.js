/*
    Map : key, value 를 한 쌍의 데이터로 가지는 객체
    - set(key, value) : 데이터 추가
    - get(key) : 데이터 반환
    - has(key) : 데이터 체크
    - delete(key) : 데이터 삭제
*/
let fruitsMap = new Map();
fruitsMap.set('lemon', '🍋');
fruitsMap.set('apple', '🍎');
fruitsMap.set('orange', '🍊');
console.log(fruitsMap, typeof fruitsMap);

console.log();

console.log(fruitsMap.get('lemon'));        // 각각 과일들의 값(현재 이모지) 을 출력하게 됨.
console.log(fruitsMap.get('apple'));
console.log(fruitsMap.get('orange'));

console.log();

console.log(fruitsMap.has('lemon'));
console.log(fruitsMap.has('mango'));

if(fruitsMap.has('apple')) {
    console.log(fruitsMap.get('apple'));
}   else {
    console.log('준비중 입니다.');
}

// true : 🍎, false : 🍏 이모지 값으로 반환 (삼항연산자 이용)
let emoji = (fruitsMap.has('apple')) ? '🍎' : '🍏' ;
console.log(emoji);

console.log();

// set 을 썼을 때 기존 데이터가 있다면 업데이트가 됨. 기존 데이터가 없다면 추가.
fruitsMap.set('apple', '🍏');
console.log(fruitsMap);

// 데이터 삭제.(delete(key)) 단, 데이터가 있을 때 삭제, 없으면 추가
if (fruitsMap.has('orange')) {
    fruitsMap.delete('orange');
} else {
    fruitsMap.set('orange', '🍊');
}
console.log(fruitsMap);

// entries() : key 와 value 값을 배열의 형태로 만들어 줌.
let fruitsArray = fruitsMap.entries();
console.log(fruitsArray);
