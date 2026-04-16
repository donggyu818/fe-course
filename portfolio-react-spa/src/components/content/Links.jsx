import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

export default function Links() {
    const footer = [
        {"href" : "#", "icon" : "github"},
        {"href" : "#", "icon" : "linkedin"}
    ]
    return (
        <ul className="contact-links">
            {footer.map( (item, idx) => 
                <li key={idx}>
                    <a href={item.href} className="contact-link">
                        {item.icon === "github" && <FontAwesomeIcon icon={faGithub} /> }
                        {item.icon === "linkedin" && <FontAwesomeIcon icon={faLinkedin} /> }
                    </a>
                </li>
            )}
        </ul>
    );
}

