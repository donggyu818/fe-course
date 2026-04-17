import React from 'react';
import { Title, SubTitle } from "../components/commons/Titles.jsx"
import Testimonial from '../components/content/Testimonial.jsx';
import { useOutletContext } from 'react-router-dom';

export default function Testimonials() {
    const { data } = useOutletContext();
    return (
        <section id="Testimonial" className="section container">
            <Title title='Testimonial' />
            <SubTitle subtitle='See what they say about me' />
            <Testimonial testimonial={data?.testimonial}/>
        </section>
    );
}
