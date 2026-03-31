/*
    ** async / await
    - 비동기식 로직을 나중에 처리하게 하지 않고 동기식 같이 순차적으로 처리하게 하는 키워드.
    - async 는 await 를 포함한 함수 앞에 붙임
    - await 는 실행되는 비동기 객체 앞에 붙임
*/
async function promiseTest() {
    let dataArray = null;   // null 로 주면 주소값도 없이 아예 안 만들어진 거. "= [];" 하면 배열로 만들어지긴 한 거.

    // Promise 객체 생성
    let promise1 = new Promise( (resolve, reject) => {
        let numbers = [1, 2, 3, 4, 5];
        resolve(numbers);
    } );
    
    await promise1      // await 는 얘부터 실행하라는 의미. await 가 포함된 곳의 함수 앞에 async 를 붙여줘야 함. 둘은 항상 같이 있거나 없거나.
        .then( result =>
            // console.log('result = ', result);
            dataArray = result
        )
        .catch( (error) => {
            console.log('error = ', error);
        } );

    console.log('dataArray = ', dataArray);     // 얘가 여기있으면 dataArray 에 numbers 배열을 넣지 못하고 항상 null 값만 나옴.
}

promiseTest();