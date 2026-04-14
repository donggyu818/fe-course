/*
    fetch 함수 호출
*/
export const fetchData = async(url) => {
            const response = await fetch(url);
            const jsonData = await response.json(); // fetch 를 받은 response 또한 비동기이기 때문
            // setData(jsonData);       // 여기에 setState 가 정의되지 않았기 때문에 불러오지 못함. return 만 해주기.
            return jsonData;
        }