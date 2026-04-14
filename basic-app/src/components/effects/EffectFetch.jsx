import AvatarList from '../avatar/AvatarList.jsx';
import people1 from '../../assets/people1.webp';
import people2 from '../../assets/people2.webp';
import people3 from '../../assets/people3.webp';
import { useEffect, useState } from 'react';
import { fetchData } from '../../util/fetch.js';

export default function EffectFetch() {
    const [data, setData] = useState([]);
    const [count, setCount] = useState(0);
    const url = 'http://localhost:5173/data/avatar.json';

    useEffect( () => {
        console.log('마운트 or 업데이트 시 호출!!!');
        const loadData = async() => {
            // data = await fetch(url)      // 비동기라 return 까지 다 하고 동작함. => async / await 사용
            //                 .then( (response) => response.json() ) 
            //                 .then( (jsonData) => jsonData )     // fetch 타입이 promise 타입이 return 되기에 권장 X
            //                 .catch( (error) => console.log(error) );

            // const response = await fetch(url);
            // const jsonData = await response.json();     // ** useEffect 로 갖고온 데이터는 저장 위치가 달라서 useState 로 관리해줘야 함.
            // setData(jsonData);
            // console.log('jsonData ---> ', jsonData);

            // 4/14 기존 json 파일 삭제 후 avatar 로 통합
            const jsonData = await fetchData('http://localhost:5173/data/avatar.json');
            setData(jsonData.alist)
        }
        loadData();
    }, [count] )

    return(
        <>
            <h2>{count}</h2>
            <AvatarList List={data} />
            <button type='button' onClick={ () => {setCount(count + 1)} } > 증가 (+) </button>
        </>
    )
}