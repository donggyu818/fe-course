import AvatarImage from "./AvatarImage.jsx";


// [{img:"../"}] imgList 는 이 형식이 됨

export default function AvatarImageList({imgList}) {
    return(
        <div>
            {
                imgList.map( (item, idx) =>
                    <AvatarImage img={item.img} style={item.style} key={idx} />     // key : 고유 키가 없다는 오류 뜰 때 쓰면 좋음
                )
            }
        </div>
    )
}