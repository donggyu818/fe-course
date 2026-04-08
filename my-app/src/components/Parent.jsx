import Child from './Child.jsx';

function PropsComp() {
    return(
        <h1>PropsComp!!</h1>
    )
}

export default function Parent(props) {
    // let info = {
    //     name : "홍길동",
    //     age: "20",
    //     address: "서울시"
    // }
    return(
        <>
            <h1>Parent:: {props.name}</h1>
            {/* <Child {...info} /> */}
            <Child>
                <PropsComp />
            </Child>
        </>
    )
}