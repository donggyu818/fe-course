import Menu from "./Menu.jsx";
import style from "./Menu.module.css"

export default function MenuList({ list }) {
    return(
        <ul className={style.menu_list}> {/* 인라인 스타일 따옴표 붙이기 */}
            {list.map( (menu, idx) => 
                <li>
                    <Menu title={menu.title}
                        href={menu.href}
                        style={menu.style}
                        key={idx} />
                </li>
            )}
        </ul>
    )
}