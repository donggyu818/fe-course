/*
    Content 의 타이틀 관련 컴포넌트 모음
*/
export function Description({description}) {
    return(
        <p className="description">{description}</p>
    )
}
export function TitleDescription({TitleDescription}) {
    return(
        <p>{TitleDescription}</p>
    )
}
export function SubTitle({subtitle}) {
    return(
        <p className="description">{subtitle}</p>
    )
}
export function Title({title}) {
    return(
        <h2 className="title">{title}</h2>

    )
}