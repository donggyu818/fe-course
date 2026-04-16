import React from 'react';
import { Title, SubTitle } from '../commons/Titles';
import Testimonial from './Testimonial.jsx';

export default function Testimonials({ data }) {
    return (
        <section id="Testimonial" className="section container">
            <Title title='Testimonial' />
            <SubTitle subtitle='See what they say about me' />
            <Testimonial testimonial={data}/>
        </section>
    );
}
