export default function Menu({href, style, name, click}) {
    return (
        <a  href={href} 
            className={style}
            onClick={() => click(name)}     // (4/15) 클릭하면 name 정보를 보냄. 파라미터로 인자를 보내려면 무조건 콜백함수
            >{name}</a>
    )
}