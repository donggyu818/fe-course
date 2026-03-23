/*
    데이터 타입에 상관없이 문자 => 숫자로 변환하는 함수.
*/

// export = 함수(현재 : toNumber)를 불러와서 사용할 수 있게 함.
export function toNumber (num1, num2){
    // 숫자로 변환 후 반환을 함.
    return {num1: parseInt(num1), num2: parseInt(num2)};
}