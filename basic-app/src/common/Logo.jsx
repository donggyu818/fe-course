

export default function Logo( {img, alt, w, h} ) {
    return(
        <img src={img}
        alt={alt} style={ {width: w, height:h} } />
    )   // 여기에 직접 스타일 지정(예_src="www.naver.com")할 수도 있고 지금처럼 AppCommon 에서 줄 수도 있음.
}