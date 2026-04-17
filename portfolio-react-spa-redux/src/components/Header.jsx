import Logo from "./header/Logo.jsx";
import MenuList from "./commons/MenuList.jsx";
import ToggleButton from "./header/ToggleButton.jsx";

export default function Header({ data }) {  // App 에서 data 로 넘김
    // const [ menus ] = data;
    return (
        <header class="header">
            <Logo   img="/images/favicon.ico"
                    alt="header-logo"
                    style="header-logo-img"
                    title="Judy"
            />
            <MenuList menus={data?.menus} style="header-menu open" />
            <ToggleButton />
        </header>
    )
}
/*
export default function Header({ data }) {
    // data 객체가 존재하는 경우에만 구조분해할당 진행!
    // 구조분해 할당으로 반환하는 타입이 객체인 경우에는 초기화 작업 필수
    // 이렇게 줘도 되고 위에처럼 안 줄 거면 일일히 데이터가 있는지 체크 ('?') 를 해야 함.
    const { menus = [] } = data || {};
    return (
        <header class="header">
            <Logo   img="/images/favicon.ico"
                    alt="header-logo"
                    style="header-logo-img"
                    title="Judy"
            />
            <MenuList menus={menus} style="header-menu open" />
        <button class="header-toggle" id="menu-toggle"><i class="fa-solid fa-bars"></i></button>
        </header>
    )
}
*/
