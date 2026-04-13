/*
input 을 TextInput2 에 넣고 거기서 받는 형식으로 단순화 한 것.
*/
import { useRef, useState } from "react";
import {validateUserInfo2} from "../../util/validate.js";
import TextInput2 from "./TextInput2.jsx";

export default function UserInfo2() {
    const forms = [
        {label:"이름", type:"text", name:'name'},
        {label:"나이", type:"text", name:'age'},
        {label:"주소", type:"text", name:'address'},
        {label:"직업", type:"text", name:'job'}
    ];
    // const nameRef = useRef(null);
    // const ageRef = useRef(null);
    // const addressRef = useRef(null);
    // const jobRef = useRef(null);
    const refs = useRef({});
    const [form, setForm] = useState({name:'', age:'', address:'', job:''});    // 넣을 값이 많기 때문에 한 번에 객체로 지정. form으로 주고 하나씩 입력.

    const handleSubmit = (e) => {
        e.preventDefault(); // 주소 창에 넘어간 내용 보이는 걸 막음
        if (validateUserInfo2(refs)) {       // 위의 함수에서 다 써 있으면 true 가 나오고 실행됨.
        // if (validateUserInfo(Refs)) {        // Ref 를 객체로 묶어 한 번에 처리했을 경우
            console.log('서버 전송 ! ===> ', form);
        }
    }

    const handleChange = (e) => {
        const {name, value} = e.target;
        setForm({...form, [name]:value});
    }
    console.log(form);
    console.log(refs);
    

    return(
        <div>
            <h1>UserInfo</h1>
            <form name="userInfoForm" onSubmit={handleSubmit}>  {/* onSubmit 은 submit 이 있을 때만 줘야 함 */}
                <ul>
                        {
                            forms.map( (item, idx) => 
                            <li key={idx}>
                                <label htmlFor="name">{item.label}</label>
                                { !form?.[item.name]?.trim() && <span style={{color:"red", fontSize:'12px'}}>{item.label}을(를) 입력해주세요</span>}
                                <div>
                                    <TextInput2 item={item} value={form[item.name]} handleChange={handleChange} inputRef={ (e) => refs[item.name] = e } />
                                </div>
                            </li>
                            )
                        }
                    <li>
                        <button type="submit">전송</button>
                        <button type="button" onClick={() => setForm({name:'', age:'', address:'', job:''})}>다시쓰기</button>
                    </li>
                </ul>
            </form>
        </div>
    )
}