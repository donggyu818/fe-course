import Image from '../../common/Image.jsx';

export default function AvatarImage({img, style}) {
    return(
        <>
            {/* <img src={img} alt="photo1" className={style}/> */}
            <Image img={img} alt="photo1" className={style} />
        </>
    )
}