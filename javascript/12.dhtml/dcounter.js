/*
    DOM 객체를 생성하기 전 호출되는 함수
*/
// 함수 안에 함수 들어감 => 콜백 함수
window.addEventListener('DOMContentLoaded' , function () {
    // this.alert('content 로드 완료!!');
    initForm();
} ); // 이거를 이용하면 body 보다 늦게 뜨게 됨.

//initForm() : content 안에 추가되는 HTML 폼 생성 함수
function initForm() {
    let output = `
        <h1>Counter</h1>
    <div>
        <h2 id="number">0</h2>
        <!--
        <button type="button" onclick="counter('+')">increment(+)</button>
        <button type="button" onclick="counter('-')">decrement(-)</button>
        (주석 처리 한 거.) -->
        <button type="button" class="button" data-operation="increment">increment(+)</button>
        <button type="button" class="button" data-operation="decrement">decrement(-)</button>
    </div>
    `;
    document.querySelector('#content').innerHTML = output;  // dindex 파일의 id = content 에 HTML 형식으로 넣으라는 얘기
    // ** DHTML 에서는 화면을 구성한 후 이벤트가 있어야 함.
    // ** 얘가 아래 버튼 이벤트보다 위에 있어야 실행이 됨. 밑에 있으면 button 이 NAN 가 되어 오류도 안 나고 실행도 안 됨.
    
    // 버튼 이벤트 관리
    let buttons = document.querySelectorAll('.button');   // 클래스 이름이 다 button 이므로 전부 가져오게 All 사용.

    buttons.forEach ( (button) => {
        button.addEventListener('click', () => {
            let number = document.querySelector('#number').textContent;
            let type = button.dataset.operation;    // 값 가져오기
            if (type === 'increment') {
                document.querySelector('#number').textContent = ++number; // ++number 만 있으면 아직 자바스크립트에만 값이 있는 상태 => 값 보내야 함.
            } else {
                if (number > 0) {   // 음수가 되지 않도록 지정
                document.querySelector('#number').textContent = --number;   // --number 앞에 위치 지정해주면 값을 보내주게 됨.
                }
            }
        });
    } );
}