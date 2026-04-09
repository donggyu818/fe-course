/**
 * 부모 컴포넌트 : 최상위 컴포넌트 여기선 App
 */
// import style from './App.module.css';
// import Body from './components/Body.jsx';
// import './App.css';
// import Parent from './components/Parent.jsx';
import Menu from "./components/menu/Menu.jsx";
import AvatarImage from "./components/avatar/AvatarImage.jsx"
import people1 from './assets/people1.webp';
import people2 from './assets/people2.webp';
import people3 from './assets/people3.webp';
import mstyle from "./components/menu/Menu.module.css";
import Avatar from "./components/avatar/Avatar.jsx"
import AvatarImageList from "./components/avatar/AvatarImageList.jsx"
import AvatarList from "./components/avatar/AvatarList.jsx";
import style from "./components/avatar/Avatar.module.css";

export default function App() {
  const list = [
    // img : "../test/test.png" 로 주면 얜 무조건 public 에서 찾음
    {img: people1},     // 여긴 자바 코드
    {img: people2},
    {img: people3}  // 이 괄호 안에 style 도 넘길 수 있음
  ]
  const alist = [
    {name: "Smith", img: people1},  // Avatar.jsx 에서 name, img 순으로 선언되는데, 구조분해 할당에서는 순서 상관 없음.
    {name: "James", img: people2},
    {name: "Anne", img: people3}
  ]

  return (  
    <>
      {/* <AvatarImage img={people1} />
      <AvatarImage img={people2} />
      <AvatarImage img={people3} /> */}

      {/* 링크 거는 부분 */}
      {/* <Menu title="네이버" href="http://www.naver.com"
      style={mstyle.menu1} />
      <Menu title="구글" href="http://www.google.com"
      style={mstyle.menu2} />
      <Menu title="다음" href="http://www.daum.net" 
      style={mstyle.menu1} /> */}

      {/* 이미지 링크 걸기 */}
      <AvatarImage img={people1} style={style.avatar_img} />
      <Avatar name="Anne" img={people3} />
      <AvatarImageList imgList={list} />
      <AvatarList List={alist} />
    </>
  )
}
// return 에 있던 거
// <h1>hello react</h1>
// <button className={style.button}>App :: 클릭하세요</button>
// <Body />
// <Parent name="홍길동 아버지" />
