/*
KOBIS, KMDB API 를 활용한 박스 오피스
*/
const kobis_key = '75eaff2b6851a5a576005482ea148a43';
const kmdb_key = '59H5F0U0OFQB3R2261VM';


// KOBIS API - 박스 오피스 가져오기
async function getKobis() {
    let date = new Date();
    let year = new String(date.getFullYear());      // 숫자형이라 concat이 제대로 안 됨. string 으로 바꿈.
    let month = new String(date.getMonth() +1);     // month 는 밀레니움 버그 때문에 +1 해야 함.
    let day = new String(date.getDate() -1 );
    month = (month.length = 1) ? '0' + month : month ;    // 단독으로 뽑으면 202646 로 나옴. 월 / 일 이 1자리일 때 0을 앞에 붙이는 과정.
    day = (day.length = 1) ? '0' + day : day ;
    
    let today = year.concat(month).concat(day);

    let url = `http://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=${kobis_key}&targetDt=${today}`;
    let response = await fetch(url);
    return response.json();
};

// KMDB API - 포스터 가져오기
async function getPoster (movieNm, openDt) {
    openDt = openDt.split('-').reduce((acc, cur) => acc+cur);   // 함수에 openDt 가 있으므로 let 으로 선언된 거
    
    let url = `http://api.koreafilm.or.kr/openapi-data2/wisenut/search_api`;
    url += `/search_json2.jsp?collection=kmdb_new2&detail=Y`;
    url += `&title=${movieNm}`;
    url += `&releaseDts=${openDt}&ServiceKey=${kmdb_key}`;

    let response = await fetch(url);
    let kmdb = await response.json();
    
    let posters = await kmdb.Data?.[0]?.Result?.[0]?.posters.split('|');      // Data? : Data 가 null 이 아닐 때. null 이면 출력이 안 되기에 넣어줌.
    return posters?.[0];
    
}

window.addEventListener('DOMContentLoaded', () => {
    createBoxoffice();
});

async function showList (list) {
    let slist = list.slice(0,5).map( async(movie, idx) => {
        let movieNm = movie.movieNm;
        let openDt = movie.openDt;
        let audiAcc = movie.audiAcc;
        let poster = await getPoster(movie.movieNm, movie.openDt);
        // console.log(movie.movieNm, movie.openDt, poster);
        return { movieNm, openDt, audiAcc, poster };
        
        // } else {
            //     break;   // map 은 무조건 끝까지 돌림. if 로 얼마나 쓸 지 정할 수 없기에 break 를 쓸 수 없음. => map 을 쓰려면 5개만 갖고와서 돌리면 됨.
            // }
        } );
    return await Promise.all(slist);        // promise 라는 객체에 slist 를 넣을때  다 넣을 때까지 return 을 하지 않고 다 하고나서 return.
}



async function createBoxoffice() {
    let kobis = await getKobis();
    let list = kobis.boxOfficeResult.dailyBoxOfficeList;
    let outputList = await showList(list);

    let output = `
    <ul>
        ${outputList.map( (movie) => 
        `
        <li>
            <div>
                <img src="${movie.poster}" alt="Movie Chart Img" width="200px">
            </div>
            <div><h4>${movie.movieNm}</h4></div>
            <div><h5>누적관객수 ${parseInt(movie.audiAcc).toLocaleString()}</h5></div>
            <div><h5>개봉일 ${movie.openDt}</h5></div>
        </li>
        `    
        ).join("")
        }
    </ul>
    `;
    console.log(output);
    document.querySelector('#boxoffice').innerHTML = output;
}






