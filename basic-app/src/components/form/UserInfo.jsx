/*
    이름, 나이, 주소를 입력 받는 폼 생성
    - 각 폼에 유효성 체크 진행
    - 전송 버튼 클릭 시 유효성 체크 진행
*/
import { useRef, useState } from "react";
import {validateUserInfo} from "../../util/validate.js";

export default function UserInfo() {
    // const Refs = {nameRef:useRef(null), ageRef:useRef(null), ... }; 아래 Ref 하는 애들이 많으므로 한 번에 객체로 묶어 정리 가능.
    const nameRef = useRef(null);
    const ageRef = useRef(null);
    const addressRef = useRef(null);
    const jobRef = useRef(null);
    const [form, setForm] = useState({name:'', age:'', address:'', job:''});    // 넣을 값이 많기 때문에 한 번에 객체로 지정. form으로 주고 하나씩 입력.

    // const validateUserInfo = () => {
    //     if (nameRef.current.value.trim() === '') {
    //         nameRef.current.focus();
    //         return false;
    //     } else if (ageRef.current.value.trim() === '') {
    //         ageRef.current.focus();
    //         return false;
    //     } else if (addressRef.current.value.trim() === '') {
    //         addressRef.current.focus();
    //         return false;
    //     }
    //     return true;
    // }        // 이 함수를 util/validate.js 로 뺐음

    const handleSubmit = (e) => {
        e.preventDefault(); // 주소 창에 넘어간 내용 보이는 걸 막음

        // if (nameRef.current.value.trim() === '') {
        //     nameRef.current.focus();
        // } else if (ageRef.current.value.trim() === '') {
        //     ageRef.current.focus();
        // } else if (addressRef.current.value.trim() === '') {
        //     addressRef.current.focus();
        // } else{
        //     console.log('서버 전송! ===> ', form);
        // }        // 이 위에 거를 짧게 나타내려면 아래처럼. 함수 등록은 되어야 함.
        if (validateUserInfo(nameRef, ageRef, addressRef, jobRef)) {       // 위의 함수에서 다 써 있으면 true 가 나오고 실행됨.
        // if (validateUserInfo(Refs)) {        // Ref 를 객체로 묶어 한 번에 처리했을 경우
            console.log('서버 전송 ! ===> ', form);
        }
    }

    const handleChange = (e) => {
        const {name, value} = e.target;
        setForm({...form, [name]:value});
    }

    return(
        <div>
            <h1>UserInfo</h1>
            <form name="userInfoForm" onSubmit={handleSubmit}>  {/* onSubmit 은 submit 이 있을 때만 줘야 함 */}
                <ul>
                    <li>
                        <label htmlFor="name">이름</label>
                        { !form.name?.trim() ? <span style={{color:"red", fontSize:'12px'}}>이름을 입력해주세요</span> : '' }
                        <div>
                            <input type="text"
                            id="name"
                            name="name"
                            ref={nameRef}
                            // ref={Refs.nameRef}      // Ref 를 객체로 묶어 한 번에 처리했을 경우
                            value={form.name}
                            onChange={handleChange} />
                        </div>
                    </li>
                    <li>
                        <label htmlFor="age">나이</label>
                        { !form.age?.trim() && <span style={{color:"red", fontSize:'12px'}}>나이를 입력해주세요</span>}
                        <div>
                            <input type="text"
                            id="age"
                            name="age"
                            ref={ageRef}
                            value={form.age}
                            onChange={handleChange} />
                        </div>
                    </li>
                    <li>
                        <label htmlFor="address">주소</label>
                        { !form.address?.trim() && <span style={{color:"red", fontSize:'12px'}}>주소를 입력해주세요</span>}
                        <div>
                            <input type="text"
                            id="address"
                            name="address"
                            ref={addressRef}
                            value={form.address}
                            onChange={handleChange} />
                        </div>
                    </li>
                    <li>
                        <label htmlFor="job">직업</label>
                        { !form.job?.trim() && <span style={{color:"red", fontSize:'12px'}}>직업을 입력해주세요</span>}
                        <div>
                            <input type="text"
                            id="job"
                            name="job"
                            ref={jobRef}
                            value={form.job}
                            onChange={handleChange} />
                        </div>
                    </li>
                    <li>
                        <button type="submit">전송</button>
                        <button type="button" onClick={() => setForm({name:'', age:'', address:'', job:''})}>다시쓰기</button>
                    </li>
                </ul>
            </form>
        </div>
    )
}