import { Title, Description } from "../commons/Titles.jsx"
import Majors from "./Majors.jsx";
import Jobs from "./Jobs.jsx";

export default function About({ data }) {
    // const lorem = `Lorem ipsum dolor sit amet consectetur adipisicing elit. 
    //             Inventore porro laborum, ut eius blanditiis voluptates officiis, 
    //             doloribus at autem aliquid consectetur perspiciatis? Sed dolor 
    //             placeat modi commodi, a alias velit!`;  // 길어서 따로 정의함
    
    return(
        <section id="about" className="section container">
            <Title title="About me" />
            <Description description={data?.lorem} />
            <Majors majors={data?.majors}/>
            <Jobs jobs={data?.jobs}/>
        </section>
    )
}