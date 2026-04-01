let key = '75eaff2b6851a5a576005482ea148a43';
// let targetDt = `20260101`;

const getJson = async(type, date) => {
    const data_url = `https://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/search${type}BoxOfficeList.json?key=${key}&targetDt=${date}`;
    let response = await fetch(data_url);
    return response.json();
}

const getMovieInfo = async(movieCd) => {
    const info_url = `https://www.kobis.or.kr/kobisopenapi/webservice/rest/movie/searchMovieInfo.json?key=${key}&movieCd=${movieCd}`;
    let response = await fetch(info_url);
    return response.json();
}

/* openModal 띄우기 */
const openModal = (infoObj) => {
    let modal = document.querySelector('#modal');
    let modalBody = document.querySelector('#modal-body');
    let modalClose = document.querySelector('#modal-close');

    modalClose.addEventListener('click', () => {
        modal.style.display = 'none';
        modalBody.innerHTML = '';
    })

    let output = `
        <h3>[${infoObj.rank}]${infoObj.movieNm}</h3>
        <ul>
            <li><label>감독 : </label> ${infoObj.director}</li>
            <li><label>배우 : </label> ${infoObj.actors}</li>
        </ul>
    `

    modal.style.display = 'flex';
    modalBody.innerHTML = output;
}

const handleMovieInfo = async(movieCd, rank) => {
    // 배우들 따로 모달로 띄우기 위해 함수 별도 생성.
    let info = await getMovieInfo(movieCd)
    let movieNm = info.movieInfoResult.movieInfo.movieNm;
    let director = info.movieInfoResult.movieInfo.directors[0].peopleNm;
    let actors = info.movieInfoResult.movieInfo.actors[0].peopleNm;

    openModal({movieNm, director, actors, rank});
}

// handleBoxOffice 함수 정의
const handleBoxOffice = async() => {
    let stype = document.querySelector('#type').value;
    let sdate = document.querySelector('#sdate').value;

    if (stype === 'default') {
        alert('조회 범위를 선택해주세요');
        document.querySelector('#type').focus();
    } else if (sdate === '') {
        alert('날짜를 선택해주세요');
        document.querySelector('#sdate').focus();
    } else {    // 이 날짜 형식을 출력하면 2026-01-01 식으로 들어가고, 위에 targetDt 에는 20260101 식으로 들어가야 하므로 '-' 을 제거해야 함.
        targetDt = sdate.split("-").reduce((acc, cur) => acc + cur);    // reduce 는 원래 합을 구하는 거지만, 문자형의 경우 접합연산자 역할을 함.
        // console.log(sdate, typeof sdate);
        // console.log(targetDt);

        let kobis = await getJson(stype, targetDt);    // getJson 에 입력받는 날짜를 가지고 감. 이후 getJson 에서 갖고 간 날짜 출력.
        let kobisbox = kobis.boxOfficeResult;
        let kobisboxlist = null;

        if (stype === 'Daily'){
            kobisboxlist = kobis.boxOfficeResult.dailyBoxOfficeList;
        } else {
            kobisboxlist = kobis.boxOfficeResult.weeklyBoxOfficeList;
        }
        // <h3>${kobis.boxOfficeResult.showRange}</h3> 라고 주는 걸 앞에 kobis.boxOfficeResult 를 변수로 지정하여 짧게 쓰게 함.

        let output = `
            <h1>${kobisbox.boxofficeType}</h1>
            <h3>${kobisbox.showRange}</h3>
            <table border=1>
                <tr>
                    <th>순위</th>
                    <th>영화제목</th>
                    <th>개봉일</th>
                    <th>당일 관객수 (명)</th>
                    <th>누적 관객수 (명)</th>
                    <th>누적 매출액 (원)</th>
                </tr>
                ${kobisboxlist.map((item) =>
                    `
                    <tr>
                        <td>${item.rank}</td>
                        <td><a href='#' onclick="handleMovieInfo(${item.movieCd}, ${item.rank})">${item.movieNm}</a></td>
                        <td>${item.openDt}</td>
                        <td>${parseInt(item.audiCnt).toLocaleString()}</td>
                        <td>${parseInt(item.audiAcc).toLocaleString()}</td>
                        <td>${parseInt(item.salesAcc).toLocaleString()}</td>
                    </tr>
                    `
                ).join("")  // parseInt : 정수로 나타내기, toLocalsSrting : 3자리 마다 ',' 추가
                }
            </table>
        `;
        document.querySelector("#content").innerHTML = output;
    }
}