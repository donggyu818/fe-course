
window.addEventListener('DOMContentLoaded', () => {
    show2();
});

const employ_url = 'http://127.0.0.1:5500/javascript/13.asyncronuos/employees.json';

const getEmploy = async() => {
    let response = await fetch(employ_url);
    return response.json();
}

const show2 = async() => {
    let jsonData2 = await getEmploy();
    console.log(jsonData2, typeof jsonData2);

    let output2 = `
    <h3>${jsonData2.title}</h3>
    <table border=1>
        <tr>
            <th>name</th>
            <th>age</th>
            <th>department</th>
        </tr>
        ${
            jsonData2.list.map( item =>    // map 돌려서 td 수작업 했던 거를 짧게 줄이기 가능.
            `<tr>
                <td>${item.name}</td>
                <td>${item.age}</td>
                <td>${item.department}</td>
            </tr>`
            ).join("") 
        }
    </table>
    `;

    document.querySelector('#content').innerHTML = output2;
}