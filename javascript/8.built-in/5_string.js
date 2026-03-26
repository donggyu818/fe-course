/*
    String 문자열 클래스
    - chracter 를 하나씩 배열에 저장
    - splite(), slice(), chatAt(), toUpperCase(), ...
*/

let str = '홍길동';
let strObj = new String('홍길동');

console.log(str, typeof str);
console.log(strObj, typeof strObj);
console.log(str == strObj);
console.log(str === strObj);

let str2 = 'Hello~ JavaScript!!';
console.log('str2.length = ', str2.length);
console.log('str2.charAt(인덱스) = ', str2.charAt(7));      // charAt(n) : n 번째 글자 출력.
console.log('str2.toUpperCase = ', str2.toUpperCase());     // toUpperCase : 모두 대문자 출력.
console.log('str2.toLowerCase = ', str2.toLowerCase());     // toLowerCase : 모두 소문자 출력.
console.log(str2 + ' next React Programming!!');            // 접합 연산자 +
console.log(str2.concat(' next React Programming!!'));      // 접합 연산자 역할을 함.

console.log();

let str3 = '                Hello~ React Programming!!              ';      // 공백도 문자로 인식되기 때문에 데이터 상으로도, index 구하기도 힘듦.
console.log(str3.trim(), str3.trim().length);       // 공백 없애기
console.log(str3.trimEnd(), str3.trimEnd().length);    // 뒤에 있는 공백 없애기
console.log(str3.trimStart(), str3.trimStart().length);  // 앞에 있는 공백 없애기

// 문자열을 구분자를 이용하여 배열객체로 생성   (반대로 배열 > 객체로도 만들 수 있음.)
let fruits = 'apple,lemon,orange';
let fruits2 = 'apple lemon orange';
let fruitList = fruits.split(',');          // split(x) : 구분자(x)를 이용해 배열 형태로 만들기.
let fruitList2 = fruits2.split(' ');
console.log(fruits, typeof fruits);
console.log(fruitList, typeof fruitList);
console.log(fruitList2, typeof fruitList2);

// 문자열 추출 - substring(), slice()
let str4 = 'Hello~ JavaScript!!';
console.log(str4.substring(0, 5));      // substring(start, end) : 문자열 중 start 부터 end 이전까지 출력.
console.log(str4.slice(0, 5));          // slice(start, end) : 위와 같음.
