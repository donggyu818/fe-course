/*
    6.1 은 스스로 해본 거. 8 은 강사님과 같이 한 거.
*/

// window.addEventListener('이벤트 종류', callback);
window.addEventListener('DOMcontentLoaded', () =>{     // DOMcontentLoaded : 돔이 만들어진 후에 이벤트를 실행하라
    showEmployees();
});

// 1. JSON 데이터 가져오기
const url = 'http://127.0.0.1:5500/javascript/13.asyncronuos/employees.json';
const getJson = async() => {
    let response = await fatch(url);
    return response.json();     // json 파일로 리턴받도록 함.
}

// 2. HTML 파일에 출력
const showEmployees = async() => {
    let employees = await getJson();
        // ** 위에 getJson 함수에 async 가 있기 때문에 getJson 함수 전체는 비동기가 됨. 그래서 여기도 먼저 처리하게 await 붙여야 함.
        console.log(employees);
        
    let output = `
        <h2>${employees.title}</h2>
        <table>
            <tr>
                <th>NO</th>
                <th>NAME</th>
                <th>AGE</th>
                <th>ADDRESS</th>
            </tr>
            ${
                employees.list.map((employee, idx) => 
                    `
                    <tr>
                        <td>${idx+1}</td>
                        <td>${employee.name}</td>
                        <td>${employee.age}</td>
                        <td>${employee.department}</td>
                    </tr>
                    `
                ).join("")
            }
            
        </table>
    `;

    document.querySelector('#content').innerHTML = output;
}