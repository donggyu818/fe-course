import { Title, Description } from "../components/commons/Titles.jsx"
import Majors from "../components/content/Majors.jsx";
import Jobs from "../components/content/Jobs.jsx";
import { useOutletContext } from "react-router-dom";

export default function About() {
    const { data } = useOutletContext();
    // const lorem = `Lorem ipsum dolor sit amet consectetur adipisicing elit. 
    //             Inventore porro laborum, ut eius blanditiis voluptates officiis, 
    //             doloribus at autem aliquid consectetur perspiciatis? Sed dolor 
    //             placeat modi commodi, a alias velit!`;  // 길어서 따로 정의함
    
    return(
        <section id="about" className="section container">
            <Title title="About me" />
            <Description description={data?.about?.lorem} />
            <Majors majors={data?.about?.majors}/>
            <Jobs jobs={data?.about?.jobs}/>
        </section>
    )
}