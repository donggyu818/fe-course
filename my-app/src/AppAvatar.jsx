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
    {img: people1, style:style.avatar_img},
    {img: people2, style:style.avatar_img_circle},
    {img: people3, style:style.avatar_img}
  ]
  const list2 = [
    {img: "https://cf.lottecinema.co.kr//Media/Event/c7cf96b70ebd44849b56332b8ca48d9a.jpg", style:style.avatar_img},
    {img: "https://cf.lottecinema.co.kr//Media/Event/c7cf96b70ebd44849b56332b8ca48d9a.jpg", style:style.avatar_img},
    {img: "https://cf.lottecinema.co.kr//Media/Event/c7cf96b70ebd44849b56332b8ca48d9a.jpg", style:style.avatar_img}
  ]
  const alist = [
    {name: "Smith", img: people1},  // Avatar.jsx 에서 name, img 순으로 선언되는데, 구조분해 할당에서는 순서 상관 없음.
    {name: "James", img: people2},
    {name: "Anne", img: people3}
  ]

  return (  
    <>
      <AvatarImage img={people1} style={style.avatar_img} />
      <Avatar name="Anne" img={people3} />
      <AvatarImageList imgList={list} />
      <AvatarImageList imgList={list2} />
      <AvatarList List={alist} />
    </>
  )
}
