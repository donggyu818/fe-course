// 최초 호출되는 이벤트 함수: window.addEventListener()
window.addEventListener( 'DOMContentLoaded', () => {
    show(); // getJson 도 지정해야하지만, show 안에 getJson 이 있으므로 show 만 줘도 됨.
} );

// getJson 함수 생성
const furits_url = 'http://127.0.0.1:5500/javascript/13.asyncronuos/fruits.json';

const getJson = async() => {
    let response = await fetch(furits_url);
    return response.json();
}

// show 함수 생성
const show = async() => {
    let jsonData = await getJson();
    console.log('jsonData => ', jsonData, typeof jsonData);

    let output = `
    <h2>${jsonData.title}</h2>
    <table border=1>
        <tr>
            <th>NO.</th>
            <th>NAME</th>
            <th>COLOR</th>
            <th>EMOJI</th>
        </tr>
        ${  // $ 안에는 자바스크립트 코드.
            jsonData.list.map( (fruit, idx) =>    // map 돌려서 td 수작업 했던 거를 짧게 줄이기 가능.
            `<tr>
                <td>${idx+1}</td>
                <td>${fruit.name}</td>
                <td>${fruit.color}</td>
                <td>${fruit.emoji}</td>
            </tr>`
            ).join("")  // 백틱 연산자(`) 로 주면 그 사이는 하나로 봄. => {return} 생략 가능. join : 배열 객체를 구분자로 분리하는 거
        }
    </table>
    `;
/*
        <tr>
            <td>${jsonData[0].name}</td>
            <td>${jsonData[0].color}</td>
            <td>${jsonData[0].emoji}</td>
        </tr>
        <tr>
            <td>${jsonData[1].name}</td>
            <td>${jsonData[1].color}</td>
            <td>${jsonData[1].emoji}</td>
        </tr>
        <tr>
            <td>${jsonData[2].name}</td>
            <td>${jsonData[2].color}</td>
            <td>${jsonData[2].emoji}</td>
        </tr>
*/
    document.querySelector('#content').innerHTML = output;
}
// show();  코드 잘 나오는지 nodemon 으로 확인용.
