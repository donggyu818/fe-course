import Job from "./Job.jsx"

export default function Jobs({jobs}) {
    return(
        <ul className="jobs">
            {jobs?.map( (item, idx) => 
                <li className="job" key={idx}>
                    <Job name={item.name} job={item.job} period={item.period} img={item.img} alt={item.alt}/>
                </li>
            )}
        </ul>
    )
}