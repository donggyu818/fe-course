import { useRef, useState } from "react"

export default function Login() {
    const idRef = useRef(null);
    const pwdRef = useRef(null);
    const nameRef = useRef(null);

    const [form, setForm] = useState({id:'', pwd:'', name:''});   // 4. 객체로 만들 거

    // 1. handleLoginCheck 로 로그인 폼 만들고 알림창 띄움.
    const handleLoginCheck = () => {
        let textid = idRef.current.value.trim();
        let textpwd = pwdRef.current.value.trim();

        if ( textid === '') {
            alert('아이디를 입력하세요');
            idRef.current.focus();
        } else if ( textpwd === '') {
            alert('비밀번호를 입력하세요')
            pwdRef.current.focus();
        } else {
            // 아이디, 패스워드 전송 ==> Object Literal
            // 출력 예시_{id:'test', password:'1234'}
            let sendObj = {
                id: textid,
                password: textpwd
            }
            console.log(sendObj);
            alert('로그인 성공');
        }
    }

    const handleLoginSubmit = (e) => {
        e.preventDefault();             // 3. 이걸 써 줘야 submit 일 때 값이 리셋되지 않고 포커스가 제대로 작동함. 그리고 값이 주소에 노출되지 않음.
        let textid = idRef.current.value.trim();
        let textpwd = pwdRef.current.value.trim();

        if ( textid === '') {
            alert('아이디를 입력하세요');
            idRef.current.focus();      // 2. type 을 submit 으로 줬을 때 이거는 포커스가 되지 않고 값이 리셋됨. submit 이 값을 돔을 통해 넘어가기 때문.
        } else if ( textpwd === '') {
            alert('비밀번호를 입력하세요')
            pwdRef.current.focus();
        } else {
            // 아이디, 패스워드 전송 ==> Object Literal
            // 출력 예시_{id:'test', password:'1234'}
            let sendObj = {
                id: textid,
                password: textpwd
            }
            console.log(sendObj);
            alert('로그인 성공');
        }
    }

    const handleFormChange = (e) => {        // 4. 객체 만들 때 바꾸게 할 함수
        // 이벤트 발생 시 이벤트 객체의 name, value 가져오기. 주석처리 한 2개랑 한 번에 두 개 준 거랑 같음.
        // let name = e.target.name;
        // let value = e.target.value;
        let {name, value} = e.target
            
        // console.log(e.target.name, e.target.value);
        // Form 은 위에서 객체로 줬기 때문에 객체로 줘야함. 이렇게 주면 id, pwd 가 같이 바뀌고, 둘 다 바뀌니 id 만 쓰면 에러남.
        setForm({...form, [name]: value}); // 새로운 폼을 생기게 함. 이렇게 쓰면 출력할 특성이 여러 개여도 이렇게만 쓰면 됨.
    }
    console.log(form);

    return(
        <>
            <h1>로그인 폼</h1>
            <form name="login_form" onSubmit={handleLoginSubmit}>
                <ul>
                    <li>
                        <label htmlFor="id">아이디</label>
                        <input type="text" id="id" name="id" ref={idRef} value={form.id} onChange={handleFormChange} />
                    </li>
                    <li>
                        <label htmlFor="pwd">패스워드</label>
                        <input type="password" id="pwd" name="pwd" ref={pwdRef} value={form.pwd} onChange={handleFormChange} />
                    </li>
                    <li>
                        <label htmlFor="name">이름</label>
                        <input type="text" id="name" name="name" ref={nameRef} value={form.name} onChange={handleFormChange} />
                    </li>
                    <li>
                        <button type="submit">로그인</button>       {/* type = submit 으로 주면 위에 onSubmit 이랑 연결됨 */}
                        <button>다시 입력</button>
                    </li>
                </ul>
            </form>
        </>
    )
}