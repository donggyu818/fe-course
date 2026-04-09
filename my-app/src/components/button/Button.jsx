

export default function Button( {type, name, styles} ) {
    let { w, h, bg, color} = styles;
    // 위는 let w = styles.w 랑 같음
    
    const handleClick = (e) => {
        console.log(e);
        console.log(e.target);
        console.log(e.target.name, e.target.innerText);
        
    }
    
    return(
        <button type={type} name={name} style={ {width: w, height: h, backgroundColor: bg, color: color} }
        // onClick={() => {console.log('버튼 클릭');}} 이벤트 처리 - 콜백 함수를 줄 때
        onClick={handleClick}
        // onClick={ (e) => {console.log(e.target.name);} }    // 콜백 함수 방식
        >{name}</button>
        // <button type={type} name={name} style={ {width: styles.w, height: styles.h, backgroundColor: styles.bg, color: styles.color} }>{name}</button>
        // 4번째 줄에 styles 를 구조 분해 할당했다면 15~19 줄 처럼 간단하게 쓸 수 있고, 안 하면 주석(20번째 줄) 처럼 사용하면 됨.
    )
}