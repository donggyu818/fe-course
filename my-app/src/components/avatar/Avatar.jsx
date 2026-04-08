/*
    Avatar.jsx - 아바타 이미지 + 이름
*/
import style from "./Avatar.module.css";
import AvatarImage from "./AvatarImage.jsx"
// import people1 from "../../assets/people1.webp"; // 얜 고정되므로 변경할 수 있게 바꿔봄

export default function Avatar({name, img}) {
    return(
        <div className={style.avatar}>
            <AvatarImage img={img} style={style.avatar_img_circle} />  {/* 이렇게 넘기면 App 에서 바꾸면 바꿔짐 */}
            <p>{name}</p>
        </div>
    )
}