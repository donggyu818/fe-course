/*
    싱글 구구단 정의
*/

export function singleGugudan (dan) {
    console.log();
    
    console.log(`   ${dan}단`);
    
    for (let i=1; i<=9; i++) {
        console.log(`${dan} ✖ ${i} = ${dan * i}`);
        
    }
}

/*
    멀티 구구단 정의
*/

export function multiGugudan (a,b) {
    console.log();
    console.log(` ${a}단 ~ ${b}단`);
    
    for (let i=1; i<=9; i++) {
        let rows = '';
        for (let j=a; j<=b ; j++) {
            rows += `${j} ✖ ${i} = ${j*i}\t`;
        }
        console.log(rows);
    }
}