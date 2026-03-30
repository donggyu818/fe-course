/*
    숫자 증가/감소 함수 정의
    html 에서 불러서 처리하는 것이기 때문에 export 안 줘도 됨.
*/
function counter(type) {
    // 누른 버튼이 증가, 감소인지 확인
    // input type : value, <tag>content</tag> : textContent
    let number = document.querySelector('#number').textContent;
    console.log(type, number);
    
    if (type === '+') {
        document.querySelector('#number').textContent = ++number; // ++number 만 있으면 아직 자바스크립트에만 값이 있는 상태 => 값 보내야 함.
    } else {
        if (number > 0) {   // 음수가 되지 않도록 지정
        document.querySelector('#number').textContent = --number;   // --number 앞에 위치 지정해주면 값을 보내주게 됨.
        }
    }
    console.log(number);
}