import AvatarImageList from "../avatar/AvatarImageList.jsx"
import style from "../avatar/Avatar.module.css"
import { useState, useEffect } from 'react';
import { fetchData } from "../../util/fetch.js";

export default function EffectFetch2() {
    const [data, setData] = useState([]);
    useEffect( () => {      // useEffect 는 바로 렌더링되어야 하는데 await async 하면 이와 상충되어 안 나옴
        // 비동기 함수 fetchData 작성 및 호출
        const loadData = async() => {  // 같은 이름의 함수로 만들게 되면 무한 루프 돌게 됨. 함수가 함수를 부름
            const jsonData = await fetchData("http://localhost:5173/public/data/avatar.json");
            const newList = await jsonData.List.map( (item) => ({
                ...item,
                style: style.avatar_img_circle
            }) );    // ...item : img 는 그대로 들고와야하기에 있는 건 들고와야함. 원래 {}과 return 을 쓰거나 
            // {} 를 생략하면 되는데 이때 () 를 써서 하나로 묶으면 {} 가 return 에 그것이 아니라 객체로 인식함
            // setData(jsonData);
            setData(newList);
        }
        loadData();

        // fetch("http://localhost:5173/public/data/List.json")
        //     .then( (response) => response.json() )
        //     .then( (jsonData) => setData(jsonData)  )
        //     .catch( (error) => console.log(error) );
    }, [] );

    console.log('데이터 출력 ---> ',data);

    return(
        <>
        <AvatarImageList imgList={data} />
        </>
    )
}