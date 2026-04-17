import AvatarImage from "../commons/AvatarImage.jsx"
import { useSelector } from "react-redux"

export default function Logo({img, alt, style, title}) {
    const like = useSelector( (state) => state.like.count);
    const skillsList = useSelector( (state) => state.skills.list );
    return(
        <div className="header-logo">
            <AvatarImage 
                    img={img}
                    alt={alt}
                    style={style} />
            <h1 className="header-logo-title">{title}::SPA::Redux</h1>
            <h3>    ❤ ({like})</h3>
            <p>skills::{skillsList.join(', ')}</p>
        </div>
    )
}