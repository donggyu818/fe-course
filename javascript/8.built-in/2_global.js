/*
    전역 함수로 최상위 객체인 Window 객체에서 호출되는 함수
    - 호출방법 : window.함수명
    - 객체명을 생략 가능
    예_alert() (Window.alert() 인데 window 생략된 것.), confirm(), Number.parseInt(window.parseInt), ...
    window 는 브라우저에서 가능한데, 현재 우리는 로컬이라 window. 하면 에러 남. 인터넷 키고 F12 눌러서 Console 에 치면 잘 나옴.

    전역 객체
    - encodeURI(), decodeURI(), ... : (URL)주소를 암호화 시키는 거.
*/
let number = '123.4567';
let intNumber = Number.parseInt(number);
let intNumber2 = parseInt(number);      // 생략이 가능함.
console.log('number', number, typeof number);
console.log('intNumber', intNumber, typeof intNumber);
console.log('intNumber2', intNumber2, typeof intNumber2);

// URI 주소 인코딩, 디코딩
let uri = 'http://www.naver.com?name=홍길동';
let encodeUri = encodeURI(uri);     // '홍길동' 을 하나하나 변환해서 1 바이트 크기로 저장
let decodeUri = decodeURI(encodeUri);

console.log(uri);
console.log(encodeUri);
console.log(decodeUri);
