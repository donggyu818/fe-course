

export default function Image({img, alt, w, h, className}) { // class 로는 사용 불가
    return(
        <img src={img} 
        alt={alt} 
        style={ {
            w:w, 
            h:h
        } }
        className = {className}
        />
    )
}