import React from 'react';
import AvatarImage from '../commons/AvatarImage.jsx';
import Modal from './Modal.jsx';
import { useState } from 'react';

export default function Projects({ projects }) {
    const [selectedProject, setSelectedProject] = useState(null);

    return (
        <>
            <ul className="projects">
                { projects?.map( (item, idx) => 
                    <li className="project" key={idx} onClick={() => setSelectedProject(item)}>
                        <AvatarImage img={item.img} alt={item.alt} style="project-img" />
                        {/* <img className="project-img" src={item.img} alt={item.alt}></img> 위에가 이거랑 같음. */}
                        <div className="project-meta">
                            <h3 className="project-meta-title">{item.name}</h3>
                            <p>{item.description}</p>
                        </div>
                    </li>
                )}
            </ul>

            { selectedProject && <Modal project={selectedProject} onClose={() => setSelectedProject(null)} />}
        </>
    );
}