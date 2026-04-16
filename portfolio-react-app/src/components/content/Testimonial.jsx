import React from 'react';
import AvatarImage from '../commons/AvatarImage';

export default function Testimonial({ testimonial }) {
    // const testimonial = [
    //     {
    //         "img" : "images/testimonials/people1.webp",
    //         "alt" : "people1",
    //         "description" : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, id maiores. Quod eius ipsum labore exercitationem. Ratione vero tenetur molestiae a quasi repellendus delectus, unde blanditiis quibusdam illo commodi nostrum.",
    //         "name" : "James Kim",
    //         "company" : "Google"
    //     },
    //     {
    //         "img" : "images/testimonials/people2.webp",
    //         "alt" : "people2",
    //         "description" : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, id maiores. Quod eius ipsum labore exercitationem. Ratione vero tenetur molestiae a quasi repellendus delectus, unde blanditiis quibusdam illo commodi nostrum.",
    //         "name" : "Smith Park",
    //         "company" : "Samsung"
    //     },
    //     {
    //         "img" : "images/testimonials/people3.webp",
    //         "alt" : "people3",
    //         "description" : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, id maiores. Quod eius ipsum labore exercitationem. Ratione vero tenetur molestiae a quasi repellendus delectus, unde blanditiis quibusdam illo commodi nostrum.",
    //         "name" : "Anna Lee",
    //         "company" : "Samsung"
    //     }
    // ]
    return (
        <ul className="testimonials">
            {testimonial?.map( (item, idx) => 
            <>
                <AvatarImage img={item.img} alt={item.alt} style="testimonial-img"/>
                <div className="testimonial-text"  key={idx}>
                    <p>{item.description}</p>
                    <p><a href="#">
                        <span className="testimonial-text-name">{item.name} / {item.company}</span>
                    </a>
                    </p>
                </div>
            </>
            )}
        </ul>
    );
}
/*
        <ul class="testimonials">
                <li class="testimonial">
                    <img class="testimonial-img" src="images/testimonials/people1.webp" alt="people1">
                    <div class="testimonial-text">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                            Error, id maiores. Quod eius ipsum labore exercitationem. 
                            Ratione vero tenetur molestiae a quasi repellendus delectus, 
                            unde blanditiis quibusdam illo commodi nostrum.
                        </p>
                        <p><a href="#" class="testimonial-text-name">James Kim</a> / Google</p>
                    </div>
                </li>
                <li class="testimonial">
                    <img class="testimonial-img" src="images/testimonials/people2.webp" alt="people2">
                    <div class="testimonial-text">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                            Error, id maiores. Quod eius ipsum labore exercitationem. 
                            Ratione vero tenetur molestiae a quasi repellendus delectus, 
                            unde blanditiis quibusdam illo commodi nostrum.
                        </p>
                        <p><a href="#" class="testimonial-text-name">Smith Park</a> / Samsung</p>
                    </div>
                </li>
                <li class="testimonial">
                    <img class="testimonial-img" src="images/testimonials/people3.webp" alt="people3">
                    <div class="testimonial-text">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                            Error, id maiores. Quod eius ipsum labore exercitationem. 
                            Ratione vero tenetur molestiae a quasi repellendus delectus, 
                            unde blanditiis quibusdam illo commodi nostrum.
                        </p>
                        <p><a href="#" class="testimonial-text-name">Anna Lee</a> / Samsung</p>
                    </div>
                </li>
            </ul>
*/