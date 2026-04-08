
export default function Child({ children }) {
    // let {name} = props;
    return(
        <>
            <h1>Hello~</h1>
            {children}
        </>
    )
}

// export default function Child({name, age, address}) {
//     // let {name} = props;
//     return(
//         <h1>Hello~ My name is {name}, {age}, {address}</h1>
//     )
// }