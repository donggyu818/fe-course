/*
    loginCheck() - 로그인 유효성 체크 함수
*/

// DOM 객체 생성 후 객체별 이벤트 호출

window.addEventListener('DOMContentLoaded', () => {
    let id = document.querySelector('#id');
    let pwd = document.querySelector('#pwd');
    let idMsg = document.querySelector('#idMsg');
    let pwdMsg = document.querySelector('#pwdMsg');
    let btnLogin = document.querySelector('#btnLogin');

    id.addEventListener('input', () => {
        if(id.value.trim() !== '') {
            idMsg.style.display = 'none';
        }
    });
    pwd.addEventListener('input', () => {
        if(pwd.value.trim() !== '') {
            pwdMsg.style.display = 'none';
        }
    });
    btnLogin.addEventListener('click', () => {
        let isValid = true;
        if(id.value.trim() === '') {
            idMsg.style.display = 'block';
            idMsg.style.fontSize = '14px';
            idMsg.style.color = 'red';
            idMsg.textContent = '아이디를 입력해주세요';
            id.focus();
            isValid = false;
        } else if(pwd.value.trim() === '') {
            pwdMsg.style.display = 'block';
            pwdMsg.style.fontSize = '14px';
            pwdMsg.style.color = 'red';
            pwdMsg.textContent = '비밀번호를 입력해주세요';
            pwd.focus();
            isValid = false;
        } else {
            if(isValid) {
                console.log('서버전송 ---> ', id.value, pwd.value);
            }
        }
    });
}) 

/* // 예전 방식
const loginCheck = () => {
    let id = document.querySelector('#id');     // 여기 value 안 붙여도 됨. 그러면 아래 if 조건문에 .value 를 씀. focus 도 단순해짐.
    let pwd = document.querySelector('#pwd');
    let idMsg = document.querySelector('#idMsg');
    let pwdMsg = document.querySelector('#pwdMsg');
    
    if (id.value.trim === '') {                 // trim : 공백 제거
        alert('아이디를 입력해주세요');
        idMsg.textContent = '아이디를 입력해주세요' ;    // html 에서 input 이 아니라 태그 사이에 들어가는 것이므로 textcontent
        idMsg.style.fontSize = '14px';
        idMsg.style.color = 'red';
        id.focus();
    } else if (pwd.value === '') {
        alert('비밀번호를 입력해주세요.');
        pwdMsg.textContent = '비밀번호를 입력해주세요';
        pwdMsg.style.fontSize = '14px';
        pwdMsg.style.color = 'red';
        pwd.focus();
    } else {
        // 서버 전송
        console.log('서버 전송', id, pwd.value);
    };

    id.addEventListener('input', () => {
        if(id.value.trim() ==='' ) {
            idMsg.style.display = 'block';
        } else {
            idMsg.style.display = 'none';
        }
    });
}
*/