import Logo from "./common/Logo.jsx";
import Image from "./common/Image.jsx";
import people1 from "./assets/people1.webp";

export default function App() {
    return(
        <>
            <Logo img="https://www.lottecinema.co.kr/NLCHS/Content/images/common/logo_footer.gif"
            alt="Logo Img" w="300px" h="100%" />
            <Logo img="https://cgv.co.kr/_next/image?url=https%3A%2F%2Fcdn.cgv.co.kr%2Fcgvpomscontent%2Fstatic%2Fpublic%2Fimages%2Fmco%2Flogo%2Flogo_cgv.png&w=256&q=75"
            alt="CGV Logo Img" w="300px" h="100%" />

            <Image img={people1}
            alt="프로필 사진"
            w="180px"
            h="200px" />
        </>
    )
}