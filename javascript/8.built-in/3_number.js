/*
    Number 클래스
    - valueOf(), toString(), ...
*/
let a = 100;
let b = 1234567;
let aa = new Number(100);
let bb = new Number(1234567);
console.log(a, typeof a);       // 100, number
console.log(aa, typeof aa);     // 100, object(Number)
console.log(b, typeof b);       // number
console.log(bb, typeof bb);     // object(Number)

console.log(a.valueOf());       // 원시형이라 원래 불러올 수 없을 거 같지만, 자동 변환되어 불러올 수 있음. 단, 원본 데이터 타입은 유지.
console.log(aa.valueOf());      // 객체형이라 그냥 나옴
console.log(b.valueOf());       // 원시형이라 자동 변환
console.log(bb.valueOf());      // 객체형

console.log(a.toLocaleString(), typeof a);        // toLocaleString : 숫자 3자리 마다 쉼표 찍혀 나오게 하기. 문자형으로 바뀌게 하는 건데도 number type 으로 나옴.
console.log(aa.toLocaleString());
console.log(b.toLocaleString());
console.log(bb.toLocaleString());

let localeNumber = b.toLocaleString();
console.log(localeNumber, typeof localeNumber);

let number = '1234667';
let locNumber = Number.parseInt(number).toLocaleString();
// let locNumber = number.toLocaleString(number);  // 문자형으로 줬으므로 이건 잘못된 거. 숫자형으로 미리 바꿔줘야하는데, 위처럼 나타낼 수 있음.
console.log('locNumber = ', locNumber);

console.log();

let fnumber = '1234.65667';
let flocNumber = Number.parseFloat(fnumber).toLocaleString();   // parseInt : 정수로 나타내기, parseFloat : 실수로 나타내기.
console.log('flocNumber = ', flocNumber);
let flocNumber2 = parseFloat(fnumber).toFixed();        // toFixed : 소수점 첫째 자리에서 반올림.
console.log('flocNumber2 = ', flocNumber2);
let flocNumber3 = parseFloat(fnumber).toFixed(2);        // toFixed(n) : 소수점 n+1 째 자리에서 반올림해서 소수점 n 자리 까지 나타내기.
console.log('flocNumber3 = ', flocNumber3);
