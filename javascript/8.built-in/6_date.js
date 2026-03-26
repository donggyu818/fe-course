/*
    Date 클래스 - 날짜 형식을 지원하는 클래스
    - new Date() 클래스 생성 후, 생성된 객체의 메소드를 호출하여 실행. new Date() 하면 윈도우 시스템 상 날짜 출력.
    - getFullYear(), getMonth(), getDay(), ... : 날짜 넣기, setMonth : 날짜 설정하기.
*/

let date = new Date();          // 클래스 생성
let date2 = Date.now();         // 오늘 날짜를 sec 로 환산한 숫자로 나옴.
let year = date.getFullYear();
let month = date.getMonth() + 1;    // 밀레니움 버그 때문에 +1 해줘야 함.
let day = date.getDate();       // getDay 는 요일 출력. getDate 는 날짜 출력.
console.log(date);
console.log(date2);
console.log(year);
console.log(month);
console.log(day);
console.log(`오늘은 ${year}년 ${month}월 ${day}일 입니다.`);
console.log(date.toLocaleDateString('ko-KR'));      // 한국 기준 날짜
console.log(date.toLocaleDateString('en-US'));      // 미국 기준 날짜
