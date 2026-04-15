import Home from "./content/Home.jsx"
import About from "./content/About.jsx"
import Skills from "./content/Skills.jsx"

export default function Content({ data }) {
    
    return(
        <>
            <Home data={data?.home}/>
            <About data={data?.about}/>
            <Skills data={data?.skills}/>
        </>
    )
}