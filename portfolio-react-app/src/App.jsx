import './App.css';
import { useState, useEffect } from 'react';
import { fetchData } from './util/fetch.js';
import Header from './components/Header.jsx'
import Content from './components/Content.jsx'
import Footer from './components/Footer.jsx'

export default function App() {
  const [data, setData] = useState({});
  useEffect( () => {
    const loadData = async() => {
      const jsonData = await fetchData('http://localhost:5173/data/portfolio.json');
                  // 이렇게 주소를 통해 넘어오는 애들은 데이터를 넘겨받을 때 존재하는지 체크를 해야함.
      setData(jsonData);
    }
    loadData();
  } , []);
  

  return (
    <>
      <Header data={data?.header} />
      <Content data={data?.content}/>
      <Footer />
    </>
  )
}