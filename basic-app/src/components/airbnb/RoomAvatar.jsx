import Image from '../../common/Image';
import './Airbnb.css';


export default function RoomAvatar({pk, img, name, sdate, edate, price, score, isGuest, isLike, key}) {

    return(
        <div className='room_container' key={pk}>
            <Image img={img}
                    alt="숙소1"
                    className="room_img" />
            {isGuest && <span className='guest_preference'>게스트 선호</span> }
            {isLike && <span className='like'>🤍</span>}
            <p className='room_title'>{name}</p>
            <p className='room_date'>{sdate}~{edate}</p>
            <div className='room_price'>
                <span>총액 {price}원</span>
                <span>⭐ {score}</span>
            </div>
        </div>
    )
}