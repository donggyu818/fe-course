import Menu from "./Menu.jsx";

export default function MenuList({ menus, style }) {
    return(
        <nav>
            <ul className={style}>
                { menus?.map((menu, idx)=>       // 여기 menus?.map 하면 나오긴 함
                    <li key={idx}>
                        <Menu  href={menu.href} 
                                style={menu.style}
                                name={menu.name} />
                    </li>
                ) }
            </ul>
        </nav>
    )
}