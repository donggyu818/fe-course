import Avatar from "./Avatar";
import style from "./Avatar.module.css";

export default function AvatarList({List}) {
    return(
        <div className={style.avatar_list}>
            { List.map((item, idx) => 
                <Avatar name={item.name} img={item.img} key={idx} />
            )}
        </div>
    )
}