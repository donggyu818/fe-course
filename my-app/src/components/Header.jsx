// import img01 from '../assets/images/img01.png';
// import favicon from '../assets/images/favicon.ico';
import './Header.css';
import img01 from '../assets/images/img01.png';

export default function Header() {
    return(
        <header className='header'>
            <img src={img01} alt='tree'></img>
            <h1>Header</h1>
            {/* <img src="img01.png" alt="" width="100px"/>
            <img src={img01} alt="" width="100px"/>
            <img src={favicon} alt="" width="100px"/> */}

        </header>
    )
}