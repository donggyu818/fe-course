/**
 * 부모 컴포넌트 : 최상위 컴포넌트 여기선 App
 */
import './App.css';
import Header from './components/Header.jsx';
import Body from './components/Body.jsx';
import Footer from './components/Footer.jsx';

export default function App() {
//   let name = '홍길동';
//   let age = 20;
//   let numbers = [1, 2, 3, 4, 5];
//   let fruits = {
//     name: "apple",
//     emoji: "🍎"
//   };

  return (  
    <>
      {/* <h1 style={{color:'blue', backgroundColor:'tomato'}}>Welcome to React World!!</h1>
      <Header />
      {/* <div>{a===true ? <span>a</span> : <span>b</span> ; }</div> }
      <ul>
        <li>{name + "학생"}</li>
        <li>{age + 10}</li>
        <li>{numbers}</li>
        { <li>{fruits}</li> }
        <li>{fruits.name}</li>
      </ul> */}
      <Header/>
      <Body />
      <Footer />
    </>
  )
}
