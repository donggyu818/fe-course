/*
    Set : 다양한 데이터 저장
    - add() : 데이터 추가
    - has() : 데이터 체크
    - delete() : 데이터 삭제
    - 중복된 데이터는 자동 필터링되어 하나만 저장
*/
let mySet = new Set();      // 객체 형태로 만들어짐.
mySet.add(100);
mySet.add('홍길동');
mySet.add({name:'apple'});
mySet.add([1, 2, 3, 4, 5]);
mySet.add('100');           // 100 은 위에 숫자 타입이고 여기는 문자 타입이므로 별개 취급이라 들어감.
mySet.add(100);             // 100 은 위에랑 동일한 값에 동일한 타입이므로 안 들어감.
console.log(mySet);

console.log();

// 데이터 출력
for(const value of mySet) {     // 하나씩 다 출력할 때까지 반복.
    console.log(value);
}

console.log();

console.log('홍길동 검색');
if (mySet.has('홍길동')) {
    for(const value of mySet) {
        if(value === '홍길동')
        console.log(value);
    }
}
console.log('홍길동 검색 완');

console.log(mySet.has('홍길동'));

// 홍길동이 존재하면 삭제
if(mySet.has('홍길동')) {
    mySet.delete('홍길동')
}
console.log(mySet);

console.log();

// 모든 요소를 삭제
mySet.clear();
console.log(mySet);
