/*

*/
window.addEventListener('DOMContentLoaded', () => {
    show();     // 돔을 생성한 이후에 show 로 출력하게 함.
})

let key = '75eaff2b6851a5a576005482ea148a43';
let targetDt = `20260101`;
const data_url = `https://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=${key}&targetDt=${targetDt}`;

const getJson = async () => {
    let response = await fetch(data_url);
    return response.json();
}

const show = async() => {
    // 1. JSON 데이터 갖고오기
    let kobis = await getJson();
    console.log(kobis);
    
    // 2. 출력 데이터 생성 : DHTML
    let output = `
        <h1>${kobis.boxOfficeResult.boxofficeType}</h1>
        <h3>일자 : ${kobis.boxOfficeResult.showRange}</h3>
        <table border=1>
            <tr>
                <th>순위</th>
                <th>영화제목</th>
                <th>개봉일</th>
                <th>당일 관객수 (명)</th>
                <th>누적 관객수 (명)</th>
                <th>누적 매출액 (원)</th>
            </tr>
            ${kobis.boxOfficeResult.dailyBoxOfficeList.map((item, idx) =>       // map 은 배열이므로 사용 가능.
                `
                    <tr>
                    <td>${item.rank}</td>
                    <td>${item.movieNm}</td>
                    <td>${item.openDt}</td>
                    <td>${item.audiCnt}</td>
                    <td>${item.audiAcc}</td>
                    <td>${item.salesAcc}</td>
                    </tr>
                `
            ).join("")      // 얘가 없으면 문자열이 아닌 배열 형태로 나와서 ',' 가 계속 찍혀 나옴.
            }
        </table>
    `;

    // 3. 출력
    document.querySelector('#content').innerHTML = output;

}