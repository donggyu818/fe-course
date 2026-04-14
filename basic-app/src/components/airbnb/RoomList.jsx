import { useState, useEffect} from 'react';
import { fetchData } from "../../util/fetch.js";
import RoomAvatar from "./RoomAvatar.jsx"

export default function RoomList() {
    // fetchData 를 통해 list 가져오기!

    const [list, setList] = useState([]);
    useEffect( () => {
        const loadData = async() => {
            const data = await fetchData("http://localhost:5173/data/airbnb.json")
            setList(data.roomList)
        }
        loadData();
    }, [] );

    return(
        <div style={{display:"flex"}}>
            {list.map( (item, idx) => 
            <div key={item.pk}>
                <RoomAvatar
                    img={item.img}
                    name={item.name}
                    sdate={item.sdate}
                    edate={item.edate}
                    price={item.price}
                    score={item.score}
                    isGuest={item.isGuest}
                    isLike={item.isLike}
                />
                </div>
            )}
        </div>
    )
}