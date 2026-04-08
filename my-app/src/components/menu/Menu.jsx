// import mstyle from "./Menu.module.css";

export default function Menu({title, href, style}) {
    return(
        <a href={href} className={style}>{title}</a>    // style 이 적용 안 됨. 둘 중 하나 선택해야 함.
    )
}