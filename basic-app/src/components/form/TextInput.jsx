import { useRef, useState } from "react"

export default function TextInput() {
    const textRef = useRef(null);
    const [text, setText] = useState('홍길동');

    const handleClick = () => {
        let text = textRef.current.value.trim();    // trim : 공백 제거
        if (text === "") {
            alert('내용을 입력하세요');
            textRef.current.focus();
        } else {
            console.log('전송 버튼 클릭!' + text);
        }
    }
    const handleChange = (e) => {        // 2. 텍스트 입력할 때마다 값이 넘어오게 하기
        setText(e.target.value);
        // console.log(text);          // 여기에서 출력하면 한 박자 늦게 입력됨. setText 로 값이 들어가는 것은 함수가 다 끝난 다음에 적용되기 때문.
    }
    console.log(text);              // 여기에서 출력해야 제대로 들어감.
    return(
        <div>
            <h2>Ref : 텍스트폼 입력</h2>
            <input type="text" name="text" value={text} ref={textRef} onChange={handleChange}/>
            <button type="button" onClick={handleClick}>전송</button>
        </div>
    )
}