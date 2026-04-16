import React from 'react';
import AvatarImage from '../commons/AvatarImage.jsx';

export default function Projects({ projects }) {

    return (
        <ul className="projects">
            { projects?.map( (item, idx) => 
                <li className="project" key={idx}>
                    <AvatarImage img={item.img} alt={item.alt} style="project-img" />
                    {/* <img className="project-img" src={item.img} alt={item.alt}></img> 위에가 이거랑 같음. */}
                    <div className="project-meta">
                        <h3 className="project-meta-title">{item.name}</h3>
                        <p>{item.description}</p>
                    </div>
                </li>
            )}
        </ul>
    );
}