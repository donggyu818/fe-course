import Menu from "./Menu.jsx";
import { useState } from "react";

export default function MenuList({ menus, style }) {
    // const [name, setName] = useState('Home');    // 문자열 name 을 받기에 '' 를 쓰고, 처음에 파란 박스가 나타나는 곳은 Home
    // const handleClick = (name) => {
    //     setName(name);
    // }
    // console.log('setName => ' , name);
    
    return(
        <nav>
            <ul className={style}>
                { menus?.map((menu, idx)=>       // 여기 menus?.map 하면 나오긴 함
                    <li key={idx}>
                        <Menu  href={menu.href} 
                                style={menu.style}
                                name={menu.name}
                                />  {/* (4/15) */}
                    </li>
                ) }
            </ul>
        </nav>
    )
}