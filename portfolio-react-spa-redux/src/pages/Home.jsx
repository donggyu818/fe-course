import { useContext } from "react"
import AvatarImage from "../components/commons/AvatarImage.jsx"
import Menu from "../components/commons/Menu.jsx"
import { useOutletContext } from "react-router-dom"
import { useSelector } from "react-redux"

export default function Home() {
    const likeCount = useSelector((state) => state.like.count)
    const projectList = useSelector((state) => state.like.list)
    const { data } = useOutletContext();    // content 객체 전체가 넘어옴
    return(
        <section id="home">
            <AvatarImage img={data?.home?.img}
                        alt={data?.home?.alt}
                        style="home-avatar" />
            <h2 className="home-title">
                Hello<br />
                I'm <strong className="home-title-strong">Junior Developer</strong>, 
                    {data?.home?.name}
            </h2>
            <p className="home-description">{data?.home?.description}</p>
            <Menu href={data?.home?.href} style='home-contact' name={data?.home?.menuName} />
            <h2>❤ 좋아요[{likeCount}]</h2>
            <p>{projectList}</p>
        </section>
    )
}