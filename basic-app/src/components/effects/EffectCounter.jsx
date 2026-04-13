/*
    
*/

import { useState, useEffect } from "react"

export default function EffectCounter() {
    const [count, setCount] = useState(0);

    useEffect( () => {
        console.log('😊마운트 시작 & 업데이트');
        return () => {
            console.log('😂컴포넌트 마운트 시 작업할 내용 호출!!');
            console.log('😂언마운트');
        }
    }, [count] );   // count 변경되면 log 찍으라는 말.
    
    return(
        <div style={{width:'400px', textAlign:'center', border:'1px solid gray'}}>
            <h1>{count}</h1>
            <button type="button" onClick={ () => setCount(count + 1) }>증가(+)</button>
            <button type="button" onClick={ () => setCount(count - 1) }>감소(-)</button>
        </div>
    )
}