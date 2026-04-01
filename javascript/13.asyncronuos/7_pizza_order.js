/*
    동기식, 비동기식을 섞어서 피자 주문 로직을 만들기
    - 1. 주문
    - 2. 피자 만들기 : 5초
    - 3. 배달
*/
async function pizzaOrder (name, address) {
    // 1. 주문
    console.log(`${name} 고객 주문 완료`);
    
    // 2. 피자 만들기
    let makePizza = new Promise((resolve, reject) => {  // 얘는 정의만 하는 거라 await는 여기 안 붙음.
        setTimeout(()=>{
            console.log(`피자 완성`);
            resolve();
        }, 5000);       // task Queue 에 5초 이따 들어감.
    });
    
    await makePizza
        .then( (resolve) => {console.log('resolve 호출 완료');} )
        .catch( (reject) => {console.log('reject 호출 완료');} );

    // 3. 배달
    console.log(`배달지 : ${address}`);
    
}

pizzaOrder('홍길동', '서울시 강남구 123');