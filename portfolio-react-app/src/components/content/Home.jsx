import AvatarImage from "../commons/AvatarImage.jsx"
import Menu from "../commons/Menu.jsx"

export default function Home( { data } ) {
    
    return(
        <section id="home">
            <AvatarImage img={data?.img}
                        alt={data?.alt}
                        style="home-avatar" />
            <h2 className="home-title">
                Hello<br />
                I'm <strong className="home-title-strong">Junior Developer</strong>, 
                    {data?.name}
            </h2>
            <p className="home-description">{data?.description}</p>
            <Menu href={data?.href} style='home-contact' name={data?.menuName} />
        </section>
    )
}