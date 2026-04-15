import Major from "./Major.jsx"

export default function Majors({ majors }) {
    /*
        const {majors} = data || [];    // data 존재 여부 체크 및 초기화
    */
    
    return(
        <ul className="majors">
            { majors?.map( (item, idx) => 
            <li className="major" key={idx}>
                <Major title={item.title} subjects={item.subjects} icon={item.icon} />
            </li>
            )}
        </ul>
    )
}