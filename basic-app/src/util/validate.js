/*
    UserInfo 컴포넌트 폼 체크 함수
*/

export const validateUserInfo = (refs) => {
// export const validateUserInfo = (Refs) => {       // Ref 를 객체로 묶어 한 번에 처리했을 경우. 구조분해할당으로 받음.
        if (refs.nameRef.current.value.trim() === '') {
            nameRef.current.focus();
            // if (Refs.nameRef.current.value.trim() === '') {
            // Refs.nameRef.current.focus();
            return false;
        } else if (ageRef.current.value.trim() === '') {
            ageRef.current.focus();
            return false;
        } else if (addressRef.current.value.trim() === '') {
            addressRef.current.focus();
            return false;
        } else if (jobRef.current.value.trim() === '') {
            jobRef.current.focus();
            return false;
        }
        return true;
    }
/*
    UserInfo2 컴포넌트 폼 체크 함수
*/

export const validateUserInfo2 = (refs) => {
// export const validateUserInfo = (Refs) => {       // Ref 를 객체로 묶어 한 번에 처리했을 경우. 구조분해할당으로 받음.
        if (refs.current.name.value.trim() === '') {
            refs.current.name.focus();
            // if (Refs.nameRef.current.value.trim() === '') {
            // Refs.nameRef.current.focus();
            return false;
        } else if (refs.current.age.value.trim() === '') {
            refs.current.age.focus();
            return false;
        } else if (refs.current.address.value.trim() === '') {
            refs.current.address.focus();
            return false;
        } else if (refs.current.job.value.trim() === '') {
            refs.current.job.focus();
            return false;
        }
        return true;
    }