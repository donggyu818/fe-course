import { Title } from "./commons/Titles"
import { Description } from "./commons/Titles"
import Links from "./content/Links"

export default function Footer() {
    return(
            <footer id="contact" className="footer">
                <Title title="Let's Talk" />
                <Description description="com.developer.judy@gmail.com" />
                <Links />
                <p>Junior Software Engineer Judy's Portfolio - All right reserved</p>
            </footer>
    )
}