import './cgv.css';
import './commons.css';
import { useState, useRef } from 'react';

export default function Join() {
    const idRef = useRef(null);
    const pwdRef = useRef(null);
    const cpwdRef = useRef(null);
    const nameRef = useRef(null);
    const phoneRef = useRef(null);
    const emailNameRef = useRef(null);
    const emailDomainRef = useRef(null);

    const initForm = {
        id:'',  pwd:'', cpwd:'', name:'', phone:'', email:'', emaildomain:'default'
    }

    const [form, setForm] = useState({...initForm});    // 이대로면 form 과 errors 에 중복 적용되기 때문에 shallow copy 를 해야함.
    const [errors, setErrors] = useState({...initForm});    // 별도 객체 생성 후 복사

    const handleFormChange = (e) => {
        const {name, value} = e.target;
        setForm({...form, [name]:value});
    }
    console.log(form);

    const handleJoinSubmit = (e) => {
        e.preventDefault();
        
        // validation check 값이 있는지 없는지
        if (idRef.current.value === '') {
            // alert('아이디를 입력해주세요')
            setErrors({...errors, id:'아이디를 입력해주세요'});
            idRef.current.focus();
        } else if (pwdRef.current.value === '') {
            alert('비밀번호를 입력해주세요')
            pwdRef.current.focus();
        } else if (cpwdRef.current.value === '') {
            alert('비밀번호를 한번 더 입력해주세요')
            cpwdRef.current.focus();
        } else if (nameRef.current.value === '') {
            alert('이름을 입력해주세요')
            nameRef.current.focus();
        } else if (phoneRef.current.value === '') {
            alert('전화번호를 입력해주세요')
            phoneRef.current.focus();
        } else if (emailNameRef.current.value === '') {
            alert('이메일 주소를 입력해주세요')
            emailNameRef.current.focus();
        } else if (emailDomainRef.current.value === 'default') {
            alert('이메일 주소를 선택해주세요')
            emailDomainRef.current.focus();
        } else {
            console.log('서버 전송');
        }
    }
    return(
    <>
        <div className="content">
            <div className="join-form center-layout">
                <h1 className="center-title">회원가입</h1>
                <form onSubmit={handleJoinSubmit}>
                    <ul>
                        <li>
                            <label htmlFor=""><b>아이디</b></label>
                            <span id="idMsg">{errors.id}</span>
                            <div>
                                <input type="text" name="id" id="id" placeholder="아이디 입력(6자~20자)" 
                                ref={idRef} value={form.id} onChange={handleFormChange} />
                                <button>중복확인</button>
                            </div>
                        </li>
                        <li>
                            <label htmlFor=""><b>비밀번호</b></label>
                            <span id="pwdMsg">12자 이내의 비밀번호를 입력해주세요.</span>
                            <div>
                                <input type="password" name="pwd" id="pwd" 
                                placeholder="비밀번호 입력(문자, 숫자, 특수문자 포함 6~12자)" 
                                ref={pwdRef} value={form.pwd} onChange={handleFormChange} />
                            </div>
                        </li>
                        <li>
                            <label htmlFor=""><b>비밀번호 확인</b></label>
                            <span id="cpwdMsg">비밀번호가 일치하지 않습니다.</span>
                            <div>
                                <input type="password" name="cpwd" id="cpwd" 
                                placeholder="비밀번호 재입력" ref={cpwdRef} value={form.cpwd} onChange={handleFormChange}/>
                            </div>
                        </li>
                        <li>
                            <label htmlFor=""><b>이름</b></label>
                            <span id="nameMsg">이름을 입력해주세요.</span>
                            <div>
                                <input type="text" name="name" id="name" placeholder="이름을 입력해주세요" 
                                ref={nameRef} value={form.name} onChange={handleFormChange} />
                            </div>
                        </li>
                        <li>
                            <label htmlFor="phone"><b>전화번호</b></label>
                            <span>전화번호를 입력해주세요.</span>
                            <div>
                                <input type="text" name="phone" id="phone" placeholder="휴대폰 번호 입력('-' 포함)" 
                                ref={phoneRef} value={form.phone} onChange={handleFormChange} />
                            </div>
                        </li>
                        <li>
                            <label htmlFor="emailname"><b>이메일</b></label>
                            <span>이메일 주소를 입력해주세요.</span>
                            <div>
                                <input type="text" name="emailname" id="emailname" 
                                placeholder="이메일 주소를 입력해주세요" ref={emailNameRef} value={form.email} onChange={handleFormChange}/>
                                <span>@</span>
                                <select name="emaildomain" id="emaildomain" ref={emailDomainRef} 
                                value={form.emaildomain} onChange={handleFormChange} >
                                    <option value="default">선택</option>
                                    <option value="naver.com">naver.com</option>
                                    <option value="daum.com">daum.net</option>
                                    <option value="gmail.com">gmail.com</option>
                                </select>
                                <button style={{width: '150px'}}>중복확인</button>
                            </div>
                        </li>
                        <li>
                            <button type="submit">가입하기</button>
                            <button type="button">가입취소</button>
                        </li>
                    </ul>
                </form>
            </div>
        </div>
    </>
    )
}