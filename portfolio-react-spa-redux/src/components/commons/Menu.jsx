import { Link, NavLink } from "react-router-dom"

export default function Menu({href, style, name}) {
    return (
        <NavLink to={href} end={href === "/"}
        className={({isActive}) => 
            (isActive ? `${style} active` : style )
        }>{name}</NavLink>  // isActive 는 고정. 바꾸면 안 됨.
        
        // <Link to={href} className={style}>{name}</Link>

        // <a  href={href} 
        //     className={style}
        //     onClick={() => click(name)}     // (4/15) 클릭하면 name 정보를 보냄. 파라미터로 인자를 보내려면 무조건 콜백함수
        //     >{name}</a>
    )
}