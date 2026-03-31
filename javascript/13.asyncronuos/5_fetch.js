/*
    fetch(resource) : 데이터 파일을 호출하여 데이터를 가져오는 함수
    - JSON(JavaScript Object Notation) 파일을 호출      - (Object) : {} 로 되어있는 거
    - Web API 구조는 보통 JSON 형태임.
        json이 별도의 파일로 존재하면 프로퍼티도 문자("" 이용)로 줘야 함.
*/

/* 형태
fetch()
    .then()
    .catch();
*/

const data_url = 'http://127.0.0.1:5500/javascript/13.asyncronuos/data.json'    // 주소를 여러번 쓴다면 변수로 지정하고 써도 됨.

const getJson = () => {
    fetch('http://127.0.0.1:5500/javascript/13.asyncronuos/data.json')
        .then((response) => { return response.json() } )
        .then( (jsonData) => {console.log('jsonData = ', jsonData); } )
        .catch((error) => { console.log('error => ', error); } );
}

function getJson2 () {      // 이거처럼 일반 함수 형태로 줘도 되고, 화살표 함수로 줘도 됨.
    fetch(data_url)
        .then( response => response.json() )  // 이렇게 주면 response 타입이 그대로 나오지 않고, json 파일에 써있는 정보가 나옴. 별도의 함수를 만들고 그걸 출력해야 함.
        .then( jsonData => console.log('jsonData2 = ', jsonData) )       // 위에서 then 안의 response 한 값이 여기 () 안으로 들어오게 됨.
        .catch( error => console.log('error => ', error) );
}

const getJson3 = async() => {       // async 가 붙어있으면 전체를 비동기 객체로 봄.
    let response = await fetch(data_url);
    return response.json();         // 아래에서 출력하려면 여기선 return 써서 넘기기
}
async function getJson4 () {
    let response = await fetch(data_url);
    console.log('response = \n', response);
}

async function test() {
    let jsonData1 = await getJson3();
    console.log('test = ', jsonData1);
}

getJson();
getJson2();
// let jsonData1 = getJson3();
// console.log(jsonData1);     // getJson3 는 async가 있으므로 전체를 비동기 객체로 봐서 나중에 처리하고 값이 들어가지 않은 이것부터 처리함. => 함수 하나 더 만들어서 getJson3 부터 되게 함.
test();
getJson4();
