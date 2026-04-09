import { useState } from 'react';

export default function BasicCounter({click, total}) {
    // let count = 0;
    const [count, setCount] = useState(0);
    let [flag, setFlag] = useState(false);

    const handleCounter = (e) => {  // 이렇게 함수로 만들어도 되고 아래 incre, decre 정의한 것처럼 해도 됨.
        let type = e.target.name;
        if (type === "+") {
            if (count < 10) {
                setCount(count + 1); 
                setFlag(true);
                click(type);
            }
        } else if (type === "-") {
            if (count > 0) {
                setCount(count -1);
                setFlag(false);
                click(type);
            }
        } else {
            setCount(0);
        }
    }

    const increment = () => {
        // count += 1;
        // if (count < 10) setCount(count + 1);    // 한 줄이면 {} 생략해도 됨.
    }
    const decrement = () => {
        // count -= 1;
        // if (count > 0) {
        // setCount(count -1);
        // }
    }
    const reset = () => {
        // count = 0;
        // setCount(0);
    }

    return(
        <div style={{border: '1px solid gray', padding: '10px 50px'}}>
            <h1>React Counter</h1>
            <h2>Counter :: 
                { flag 
                ? <span style={{color:'red'}}> {count} / {total}</span> 
                : <span style={{color:'blue'}}> {count} / {total}</span> }
            </h2>
            <div>
                <button type="button" onClick={handleCounter} name='+'>증가(+)</button>
                <button type="button" onClick={handleCounter} name='-'>감소(-)</button>
                <button type="button" onClick={handleCounter} name='reset'>초기화</button>
            </div>
        </div>
    )
}