

export default function TextInput2( {item, value, handleChange, inputRef} ) {
    const { type, name } = item;
    return(
        <input  type={type}
                id={name}
                name={name}
                value={value}
                onChange={ (e) => {handleChange(e)} }  // handleChange 는 부모인 UserInfo 에 있으므로 전달해주려면 이벤트로 넘겨야 함.
                ref={inputRef} />
    )
}