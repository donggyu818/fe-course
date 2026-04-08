
// import style from './Avatar.module.css';
import people1 from '../../assets/people1.webp';

export default function AvatarImage({img, style}) {
    return(
        <>
            <img src={img} alt="photo1" className={style}/>
        </>
    )
}